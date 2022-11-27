import { createContext } from "react";
import {IBaseCellComponentProps} from "./interface";

// record прокидывать точно не нужно, мы не должны его использовать для построения CellComponent,
// строимся по чистым опциям.
// TODO может быть сразу на это писать валидацию? Чтобы если будут добавлять, то подумали несколько раз
export interface ICellContext {
  props: IBaseCellComponentProps
}

export const CellContext = createContext<ICellContext>({
  props: {}
});
