import React, { ReactElement } from "react";
import { IData } from "../interface/IData";
import { RowComponent as DefaultRowComponent } from "./Row/RowComponent";
import {IRowContext, RowContext} from "./Row/RowContext";
import "../style/Table.css";
import {ICellConfig} from "./Cell/interface";
import {IRowComponentProps, TRowComponent} from "./Row/interface";
import {IEventHandlers} from "../interface/IGeneral";

interface IGridViewProps {
  items: IData;
  RowComponent?: TRowComponent;
  columns: ICellConfig[];

  /**
   * Обработчики событий из BaseControl
   */
  handlers: IEventHandlers;
}

function getGridTemplateColumns(columns?: ICellConfig[]): string {
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
          const contextValue: IRowContext = {
            columnsProps: props.columns.map((column) => ({
              displayValue: column.displayProperty && item[column.displayProperty],
              CellComponent: column.CellComponent
            })),
            contents: item,
            handlers: props.handlers,
          };

          const RowComponent = props.RowComponent || DefaultRowComponent;
          // Обязательно отдаем прикладникам рекорд и конфиг колонок
          const rowProps: IRowComponentProps = {
            columns: props.columns,
            contents: item
          };
          return (
            <RowContext.Provider value={contextValue} key={index}>
              {React.createElement(RowComponent, rowProps)}
            </RowContext.Provider>
          );
        })}
      </div>
    </div>
  );
}
