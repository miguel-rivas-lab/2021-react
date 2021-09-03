import { useSelector, useDispatch } from 'react-redux';
import Btn from "../components/btn";
import Column from "../components/column";
import Row from "../components/row";
import ScrollArea from '../components/scroll-area';
import { setValue, toggleValue } from "../redux/home";

function NumberInput({ label, value = 0, increment = 1, axis }) {
  const dispatch = useDispatch();
  return (
    <Row>
      <Column>
        <label>{label}</label>
      </Column>
      <Column>
        <Row group>
          <Column mode="prefix" size="35">
            <Btn icon="minus" onClick={() => {
              value -= increment;
              dispatch(setValue({ value: value, axis: axis }));
            }} />
          </Column>
          <Column size="100%-35*2">
            <p className="input-label">{value}</p>
          </Column>
          <Column mode="suffix" size="35">
            <Btn icon="plus" onClick={() => {
              value += increment;
              dispatch(setValue({ value: value, axis: axis }));
            }} />
          </Column>
        </Row>
      </Column>
    </Row>
  );
}

function HomePanel() {
  const { home } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  return (
    <ScrollArea color="royal-purple">
      <fieldset className="nano-row row-block">
        <Column>
          <legend>Animation Controllers</legend>

          <Row>
            <Column>
            <Btn
              active={home.cover}
              color="charcoal"
              value="Cover"
              onClick={()=> {
                dispatch(toggleValue("cover"));
              }}
            />
            </Column>
          </Row>

          <Row>
            <Column>
              <Btn
                active={home.pause}
                color="charcoal"
                value="Pause"
                onClick={()=> {
                  dispatch(toggleValue("pause"));
                }}
              />
            </Column>
          </Row>

          <NumberInput label="X Rotation" value={home.x} axis="x" />
          <NumberInput label="Y Rotation" value={home.y} axis="y" />
          <NumberInput label="Z Rotation" value={home.z} axis="z" />
        </Column>
      </fieldset>
    </ScrollArea>
  );
}

export default HomePanel;