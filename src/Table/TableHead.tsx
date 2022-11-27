import { ITableHeadProps } from "./interface/ITableHead";

export function TableHead(props: ITableHeadProps) {
  return <div className="table-head">{props.children}</div>;
}
