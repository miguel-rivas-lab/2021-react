import { ReactElement, ReactNode } from "react";
import classNames from 'classnames';
import Icon from './icon';
import { Link } from 'react-router-dom';

type BtnProps = {
  children?: ReactNode,
  addClass?: string,
  color?: string,
  size?: "md",
  icon?: string,
  onClick?: () => void,
  href?: string,
  to?: string,
  tag: "a" | "button" | "link",
  active: boolean,
}

function Btn({ children, addClass, color, size, icon, onClick, href, to, tag, active }: BtnProps): ReactElement {
  const computedClasses = classNames("flat", "btn", "icon", size, addClass, color, { active: active });
  if (tag === "button") {
    return (
      <button onClick={onClick} className={computedClasses}>
        {icon && <Icon glyph={icon} />}
        {children}
      </button>
    );
  } else if (tag === "a") {
    return (
      <a href={href} className={computedClasses}>
        {icon && <Icon glyph={icon} />}
        {children}
      </a>
    );
  } else if (tag === "link") {
    return (
      <Link to={to} className={computedClasses}>
        {icon && <Icon glyph={icon} />}
        {children}
      </Link>
    );
  }

}

Btn.defaultProps = {
  color: "gravel",
  size: "md",
  tag: "button",
  active: false,
}

export default Btn;