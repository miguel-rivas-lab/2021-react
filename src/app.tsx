import React from 'react';
import Row from './components/row';
import Column from './components/column';
import PanelNavigation from './components/panel-navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from "classnames";
// ---------- Views
import HomeWorkarea from './views/home-workarea.jsx';
import HomePanel from './views/home-panel.jsx';

function App() {
  const { panelVisibility } = useSelector((state: any) => state.panelVisibility);
  const { theme } = useSelector((state: any) => state.theme);
  const appClasses = classNames("react-theme", "section-home", {
    "nano-dark": !theme,
    "nano-light": theme,
  });

  let base = "/";
  if(process.env.NODE_ENV === 'production'){
    base = "/miguel-rivas-2021-2/";
  }

  return (
    <Router basename={base}>
      <main className={appClasses}>
        <Row addClass="nano-app">
          <PanelNavigation />
          <Column size="350" addClass={classNames("panel", "router-area", { 'hide-panel': !panelVisibility })}>
            <Switch>
              <Route exact path="/">
                <HomePanel />
              </Route>
            </Switch>
          </Column>
          <Column size={panelVisibility ? '100%-350' : '100%-50'} addClass="workarea">
            <Switch>
              <Route exact path="/">
                <HomeWorkarea />
              </Route>
            </Switch>
          </Column>
        </Row>
      </main>
    </Router>
  );
}

export default App;
