import {validateSize} from "nano-grid/ts/columns-manager.ts";
const classNames = require('classnames');

const Btn = (props = { children: undefined, size: undefined, mode: "column", tag: "div", tableElement: false }) => {
  const classes = classNames(validateSize(props.size), props.mode);
  return (
    <div className={classes} role={classNames({"cell": props.tableElement})}>
      {props.children}
    </div>
  );
}

Column.defaultProps = {  
  mode: "column",
  tag: "div",
  tableElement: false
}

export default Column;