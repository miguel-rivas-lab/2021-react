import Icon from './icon.jsx';
const classNames = require('classnames');

const Btn = (
  props = {
    tag: undefined,
    glyph: undefined,
    size: undefined,
    value: undefined,
    color: undefined,
    active: undefined,
    to: undefined,
  }) => {
  const computedLabel = props.value ? `${props.value} button` : "";
  const computedClasses = classNames(
    "btn",
    "flat",
    props.size,
    props.color,
    props.size,
    {
      'active': props.active,
      'icon': props.glyph,
    },
  );
  
  return (
    <button
      className={computedClasses}
      role="button"
      aria-label={computedLabel}
    >
      <Icon glyph={props.glyph} />
      <span>
        {props.value}
      </span>
    </button>
  );
}

Btn.defaultProps = {  
  tag: "button",
  color: "gravel",
  active: false,
}

export default Btn;