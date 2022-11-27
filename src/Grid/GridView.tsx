import React, {ReactElement, SyntheticEvent} from 'react';
import {IData, TItem} from '../interface/IData';
import { ItemComponent as DefaultItemComponent } from "./Item/ItemComponent";
import {IItemContext, ItemContext} from "./Item/ItemContext";
import "../style/Table.css";
import {IColumnConfig} from "./Cell/interface";
import {TItemComponent} from "./Item/interface";
import {TFontWeight} from '../interface/TGeneral';

interface IGridViewProps {
  items: IData;
  columns: IColumnConfig[];
  ItemComponent?: TItemComponent;
  fontWeight?: TFontWeight;
  markedKey?: number;

  /**
   * Обработчики событий из BaseControl
   */
  handlers: IItemEventHandlers;
}

/**
 * Интерфейс описывающий обработчики событий записей
 */
export interface IItemEventHandlers {
  onClick?: (event: SyntheticEvent, item: TItem) => void;
  onDoubleClick?: (event: SyntheticEvent, item: TItem) => void;
  onMouseDown?: (event: SyntheticEvent, item: TItem) => void;
  onMouseUp?: (event: SyntheticEvent, item: TItem) => void;
  onMouseLeave?: (event: SyntheticEvent, item: TItem) => void;
  onMouseEnter?: (event: SyntheticEvent, item: TItem) => void;
  onMouseMove?: (event: SyntheticEvent, item: TItem) => void;
  onWheel?: (event: SyntheticEvent, item: TItem) => void;
  onKeyDown?: (event: SyntheticEvent, item: TItem) => void;
  onContextMenu?: (event: SyntheticEvent, item: TItem) => void;
}

function getGridTemplateColumns(columns?: IColumnConfig[]): string {
  let result = "";

  if (!columns) {
    return result;
  }

  columns.forEach((column) => {
    const { width = "auto" } = column;
    result += width + " ";
  });

  return result;
}

export function GridView(props: IGridViewProps): ReactElement {
  const styles = {
    gridTemplateColumns: getGridTemplateColumns(props.columns)
  };

  return (
    <div style={styles} className="table">
      <div className="table-body">
        {props.items.map((item, index) => {
          const isMarkedItem = item.key === props.markedKey;

          const itemContextValue: IItemContext = {
            cellsData: props.columns.map((column, index) => ({
              displayValue: column.displayProperty && item[column.displayProperty],
              CellComponent: column.CellComponent,
              config: column,
              markerVisible: isMarkedItem && index === 0
            })),
            item: item,
            handlers: {
              // тут нужно прокинуть все обработчики и забиндить item
              onClick: (event) => props.handlers.onClick?.(event, item)
            },

            // тут прокидываем все опции, заданные на вьюхе, чтобы избавиться от скоупа
            fontWeight: props.fontWeight,
            markerVisible: isMarkedItem
          };

          const ItemComponent: TItemComponent = props.ItemComponent || DefaultItemComponent;
          return (
            <ItemContext.Provider value={itemContextValue} key={index}>
              <ItemComponent item={item}
                             columns={props.columns}

                             {...{}/*тут прокидываем все опции*/}
                             fontWeight={props.fontWeight}
                             markerVisible={isMarkedItem}
              />
            </ItemContext.Provider>
          );
        })}
      </div>
    </div>
  );
}
