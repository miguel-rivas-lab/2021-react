import {validateSize} from "nano-grid/ts/columns-manager.ts";
const classNames = require('classnames');

const Column = (
  props = {
    children: undefined,
    size: undefined,
    mode: undefined,
    tag: undefined,
    tableElement: undefined,
  }) => {
  const computedClasses = classNames(
    props.mode,
    validateSize(props.size),
  );
  const computedRole = classNames({"cell": props.tableElement});

  return (
    <div
      className={computedClasses}
      role={computedRole}
    >
      {props.children}
    </div>
  );
}

Column.defaultProps = {  
  mode: "column",
  tag: "div",
  tableElement: false,
}

export default Column;