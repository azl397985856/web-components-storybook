import React from "react";
import { Router, Route, Switch } from "dva/router";

import IndexPage from "./routes/IndexPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={IndexPage} />

        <Route path="*" component={() => "404 Not Found"} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
