import { useContext } from "react";
import { TableContext, RowContext } from "./TableContext";
import { ITableBodyProps } from "./interface/ITableBody";

export function TableBody(props: ITableBodyProps) {
  const data = useContext(TableContext).data;

  if (!data) {
    return null;
  }

  return (
    <div className="table-body">
      {data.map((item, index) => (
        <RowContext.Provider value={{ item }} key={index}>
          {props.children}
        </RowContext.Provider>
      ))}
    </div>
  );
}
