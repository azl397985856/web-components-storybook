import React, { Component } from "react";
import { Icon, Tooltip, Collapse, message } from "antd";

import { Highlight } from "react-fast-highlight";

import copy from "../utils/clipboard";

import styles from "./CodeBox.less";

const Panel = Collapse.Panel;

function handleCopy(code, e) {
  e.stopPropagation();
  e.preventDefault();
  copy(code);
  message.success("代码复制成功～");
}

export default class CodeBox extends Component {
  render() {
    const { code, dispatch, namespace } = this.props;

    return (
      <Collapse
        activeKey={this.props.activeKey}
        onChange={key => {
          dispatch({
            type: "codelab/update",
            payload: {
              activeKey: key
            },
            namespace
          });
        }}
      >
        <Panel
          header={
            <div className={styles["code-box-header"]}>
              <span>代码</span>

              <span onClick={handleCopy.bind(null, code)}>
                <Tooltip title="复制当前代码">
                  <Icon type="copy" />
                </Tooltip>
              </span>
            </div>
          }
          key="code-box"
        >
          <div className={styles["code-box"]}>
            <Highlight languages={["XML"]}>{code}</Highlight>
          </div>
        </Panel>
      </Collapse>
    );
  }
}
