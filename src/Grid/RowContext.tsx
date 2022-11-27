import { createContext } from "react";
import { ICellComponentProps } from "./CellComponent";

export type TContents = object;

interface IRowContext {
  contents: TContents;
  columns: ICellComponentProps[];
}

export const RowContext = createContext<IRowContext>({
  columns: [],
  contents: {}
});
