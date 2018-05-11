import React from "react";
import { Route } from "dva/router";
import { connect } from "dva";

import stories from "../../stories/index";

import Sider from "../components/Sider";
import CodeLab from "../components/CodeLab";
import APIGrid from "../components/APIGrid";

import styles from "./IndexPage.css";

function IndexPage({ match, codelab, location }) {
  const { pathname } = location;

  return (
    <div className={styles.wrapper}>
      <Sider stories={stories} />

      {Object.keys(stories).map(subKey => (
        <Route
          key={subKey}
          path={`/${subKey}`}
          component={({ match }) => {
            return Object.keys(stories[subKey]).map(itemKey => (
              <Route
                key={itemKey}
                path={`${match.url}/${itemKey.split(" ").join("")}`}
                component={() => {
                  const item = stories[subKey][itemKey];

                  return (
                    <div>
                      <div className={styles["sb-desc"]}>
                        <div>{item.desc}</div>
                      </div>
                      <div className={styles.panel}>
                        {item.render(codelab[pathname])}
                      </div>
                      <CodeLab api={item.api} pathname={pathname} />

                      <div className={styles["api-grid"]}>
                        <APIGrid api={item.api} />
                      </div>
                    </div>
                  );
                }}
              />
            ));
          }}
        />
      ))}
    </div>
  );
}

IndexPage.propTypes = {};

export default connect(({ codelab }) => ({
  codelab
}))(IndexPage);
