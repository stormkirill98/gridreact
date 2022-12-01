import './style/Table.css';
import * as React from 'react';
import {IColumnConfig, TColumn, isValidColumn} from './ColumnConfiguration';

interface IGridViewProps<
   TRowData extends Record<string, any> = Record<string, any>,
   TData extends Array<TRowData> = Array<TRowData>
> {
   /**
    * Конфигурация колонок
    */
   children: TColumn | TColumn[];

   /**
    * Исходные данные для выводы записей
    */
   data: TData;

   /**
    * Свойство хранящее ключ записи
    */
   keyProperty: string;
}

function getStyles(columns: IColumnConfig[], props: IGridViewProps): React.CSSProperties {
   let gridTemplateColumns = '';

   columns.forEach((column) => {
      const {width = 'auto'} = column;
      gridTemplateColumns += `${width} `;
   });

   return { gridTemplateColumns };
}

function getColumns(children: TColumn | TColumn[]): IColumnConfig[] {
   const childrenAsArray = Array.isArray(children) ? children : [children];
   const filteredChildren = childrenAsArray.filter((node) => isValidColumn(node));

   if (!filteredChildren.length) {
      throw Error('Empty columns');
   }

   return filteredChildren.map((column) => column.props);
}

export function GridView(props: IGridViewProps): React.ReactElement {
   const columns: IColumnConfig[] = getColumns(props.children);

   return (
      <div style={getStyles(columns, props)} className='table'>
         <div className='table-body'>
            {
               props.data.map((rowData) => (
                  <div className='table-row' key={rowData[props.keyProperty]}>
                     {
                        columns.map((column) => (
                           <span key={column.displayProperties[0]}>{rowData[column.displayProperties[0]]}</span>
                        ))
                     }
                  </div>
               ))
            }
         </div>
      </div>
   );
}
