import React, {CSSProperties, ReactElement} from "react";
import {IBaseCellComponentProps} from "./interface";
import {CellContext} from "./CellContext";

export function CellComponent(props: IBaseCellComponentProps): ReactElement {
  const cellContext = React.useContext(CellContext);
  // TODO нужно опять мерджить опции из контекста и опции в props,
  //  т.к. прикладники могли в props переопределить какое-то из значений
  const fontWeight = props.fontWeight !== undefined ? props.fontWeight : cellContext.props.fontWeight;
  const markerVisible = props.markerVisible !== undefined ? props.markerVisible : cellContext.props.markerVisible;
  const displayValue = props.displayValue !== undefined ? props.displayValue : cellContext.props.displayValue;

  const style: CSSProperties = {
    fontWeight,
    backgroundColor: markerVisible ? "red" : "white"
  };

  // children не пересоздаем и не отдаем никаких опций, т.к. прикладник сам может нужные опции прокинуть,
  // мы ему их прокинули в его CellComponent
  return (
    <div className={"table-cell"} style={style}>
      {props.children || displayValue}
    </div>
  );
}
