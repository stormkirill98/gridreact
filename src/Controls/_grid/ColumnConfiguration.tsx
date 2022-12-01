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

function configsAreEqual(prevConfig: IColumnConfig, nextConfig: IColumnConfig): boolean {
   return prevConfig.width === nextConfig.width &&
      prevConfig.displayProperties.length === nextConfig.displayProperties.length;
}

export function columnsAreEqual(prevColumns: TColumn | TColumn[], nextColumns: TColumn | TColumn[]): boolean {
   const prevConfigs = getColumnConfigs(prevColumns);
   const nextConfigs = getColumnConfigs(nextColumns);

   if (prevConfigs.length !== nextConfigs.length) {
      return false;
   }

   for (let i = 0; i < prevConfigs.length; i++) {
      if (!configsAreEqual(prevConfigs[i], nextConfigs[i])) {
         return false;
      }
   }

   return true;
}