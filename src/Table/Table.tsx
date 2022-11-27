import { IColumns, ITable, ITableProps } from "./interface/ITable";
import React from "react";
import { TableContext } from "./TableContext";
import "./style/Table.css";

export { TableCell } from "./TableCell";
export { TableRow } from "./TableRow";
export { TableHead } from "./TableHead";
export { TableHeadCell } from "./TableHeadCell";
export { TableBody } from "./TableBody";

export class Table extends React.Component<ITableProps> implements ITable {
  render() {
    const contextValue = {
      data: this.props.data
    };

    const styles = {
      gridTemplateColumns: this._getGridTemplateColumns(this.props.columns)
    };

    return (
      <div className="table" style={styles}>
        <TableContext.Provider value={contextValue}>
          {this.props.children}
        </TableContext.Provider>
      </div>
    );
  }

  private _getGridTemplateColumns(columns?: IColumns): string {
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
}

Table.contextType = TableContext;
