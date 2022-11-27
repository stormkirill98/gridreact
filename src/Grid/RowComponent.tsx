import React, { useContext, ReactElement, FunctionComponent } from "react";
import { RowContext, TContents } from "./RowContext";

import {
  IFontProps,
  IWidthProps,
  IAlignProps,
  IPaddingProps,
  ITextOverflow,
  IMarkerProps,
  ICursorProps,
  IHoverProps,
  IBackgroundProps,
  ISeparatorProps,
  IBorderProps,
  IStickyProps,
  IShadowProps,
  IEventHandlers
} from "../Table/interface/IGeneral";

import {
  CellComponent as DefaultCellComponent,
  ICellComponentProps
} from "./CellComponent";

export interface IRowComponentProps
  extends IFontProps,
    IWidthProps,
    IAlignProps,
    IPaddingProps,
    ITextOverflow,
    IMarkerProps,
    ICursorProps,
    IHoverProps,
    IBackgroundProps,
    IBorderProps,
    IStickyProps,
    IShadowProps,
    IEventHandlers {
  key: string | number | null;

  editable?: boolean;

  // TODO Какие-то крайне базовые пропсы, так же как и IEventHandlers
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactChildren;

  // TODO style, theme, readonly
  // TODO еще нужно подумать над TreeGrid сразу, чтобы не копипастить код
}

export type TRowComponent = FunctionComponent<IRowComponentProps>;

function renderCells(
  columns: ICellComponentProps[],
  contents: TContents,
  props: IRowComponentProps
): ReactElement {
  const cells = [];
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    const CellComponent = column.CellComponent || DefaultCellComponent;
    cells.push(
      <CellComponent
        key={i}
        contents={contents}
        markerVisible={column.markerVisible}
        fontWeight={column.fontWeight || props.fontWeight}
        displayValue={column.displayValue}
      />
    );
  }
  return <>{cells}</>;
}

export function RowComponent(props: IRowComponentProps): ReactElement {
  const rowContext = useContext(RowContext);
  // TODO должен быть контекст, который передаст обработчики из BaseControl
  return (
    <div className="table-row">
      {props.children ||
        renderCells(rowContext.columns, rowContext.contents, props)}
    </div>
  );
}
