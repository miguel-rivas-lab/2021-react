import React from 'react';
import Row from './components/row';
import Column from './components/column';
import PanelNavigation from './components/panel-navigation';

function App() {
  return (
    <main className="react-theme nano-dark">
      <Row addClass="nano-app">
        <PanelNavigation />
        <Column size="100%-50">
        </Column>
      </Row>
    </main>
  );
}

{/*  */ }

export default App;
