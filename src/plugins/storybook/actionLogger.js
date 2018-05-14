import { Collapse } from "antd";
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
        <Panel header="ACTIONS">
          {logs && logs.length > 0
            ? logs.map(log => (
                <div>
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
        return {
          ...state,
          logs: state.logs.concat({
            name,
            payload
          })
        };
      },
      clear() {
        return {
          logs: []
        };
      }
    },
    subscriptions: {
      setup({ history, dispatch }) {
        // 监听 history 变化，清除日志
        return history.listen(({ pathname }) => {
          dispatch({
            type: "pluginsLogger/clear"
          });
        });
      }
    }
  }
};
