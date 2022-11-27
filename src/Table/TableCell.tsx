import React, { useContext } from "react";
import { RowContext } from "./TableContext";
import { ITableCellProps } from "./interface/ITableCell";

export function TableCell(props: ITableCellProps) {
  const item = useContext(RowContext).item;

  if (!item) {
    return null;
  }

  return (
    <div className="table-cell">
      {props.children ? (
        React.cloneElement(props.children, { item })
      ) : props.displayProperty ? (
        <div>{item[props.displayProperty]}</div>
      ) : null}
    </div>
  );
}
