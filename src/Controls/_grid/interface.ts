import {TRowEventHandler} from './RowComponent';
import {Item} from "../interface/IData";

export type TItem = Item;
export type TKey = string|number|null;

export interface IDataProps {
   /**
    * Исходные данные для выводы записей
    */
   data: TItem[];

   /**
    * Свойство хранящее ключ записи
    */
   keyProperty: string;
}

export interface IRowEventHandlers {
   /**
    * Обработчик клика по записи строки
    */
   onRowClick?: TRowEventHandler;
}

export interface IMarkerProps {
   /**
    * Ключ маркированной записи.
    */
   markedKey?: TKey;
}

export interface IEventHandlers<THandler> {
   onClick?: THandler;
}
