const classNames = require('classnames');

const Icon = (
  props = {
    color: undefined,
    tag: undefined,
    mode: undefined,
    glyph: undefined,
    direction: undefined,
  }) => {

    // const computedMode = () => {
    //   switch(props.mode){
    //     case 'mdi':
    //       return `mdi-${props.glyph}`;
    //     default:
    //       return props.glyph;
    //   };
    // }

    const computedClasses = classNames(
      'mdi',
      `mdi-${props.glyph}`,
      props.color,
      props.glyph,
      props.direction,
      {
        'colorized': props.color,
      },
    );

    return (
      <span className={computedClasses} />
    );
  }

  Icon.defaultProps = {  
    tag: "span",
    mode: "mdi",
  }
    
export default Icon;