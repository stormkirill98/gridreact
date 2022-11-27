import { createContext } from "react";
import { TItem } from "../../interface/IData";
import { IEventHandlers } from "../../interface/IGeneral";
import {IBaseCellComponentProps, IColumnConfig} from '../Cell/interface';
import { IBaseItemComponentProps } from './interface';

interface ICellData extends IBaseCellComponentProps {
  config: IColumnConfig;
}

export interface IItemContext extends IBaseItemComponentProps {
  /**
   * Данные строки(рекорд)
   */
  item: TItem;

  /**
   * Опции ячеек.
   * Именно опции, которые уже созданый из конфига и состояние коллекции в For,
   * внутри себя содержит чистые конфиги.
   */
  cellsData: ICellData[];

  /**
   * Обработчики событий из BaseControl
   * Обработчики нужно пробрасывать через GridView, чтобы забиндить их на item
   */
  handlers: IEventHandlers;
}

export const ItemContext = createContext<IItemContext>({
  cellsData: [],
  item: {},
  handlers: {},
  // Тут задаем все дефолтные значения для опций строки
  fontWeight: 'normal',
  markerVisible: false
});
