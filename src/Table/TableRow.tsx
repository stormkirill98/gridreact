import { ITableRowProps } from "./interface/ITableRow";

export function TableRow(props: ITableRowProps) {
  return <div className="table-row">{props.children}</div>;
}
