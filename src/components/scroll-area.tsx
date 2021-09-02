import { ReactElement, ReactNode } from "react";
import classNames from 'classnames';

type ScrollAreaProps = {
  children?: ReactNode,
  color?: "royal-purple" | "gravel" | "persian-red",
}

function ScrollArea({ children, color }: ScrollAreaProps): ReactElement {
  const computedClasses = classNames(color, "scroll-area");
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