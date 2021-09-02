import { ReactElement, ReactNode } from "react";
import classNames from 'classnames';
import Icon from './icon';

type BtnProps = {
  children?: ReactNode,
  addClass?: string,
  color?: string,
  size?: "md",
  icon?: string,
  onClick?: () => void;
}

function Btn({ children, addClass, color, size, icon, onClick }: BtnProps): ReactElement {
  const computedClasses = classNames("flat", "btn", "icon", size, addClass, color);
  return (
    <button onClick={onClick} role="button" className={computedClasses}>
      {icon && <Icon glyph={icon} />}
      {children}
    </button>
  );
}

Btn.defaultProps = {
  color: "gravel",
  size: "md",
}

export default Btn;