import { ReactElement, ReactNode } from "react";
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
type LinkBtnProps = {
  children?: ReactNode,
  to: string,
  addClass?: string,
  color?: string,
  size?: "md",
  icon?: string,
}

function LinkBtn({ children, to, addClass, color, size, icon }: LinkBtnProps): ReactElement {
  const isActive = useLocation().pathname == to;
  const computedIcon = icon ? `mdi mdi-${icon}` : "";
  const computedClasses = classNames("flat", "btn", "icon", size, addClass, color, { active: isActive });
  return (
    <Link to={to} className={computedClasses}>
      <span className={computedIcon} />
      {children}
    </Link>
  );
}

LinkBtn.defaultProps = {
  color: "gravel",
  size: "md",
}

export default LinkBtn;