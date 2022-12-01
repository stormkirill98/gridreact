import React, {memo, ReactElement, SyntheticEvent} from 'react';
import {IColumnConfig} from './ColumnConfiguration';
import CellComponent from './CellComponent';
import {TItem} from './interface';

interface IEventHandlers {
   onClick?: TRowEventHandler;
}

interface IRowEventHandlerParams {
   event: SyntheticEvent;
   rowElement: HTMLDivElement|null;
   cellElement: HTMLDivElement|null;
   item: TItem;
   // TODO надо прокидывать
   column?: IColumnConfig;
}

export type TRowEventHandler = (params: IRowEventHandlerParams) => void;

export interface IRowProps extends IEventHandlers {
   item: TItem;
   columns: IColumnConfig[];

   marked: boolean;
}

function bindRowEventHandler(rowData: TItem, handler?: TRowEventHandler): React.ReactEventHandler|undefined {
   if (!handler) {
      return undefined;
   }

   return (event) => {
      const target = event.target as HTMLDivElement;

      handler({
         event,
         item: rowData,
         rowElement: target.closest('.table-row'),
         cellElement: target.closest('.table-cell')
      })
   }
}

function RowComponent(props: IRowProps): ReactElement {
   return <div className='table-row' onClick={bindRowEventHandler(props.item, props.onClick)}>
      {
         props.columns.map((column, index) => {
            // TODO нужно валидировать названия полей, т.к. они могут совпасть с названием наших опций.
            const dependentProperties: Record<string, any> = {};
            column.displayProperties.forEach((property) => dependentProperties[property] = props.item[property])
            return <CellComponent key={index}
                                  {...dependentProperties}
                                  config={column}
                                  item={props.item}
                                  marked={props.marked && index === 0}
            />;
         })
      }
   </div>;
}

export default memo(RowComponent);
