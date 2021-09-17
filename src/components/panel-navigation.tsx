import { ReactElement } from "react";
import Row from './row';
import Column from './column';
import Btn from './btn';
import { useDispatch, useSelector } from 'react-redux';
import classNames from "classnames";
import { useLocation } from 'react-router-dom';
import { toggleTheme } from '../redux/theme';
import { toggleUniverse } from '../redux/universe';
import { togglePanelVisibility } from "../redux/panel";

function playSound() {
  const context = new AudioContext();
  const newSound = context.createOscillator();
  const newGain = context.createGain();
  newSound.connect(newGain);
  newSound.frequency.value = 300;
  newGain.connect(context.destination);
  newSound.start(0);
  newGain.gain.exponentialRampToValueAtTime(
    0.00000001,
    context.currentTime + 0.5
  );
}

function Navigation(): ReactElement {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigationRoutes = [
    { icon: "monster", route: "home", path: "/" },
    // { icon: "chart-bar", route: "monitor", path: "/monitor" },
    { icon: "server-network", route: "server", path: "/server" },
  ];
  const result = [];
  navigationRoutes.forEach((item, index) => {
    const isActive = location.pathname === item.path;
    if (isActive) {
      result.push(
        <Btn
          key={`nav-${index}`}
          onClick={() => {
            dispatch(togglePanelVisibility());
            playSound();
          }}
          active={true}
          icon={item.icon}
        />
      );
    } else {
      result.push(
        <Btn
          key={`nav-${index}`}
          tag="link"
          to={item.path}
          icon={item.icon}
        />
      );
    }
  });
  return <>{result}</>;
}

function PanelNavigation(): ReactElement {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: any) => state.theme);
  const themeBtnClasses = classNames({ "active": !theme });

  return (
    <Column size="50" addClass="main-panel">
      <div className="container">
        <Row vertical={true}>
          <Column size="100%-35*2">
            <Navigation />
          </Column>
          <Column mode="suffix" size="130">
            <Btn
              tag="a"
              addClass="btn-vue"
              icon="vuejs"
              color="gravel"
              href="https://miguel-rivas.github.io/2021-vue"
            />
            <Btn
              onClick={() => {
                dispatch(toggleTheme());
                playSound();
              }}
              icon="brightness-4"
              color="charcoal"
              addClass={themeBtnClasses}
            />
            <Btn
              onClick={() => {
                dispatch(toggleUniverse());
                playSound();
              }}
              icon="cow"
              color="persian-red"
            />
          </Column>
        </Row>
      </div>
    </Column>
  );
}

export default PanelNavigation;