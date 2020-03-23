import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import styles from'./index.less';
import ZMockHeader from "./components/ZMockHeader";

function RouterConfig({ history ,app}) {
  const ZMockMain = dynamic({
    app,
    component: () => import("./pages/ZMockMain")
  })
  const ZMockProject = dynamic({
    app,
    component: () => import("./pages/ZMockProject")
  })
  const ZMockAdd = dynamic({
    app,
    component: () => import("./pages/ZMockAdd")
  })
  const ZMockEdit = dynamic({
    app,
    component: () => import("./pages/ZMockEdit")
  })
  return (
    <Router history={history}>
      <div className={styles.zmock_container}>
        <ZMockHeader/>
        <Switch>
          <Route path="/" exact component={ZMockMain} />
          <Route path="/project/:id" exact component={ZMockProject} />
          <Route path="/project/add/:id" exact component={ZMockAdd} />
          <Route path="/project/edit/:id/:iid" exact component={ZMockEdit} />
        </Switch>
      </div>
    </Router>
  );
}

export default RouterConfig;