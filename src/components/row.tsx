import { ReactElement, ReactNode } from "react";
import { validateSpacing } from "nano-grid/modules/columns-manager";
import classNames from 'classnames';
import { breakpointsType } from "../types/breakpoints";
import { spacingType } from "../types/spacing";

type RowProps = {
  children?: ReactNode,
  addClass?: string,
  breakpoint?: breakpointsType,
  tableElement: boolean,
  group: boolean,
  integrate: boolean,
  spacing: spacingType,
  vertical: boolean,
}

function Row({ children, addClass, tableElement, group, integrate, spacing, breakpoint, vertical }: RowProps): ReactElement {
  const computedClasses = classNames(
    "nano-row",
    addClass,
    breakpoint,
    validateSpacing(spacing),
    vertical ? 'vertical' : 'horizontal',
    {
      'nano-group': group,
      'integrate': integrate,
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