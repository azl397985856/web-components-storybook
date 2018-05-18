import { Collapse, Icon } from "antd";
import { connect } from "dva";

import styles from "./actionLogger.less";
const Panel = Collapse.Panel;

function actionLogger({ payload, name }) {
  window.dispatch({
    type: "pluginsLogger/log",
    ...{
      payload: payload,
      name
    }
  });
}

const render = connect(({ pluginsLogger }) => ({
  pluginsLogger
}))(function({ text, dispatch, pluginsLogger }) {
  const logs = pluginsLogger.logs;

  return (
    <div className={styles.wrapper}>
      <Collapse>
        <Panel
          header={
            <div>
              ACTIONS
              <span
                onClick={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  return dispatch({
                    type: "pluginsLogger/clear"
                  });
                }}
                className={styles.delete}
              >
                <Icon type="delete" />
              </span>
            </div>
          }
        >
          {logs && logs.length > 0
            ? logs.map((log, i) => (
                <div key={i}>
                  <span className={styles["item-name"]}>{log.name}</span> :{" "}
                  {log.payload}
                </div>
              ))
            : "暂无日志"}
        </Panel>
      </Collapse>
    </div>
  );
});

export default {
  render: render,
  invoke: actionLogger,
  model: {
    namespace: "pluginsLogger",
    state: {
      logs: []
    },
    reducers: {
      log(state, { name, payload }) {
        const namespace = window.location.hash.slice(
          0,
          window.location.hash.indexOf("?")
        );

        return {
          ...state,
          logs: state.logs.concat({
            name,
            payload,
            namespace
          })
        };
      },
      clear() {
        return {
          logs: []
        };
      },
      clearByNamespace(state, { payload: namespace }) {
        return {
          ...state,
          logs: state.logs.filter(log => log.namespace === namespace)
        };
      }
    },
    subscriptions: {
      setup({ history, dispatch }) {
        // 监听 history 变化，清除日志
        return history.listen(() => {
          const namespace = window.location.hash.slice(
            0,
            window.location.hash.indexOf("?")
          );
          dispatch({
            type: "clearByNamespace",
            payload: namespace
          });
        });
      }
    }
  }
};
