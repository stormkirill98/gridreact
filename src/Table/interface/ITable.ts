import { ReactNode } from "react";
import { IData } from "../../interface/IData";

export interface IColumn {
  width?: string;
}

export type IColumns = IColumn[];

export interface ITableProps {
  children?: ReactNode;
  columns?: IColumns;
  data?: IData;
}

export interface ITable {
  props: ITableProps;
}
