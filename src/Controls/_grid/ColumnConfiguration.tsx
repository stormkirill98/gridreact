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

function isValidColumn(column: TColumn): boolean {
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

export function getColumnConfigs(children: TColumn | TColumn[]): IColumnConfig[] {
   const childrenAsArray = Array.isArray(children) ? children : [children];
   const filteredChildren = childrenAsArray.filter((node) => isValidColumn(node));

   if (!filteredChildren.length) {
      throw Error('Empty columns');
   }

   return filteredChildren.map((column) => column.props);
}

function columnIsEqual(prevColumn: IColumnConfig, nextColumn: IColumnConfig): boolean {
   return prevColumn.width === nextColumn.width &&
      prevColumn.displayProperties.length === nextColumn.displayProperties.length;
}

// TODO эти сравнения будут отнимать достаточно времени,
//  а children пересоздается при любой синхронизации прикладного контрола.
//  В идеале должна быть просто опция columns, которую прикладник будет мемоизировать
//  и пересоздавать когда ему это точно нужно
//  Можно поддержать оба варианта, но вот этот будет точно медленне(!!!СДЕЛАТЬ ЗАМЕР!!!)
export function columnsAreEqual(prevColumns: IColumnConfig[], nextColumns: IColumnConfig[]): boolean {
   if (!prevColumns || !nextColumns) {
      return false;
   }

   if (prevColumns.length !== nextColumns.length) {
      return false;
   }

   for (let i = 0; i < prevColumns.length; i++) {
      if (!columnIsEqual(prevColumns[i], nextColumns[i])) {
         return false;
      }
   }

   return true;
}