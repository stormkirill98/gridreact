import React, {memo, ReactElement, SyntheticEvent} from 'react';
import {IColumnConfig} from './ColumnConfiguration';
import CellComponent, {CELL_SELECTOR, getCellDependentValues} from './CellComponent';
import {IEventHandlers, ISelectionProps, TItem} from './interface';

const ROW_CLASS_NAME = 'table-row';
export const ROW_SELECTOR = `.${ROW_CLASS_NAME}`;

interface IRowEventHandlerParams {
   event: SyntheticEvent;
   rowElement: HTMLDivElement|null;
   cellElement: HTMLDivElement|null;
   item: TItem;
   column?: IColumnConfig;
}
export type TRowEventHandler = (params: IRowEventHandlerParams) => void;

export interface IRowProps extends IEventHandlers<TRowEventHandler>, ISelectionProps {
   item: TItem;
   /**
    * Опция нужна для корректной перерисовки
    */
   itemVersion: number;
   columns: IColumnConfig[];

   marked: boolean;
}

function getRowEventHandler(rowData: TItem, columns: IColumnConfig[], handler?: TRowEventHandler): React.ReactEventHandler|undefined {
   if (!handler) {
      return undefined;
   }

   return (event) => {
      const target = event.target as HTMLDivElement;
      const rowElement: HTMLDivElement|null = target.closest(ROW_SELECTOR);
      const cellElement: HTMLDivElement|null = target.closest(CELL_SELECTOR);
      const cellIndex = Array.from(rowElement?.childNodes || []).findIndex((it) => it === cellElement);
      handler({
         event,
         item: rowData,
         column: columns[cellIndex],
         rowElement,
         cellElement
      })
   }
}

function RowComponent(props: IRowProps): ReactElement {
   const checkbox = props.selectionVisibility === 'visible' ? <input type={'checkbox'}/> : null;

   return <div className={ROW_CLASS_NAME} onClick={getRowEventHandler(props.item, props.columns, props.onClick)}>
      {checkbox}
      {
         props.columns.map((column, index) => {
            // TODO нужно валидировать названия полей, т.к. они могут совпасть с названием наших опций.
            const dependentValues = getCellDependentValues(column, props.item);
            return <CellComponent key={index}
                                  {...dependentValues}
                                  config={column}
                                  item={props.item}
                                  marked={props.marked && index === 0}
            />;
         })
      }
   </div>;
}

export default memo(RowComponent);
