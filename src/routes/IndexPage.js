import React, { Component } from "react";
import { Route } from "dva/router";
import { connect } from "dva";

import stories from "../../stories/index";

import Sider from "../components/Sider";
import CodeLab from "../components/CodeLab";
import APIGrid from "../components/APIGrid";
import CodeBox from "../components/CodeBox";

// plugins
import actionLogger from "../plugins/storybook/actionLogger";

import styles from "./IndexPage.css";

const ActionLogger = actionLogger.render;

function removeSpaces(str) {
  return str.split(" ").join("");
}

function replaceFunctionWithNoop(v) {
  if (String(v).indexOf("function") !== -1) {
    return `function() {}`;
  }

  return JSON.stringify(v);
}
function getCode(props, cmpName = "Component") {
  if (!props) return;
  const propsStr = Object.keys(props)
    .filter(prop => props[prop] !== undefined)
    .map(prop => `${prop}={${replaceFunctionWithNoop(props[prop])}}`)
    .join("\n    ");
  return `
  <${cmpName}
    ${propsStr}
  />`;
}
const getRoutComponnet = connect(({ codelab }) => ({
  codelab
}))(function({ location, codelab, dispatch }) {
  const { pathname } = location;

  const namespace = pathname.slice(1);
  const subKey = namespace.split("/")[0];
  const itemKey = namespace.split("/")[1];
  const item = stories[subKey][itemKey];

  return (
    <div>
      <div className={styles["sb-desc"]}>
        <div>{item.desc}</div>
      </div>
      <div className={styles.panel}>{item.render(codelab[namespace])}</div>

      <div className={styles["code-box-wrapper"]}>
        {codelab[namespace] && (
          <CodeBox
            codelab={codelab}
            code={getCode(
              {
                ...codelab[namespace],
                activeKey: undefined
              },
              item.cmpName
            )}
            dispatch={dispatch}
            namespace={namespace}
            activeKey={codelab[namespace].activeKey}
          />
        )}
      </div>

      <CodeLab
        codelab={codelab}
        api={item.api}
        dispatch={dispatch}
        namespace={namespace}
      />

      <div className={styles["api-grid"]}>
        <APIGrid api={item.api} />
      </div>
    </div>
  );
});

function getRouterComponnet({ match, location }) {
  const { pathname } = location;

  const namespace = pathname.slice(1);
  const subKey = namespace.split("/")[0];
  return Object.keys(stories[subKey]).map(itemKey => {
    return (
      <Route
        key={subKey + itemKey}
        path={`${match.url}/${removeSpaces(itemKey)}`}
        component={getRoutComponnet}
      />
    );
  });
}

class IndexPage extends Component {
  renderRoute({ subKey }) {
    return (
      <Route key={subKey} path={`/${subKey}`} component={getRouterComponnet} />
    );
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <Sider stories={stories} />

        <ActionLogger />

        {Object.keys(stories).map(subKey =>
          this.renderRoute({
            subKey
          })
        )}
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default connect(({ codelab }) => ({
  codelab
}))(IndexPage);
