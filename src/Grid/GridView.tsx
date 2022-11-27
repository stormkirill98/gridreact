import React, { ReactElement } from "react";
import { IData } from "../interface/IData";
import { TRowComponent } from "./RowComponent";
import { RowContext } from "./RowContext";
import { ICellConfig } from "./CellComponent";
import "../Table/style/Table.css";

interface IGridViewProps {
  items: IData;
  RowComponent?: TRowComponent;
  columns: ICellConfig[];
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
          const contextValue = {
            columns: props.columns.map((column) => ({
              displayValue: item[column.displayProperty],
              CellComponent: column.CellComponent
            })),
            contents: item
          };

          // Обязательно отдаем прикладникам рекорд и конфиг колонок
          return (
            <RowContext.Provider value={contextValue} key={index}>
              {React.createElement(props.RowComponent, {
                columns: props.columns,
                contents: item
              })}
            </RowContext.Provider>
          );
        })}
      </div>
    </div>
  );
}
