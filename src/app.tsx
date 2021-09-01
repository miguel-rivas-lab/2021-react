import React from 'react';
import Row from './components/row';
import Column from './components/column';
import PanelNavigation from './components/panel-navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Monitor from './views/monitor';

function App() {
  return (
    <main className="react-theme nano-dark">
      <Router>
        <Row addClass="nano-app">
          <PanelNavigation />
          <Column size="100%-50">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/monitor">
                <Monitor />
              </Route>
            </Switch>
          </Column>
        </Row>
      </Router>
    </main>
  );
}

{/*  */ }

export default App;
