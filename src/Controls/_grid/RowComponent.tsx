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
   column?: IColumnConfig;
}

export type TRowEventHandler = (params: IRowEventHandlerParams) => void;

export interface IRowProps extends IEventHandlers {
   item: TItem;
   columns: IColumnConfig[];

   marked: boolean;
}

function bindRowEventHandler(rowData: TItem, columns: IColumnConfig[], handler?: TRowEventHandler): React.ReactEventHandler|undefined {
   if (!handler) {
      return undefined;
   }

   return (event) => {
      const target = event.target as HTMLDivElement;
      const rowElement: HTMLDivElement|null = target.closest('.table-row');
      const cellElement: HTMLDivElement|null = target.closest('.table-cell');
      const cellIndex = rowElement?.childNodes && cellElement
          ? Array.from(rowElement?.childNodes).findIndex((it) => it === cellElement)
          : -1;
      const column = columns[cellIndex];
      handler({
         event,
         item: rowData,
         rowElement,
         cellElement,
         column
      })
   }
}

function useForceUpdate(){
   const [_, setValue] = React.useState(0); // integer state
   return () => setValue(value => value + 1); // update state to force render
}

function RowComponent(props: IRowProps): ReactElement {
   const forceUpdate = useForceUpdate();
   props.item.setChangeCallback(((field, value) => forceUpdate()));

   return <div className='table-row' onClick={bindRowEventHandler(props.item, props.columns, props.onClick)}>
      {
         props.columns.map((column, index) => {
            // TODO нужно валидировать названия полей, т.к. они могут совпасть с названием наших опций.
            const dependentProperties: Record<string, any> = {};
            column.displayProperties.forEach((property) => dependentProperties[property] = props.item.get(property))
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
