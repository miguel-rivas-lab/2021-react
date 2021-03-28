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
    className: undefined,
  }) => {
  const computedLabel = props.value ? `${props.value} button` : "";
  const computedClasses = classNames(
    "btn",
    props.size,
    props.color,
    props.className,
    props.size,
    {
      'active': props.active,
      'icon': props.glyph,
    },
  );
  
  return (
    <a
      className={computedClasses}
      role="button"
      aria-label={computedLabel}
      href={props.to}
      target="_blank"
      rel="noreferrer"
    >
      <Icon glyph={props.glyph} />
      <span>
        {props.value}
      </span>
    </a>
  );
}

Btn.defaultProps = {  
  tag: "button",
  color: "gravel",
  active: false,
}

export default Btn;