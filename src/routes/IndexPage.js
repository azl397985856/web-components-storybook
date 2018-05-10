import React from "react";
import { Route } from "dva/router";
import { connect } from "dva";

import example from "../../stories/example/";
import button from "../../stories/button/";

import Sider from "../components/Sider";
import CodeLab from "../components/CodeLab";
import APIGrid from "../components/APIGrid";

import styles from "./IndexPage.css";

const storiesRoutes = {
  ...example.getStory(),
  ...button.getStory()
};

function IndexPage({ match, codelab, location }) {
  const { pathname } = location;

  return (
    <div className={styles.wrapper}>
      <Sider
        stories={{
          ...example.getStory(),
          ...button.getStory()
        }}
      />

      {Object.keys(storiesRoutes).map(subKey => (
        <Route
          key={subKey}
          path={`/${subKey}`}
          component={({ match }) => {
            return Object.keys(storiesRoutes[subKey]).map(itemKey => (
              <Route
                key={itemKey}
                path={`${match.url}/${itemKey.split(" ").join("")}`}
                component={() => {
                  const item = storiesRoutes[subKey][itemKey];

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
