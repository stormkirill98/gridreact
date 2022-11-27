import { createContext } from "react";
import { TContents } from "../../interface/IData";
import { IEventHandlers } from "../../interface/IGeneral";
import { IBaseCellComponentProps } from "../Cell/interface";

export interface IRowContext {
  /**
   * Данные строки(рекорд)
   */
  contents: TContents;

  /**
   * Опции ячеек.
   * Именно опции, которые уже созданый из конфига и состояние коллекции в For,
   * внутри себя содержит чистые конфиги.
   */
  columnsProps: IBaseCellComponentProps[];

  /**
   * Обработчики событий из BaseControl
   */
  handlers: IEventHandlers;
}

export const RowContext = createContext<IRowContext>({
  columnsProps: [],
  contents: {},
  handlers: {}
});
