import React from "react";
import { IData, IItem } from "../interface/IData";

interface IRowContext {
  item?: IItem;
}

interface ITableContext {
  data?: IData;
}

export const TableContext = React.createContext({
  data: []
} as ITableContext);

export const RowContext = React.createContext({
  item: undefined
} as IRowContext);
