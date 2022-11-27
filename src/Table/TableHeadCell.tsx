import { ITableHeadCellProps } from "./interface/ITableHeadCell";

export function TableHeadCell(props: ITableHeadCellProps) {
  return (
    <div className="table-cell">{props.children ? props.children : null}</div>
  );
}
