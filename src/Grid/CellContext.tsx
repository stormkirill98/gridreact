import { createContext } from "react";
import { ICellConfig } from "./CellComponent";
import { TContents } from "./RowContext";

interface ICellContext {
  config: ICellConfig;
  contents: TContents;
}

export const CellContext = createContext<ICellContext>({
  config: {},
  contents: {}
});
