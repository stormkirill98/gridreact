import {ReactElement} from 'react';
import * as React from 'react';

/**
 * Конфигурация колонки
 */
export interface IColumnConfig {
   /**
    * Свойства записи, которые используются для отрисовки этой ячейки.
    * Только при их изменении будет перерисована ячейка этой колонки
    */
   displayProperties: string[];

   /**
    * Ширина колонки.
    */
   width: string;
}

export type TColumn = ReactElement<IColumnConfig>;

/**
 * Компонент для конфигурации колонки
 * @example
 * <Grid>
 *    <Column width='1fr'/>
 *    <Column width='1fr'/>
 * </Grid>
 * @constructor
 */
export default function Column(_: IColumnConfig): ReactElement|null {
   return null;
}

export function isValidColumn(column: TColumn): boolean {
   const validNode = React.isValidElement(column) && column.type === Column;
   if (!validNode) {
      console.error('Invalid columns config');
      // Другими ошибками закидывать консоль нет смысла
      return false;
   }

   if (!column.props.displayProperties) {
      console.error(`Column not display data`);
   }

   return validNode;
}