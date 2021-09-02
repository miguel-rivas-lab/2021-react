import { ReactElement } from "react";
import Row from './row';
import Column from './column';
import LinkBtn from './link-btn';
import Icon from './icon';
import Btn from './btn';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/theme';
import classNames from "classnames";

function Navigation(): ReactElement {
  const navigationRoutes = [
    { icon: "monster", route: "home", path: "/" },
    { icon: "chart-bar", route: "monitor", path: "/monitor" },
    { icon: "server-network", route: "server", path: "/server" },
  ];
  const result = [];
  navigationRoutes.forEach(item => {
    result.push(<LinkBtn to={item.path} addClass={classNames("tooltip", item.route)} icon={item.icon} />);
  });
  return <>{result}</>;
}

function PanelNavigation(): ReactElement {
  const { theme } = useSelector((state: any) => state.theme);
  const themeBtnClasses = classNames("flat btn icon charcoal md tooltip theme", { "active": !theme });
  const dispatch = useDispatch();
  return (
    <Column size="50" addClass="main-panel">
      <div className="container">
        <Row vertical={true}>
          <Column size="100%-35*2">
            <Navigation />
            <hr />
            <a href="https://miguel-rivas.github.io/miguel-rivas-2021" className="flat btn icon gravel">
              <Icon glyph="vuejs" />
            </a>
          </Column>
          <Column mode="suffix" size="35">
            <Btn onClick={() => dispatch(toggleTheme())} icon="brightness-4" color="charcoal" addClass={themeBtnClasses} />
          </Column>
          <Column mode="suffix" size="35">
            <Btn addClass="tooltip universe" icon="cow" color="persian-red" />
          </Column>
        </Row>
      </div>
    </Column>
  );
}

export default PanelNavigation;