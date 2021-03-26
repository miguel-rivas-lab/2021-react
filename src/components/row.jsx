const classNames = require('classnames');

const Row = (
  props = {
    children: undefined,
    tag: undefined,
    isHeading: undefined,
    tableElement: undefined,
    squareTag: undefined,
    group: undefined,
    content: undefined,
    integrate: undefined,
  }) => {
  const computedClasses = classNames(
    "nano-row",
    {
      'nano-group': props.group,
      'integrate': props.integrate,
      'content': props.content,
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
  content: false,
  integrate: false,
  squareTag: false,
}

export default Row;