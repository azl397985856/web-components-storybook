import { InputNumber, Switch, DatePicker, Select } from "antd";

import { connect } from "dva";

import styles from "./CodeLab.less";

const Option = Select.Option;

function getComponent(key, api, mapper) {
  const type = api[key].type.name;
  if (type === "Object") {
    const children = api[key].children;
    if (!children) return;
    return Object.keys(children).map(innerKey =>
      getComponent(innerKey, children, mapper)
    );
  }
  // 如果提供option则使用Enum（Select组件）
  if (api[key].options) {
    return mapper["Enum"] && mapper["Enum"](api[key], key);
  }
  return mapper[type] && mapper[type](api[key], key);
}

function CodeLabItem({ itemKey, children }) {
  return (
    <div className={styles["code-lab-item"]}>
      <span className={styles["code-lab-field"]}>{itemKey}:</span>
      <div className={styles["code-lab-value"]}>{children}</div>
    </div>
  );
}

export default connect(({ codelab }) => ({
  codelab
}))(function CodeLab({ api, dispatch, codelab, pathname: namespace }) {
  if (!api) return "Please provide apis of the component~";

  function getCodelabItemMixin(key, value, namespace) {
    return {
      onChange(v) {
        dispatch({
          type: "codelab/update",
          payload: {
            [key]: v
          },
          namespace
        });
      },
      value
    };
  }

  const keys = Object.keys(api);
  const mapper = {
    Object: "", // Object什么都不展示
    Number({ title, ...rest }, key) {
      return (
        <CodeLabItem itemKey={key} key={key}>
          <InputNumber
            defaultValue={0}
            {...getCodelabItemMixin(key, codelab[namespace][key], namespace)}
          />
        </CodeLabItem>
      );
    },
    Boolean({ title }, key) {
      return (
        <CodeLabItem itemKey={key} key={key}>
          <Switch
            checked={codelab[namespace][key]}
            {...getCodelabItemMixin(key, codelab[namespace][key], namespace)}
          />
        </CodeLabItem>
      );
    },
    Date({ title }, key) {
      return (
        <CodeLabItem itemKey={key} key={key}>
          <DatePicker
            {...getCodelabItemMixin(key, codelab[namespace][key], namespace)}
          />
        </CodeLabItem>
      );
    },
    Enum({ title, options }, key) {
      return (
        <CodeLabItem itemKey={key} key={key}>
          <Select
            style={{ width: 120 }}
            {...getCodelabItemMixin(key, codelab[namespace][key], namespace)}
          >
            {options.map(option => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </CodeLabItem>
      );
    }
  };
  return (
    <div className={styles["code-lab"]}>
      {keys.map(key => getComponent(key, api, mapper))}
    </div>
  );
});
