import { ReactElement, ReactNode } from "react";
import { validateSpacing } from "nano-grid/modules/columns-manager";
import classNames from 'classnames';

type RowProps = {
  children?: ReactNode,
  addClass?: string,
  breakpoint?: string,
  tableElement: boolean,
  group: boolean,
  integrate: boolean,
  spacing: number,
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