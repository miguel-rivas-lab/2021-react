import { ReactElement, ReactNode } from "react";
import classNames from 'classnames';
import { colorsType } from '../types/colors';

type ScrollAreaProps = {
  children?: ReactNode,
  color?: colorsType,
  addClass?: String,
}

function ScrollArea({ children, color, addClass}: ScrollAreaProps): ReactElement {
  const computedClasses = classNames(color, addClass, "scroll-area");
  return (
    <div className={computedClasses}>
      {children}
    </div>
  );
}

ScrollArea.defaultProps = {
  color: "royal-purple",
}

export default ScrollArea;