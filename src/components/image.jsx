const classNames = require('classnames');

const Image3D = (
  props = {
    src: undefined,
    className: undefined,
  }) => {

  const computedClasses = classNames(
    "perspective",
    props.size,
  );

  return (
    <div className={computedClasses}>
      <img src={props.src} alt="Perspective"/>
    </div>
  );
}

export default Image3D;