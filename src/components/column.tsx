import { ReactElement, ReactNode } from "react";
import { validateSize } from "nano-grid/grid/modules/columns-manager";
import classNames from 'classnames';
import { modalityType } from "../types/modality"

type ColumnProps = {
  children?: ReactNode,
  size: string,
  mode: modalityType,
  addClass?: string,
  tableElement: boolean,
}

function Column({ children, size, mode, addClass, tableElement }: ColumnProps): ReactElement {
  const computedClasses = classNames(mode, addClass, validateSize(size));
  const computedRole = classNames({ "cell": tableElement });
  return (
    <div className={computedClasses} role={computedRole}>
      {children}
    </div>
  );
}

Column.defaultProps = {
  mode: "column",
  tableElement: false,
  size: "100%"
}

export default Column;