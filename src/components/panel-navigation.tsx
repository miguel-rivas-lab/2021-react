import { ReactElement } from "react";
import Row from './row';
import Column from './column';
import Btn from './btn';
import { useDispatch, useSelector } from 'react-redux';
import classNames from "classnames";
import { toggleTheme } from '../redux/theme';
// import { togglePanelVisibility } from "../redux/panel";
import { setCurrentModel } from "../redux/model";

function playSound() {
  let context = new AudioContext();
  let newSound = context.createOscillator();
  let newGain = context.createGain();
  newSound.connect(newGain);
  newSound.frequency.value = 300;
  newGain.connect(context.destination);
  newSound.start(0);
  newGain.gain.exponentialRampToValueAtTime(
    0.00000001,
    context.currentTime + 0.5
  );
};

function Navigation(): ReactElement {
  const dispatch = useDispatch();
  const navigationRoutes = [
    { icon: "rocket-launch", geometry: "xwing", },
    { icon: "car", geometry: "car", },
    { icon: "briefcase", geometry: "backpack", },
    { icon: "chair-school", geometry: "chair", },
    // { icon: "sail-boat", geometry: "drakkar", },
    // { icon: "monster", geometry: "taza", },
    // { icon: "monster", geometry: "umbrella", },
    // { icon: "monster", path: "caballo", },
    // { icon: "monster", path: "llave", },
    // { icon: "monster", path: "macbook", },
    // { icon: "monster", path: "plane", },
  ];
  const result = [];
  navigationRoutes.forEach((item, index) => {
    result.push(
      <Btn
        key={`nav-${index}`}
        onClick={() => {
          // dispatch(togglePanelVisibility());
          dispatch(setCurrentModel(item.geometry));
          playSound();
        }}
        icon={item.icon}
      />
    );
  });
  return <>{result}</>;
}

function PanelNavigation(): ReactElement {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: any) => state.theme);
  const themeBtnClasses = classNames(
    { "active": !theme }
  );

  return (
    <Column size="50" addClass="main-panel">
      <div className="container">
        <Row vertical={true}>
          <Column size=",100%-35">
            <Navigation />
          </Column>
          <Column mode="suffix" size=",35">
            <Btn
              onClick={() => {
                dispatch(toggleTheme());
                playSound();
              }}
              icon="brightness-4"
              color="charcoal"
              addClass={themeBtnClasses}
            />
          </Column>
        </Row>
      </div>
    </Column>
  );
}

export default PanelNavigation;