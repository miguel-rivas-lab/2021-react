import { ReactElement, ReactNode } from "react";
import { validateSpacing } from "nano-grid/modules/columns-manager";
import classNames from 'classnames';

type RowProps = {
  children?: ReactNode,
  addClass?: string,
  breakpoint?: "" | "sm" | "md" | "lg" | "xl" | "xll",
  tableElement: boolean,
  group: boolean,
  integrate: boolean,
  spacing: 25 | 50 | 75 | 100 | 125 | 150 | 175 | 200 | 225 | 250 | 275 | 300 | 325 | 350 | 375 | 400,
  vertical: boolean,
}

function Row({ children, addClass, tableElement, group, integrate, spacing, breakpoint, vertical }: RowProps): ReactElement {
  const computedClasses = classNames(
    "nano-row",
    addClass,
    breakpoint,
    validateSpacing(spacing),
    {
      'nano-group': group,
      'integrate': integrate,
      'vertical': vertical,
    },
  );
  const computedRole = classNames({
    "row": tableElement,
    "group": group,
  });
  return (
    <div
      className={computedClasses}
      role={computedRole}>
      {children}
    </div>
  );
}

Row.defaultProps = {
  tableElement: false,
  vertical: false,
  group: false,
  integrate: false,
  squareTag: false,
  spacing: 0,
}

export default Row;