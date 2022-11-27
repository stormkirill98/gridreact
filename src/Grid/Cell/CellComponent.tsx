import React, {CSSProperties, ReactElement} from "react";
import {IBaseCellComponentProps} from "./interface";
import {CellContext} from "./CellContext";
import {mergeProps} from '../PropsMergerator';

export function CellComponent(props: IBaseCellComponentProps): ReactElement {
  const cellContext = React.useContext(CellContext);
  const mergedProps = mergeProps(props, cellContext, undefined, undefined);

  const style: CSSProperties = {
    fontWeight: mergedProps.fontWeight,
    backgroundColor: mergedProps.markerVisible ? "red" : "white"
  };

  // children не пересоздаем и не отдаем никаких опций, т.к. прикладник сам может нужные опции прокинуть,
  // мы ему их прокинули в его CellComponent
  return (
    <div className={"table-cell"} style={style}>
      {props.children || mergedProps.displayValue}
    </div>
  );
}
