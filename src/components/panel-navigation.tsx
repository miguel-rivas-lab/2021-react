import { ReactElement } from "react";
import Row from './row';
import Column from './column';
import Btn from './btn';
import { useDispatch, useSelector } from 'react-redux';
import classNames from "classnames";
import { toggleTheme } from '../redux/theme';
import { togglePanelVisibility } from "../redux/panel";
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

function Navigation(props): ReactElement {
  const dispatch = useDispatch();
  const navigationRoutes = [
    { icon: "rocket-launch", name: "xwing", polygons: [{ scale: 1, },], },
    { icon: "car", name: "car", polygons: [{ scale: 0.8, },], },
    { icon: "briefcase", name: "backpack", polygons: [{ scale: 0.6, },], },
    // { icon: "chair-school", name: "chair", },
    // { icon: "sail-boat", name: "drakkar", },
    // { icon: "monster", name: "taza", },
    // { icon: "monster", name: "umbrella", },
    // { icon: "monster", name: "caballo", },
    // { icon: "monster", name: "llave", },
    // { icon: "monster", name: "macbook", },
    // { icon: "monster", name: "plane", },
  ];
  const result = [];
  navigationRoutes.forEach((item, index) => {
    const isActive = props.model.name === item.name;
    result.push(
      <Btn
        key={`nav-${index}`}
        onClick={() => {
          dispatch(setCurrentModel({
            name: item.name,
            polygons: item.polygons,
          }));
          if (isActive) {
            dispatch(togglePanelVisibility());
            playSound();
          }
        }}
        active={isActive}
        icon={item.icon}
      />
    );
  });
  return <>{result}</>;
}

function PanelNavigation(): ReactElement {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: any) => state.theme);
  const { currentModel } = useSelector((state: any) => state.currentModel);
  const themeBtnClasses = classNames(
    { "active": !theme }
  );

  return (
    <Column size="50" addClass="main-panel">
      <div className="container">
        <Row vertical={true}>
          <Column size=",100%-35">
            <Navigation model={currentModel} />
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