import { createContext } from "react";
import {IBaseCellComponentProps} from "./interface";

// record прокидывать точно не нужно, мы не должны его использовать для построения CellComponent,
// строимся по чистым опциям.
export interface ICellContext extends IBaseCellComponentProps { }

export const CellContext = createContext<ICellContext>({
  // задаем дефолтные значения
  fontWeight: 'normal',
  markerVisible: false
});
