import {validateSpacing} from "nano-grid/ts/columns-manager.ts";
const classNames = require('classnames');

const Row = (
  props = {
    children: undefined,
    tag: undefined,
    isHeading: undefined,
    tableElement: undefined,
    squareTag: undefined,
    group: undefined,
    integrate: undefined,
    spacing: undefined,
  }) => {
  const computedClasses = classNames(
    "nano-row",
    validateSpacing(props.spacing),
    {
      'nano-group': props.group,
      'integrate': props.integrate,
    },
  );
  const computedRole = classNames({
    "row": props.tableElement,
    "group": props.squareTag || props.group,
  });

  return (
    <div
      className={computedClasses}
      role={computedRole}
    >
      {props.children}
    </div>
  );
}

Row.defaultProps = {  
  tag: "div",
  tableElement: false,
  isHeading: false,
  group: false,
  integrate: false,
  squareTag: false,
  spacing: 0,
}

export default Row;