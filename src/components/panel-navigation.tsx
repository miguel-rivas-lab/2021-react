import { ReactElement } from "react";
import Row from './row';
import Column from './column';
import { Link } from 'react-router-dom';

function PanelNavigation(): ReactElement {
  return (
    <Column size="50" addClass="main-panel">
      <div className="container">
        <Row vertical={true}>
          <Column size="100%-35*2">
            <Link to="/" className="flat btn icon gravel md tooltip home">
              <span className="mdi mdi-monster" />
            </Link>
            <Link to="/monitor" className="flat btn icon gravel md tooltip home">
              <span className="mdi mdi-monster" />
            </Link>
          </Column>
          <Column mode="suffix" size="35">
            <button className="flat btn icon charcoal md tooltip theme">
              <span className="mdi mdi-brightness-4" />
            </button>
          </Column>
          <Column mode="suffix" size="35">
            <button className="flat btn icon persian-red md tooltip universe">
              <span className="mdi mdi-cow" />
            </button>
          </Column>
        </Row>
      </div>
    </Column>
  );
}

export default PanelNavigation;