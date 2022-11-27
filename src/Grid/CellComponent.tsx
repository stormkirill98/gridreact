import React, { ReactElement } from "react";

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
  IStickyProps,
  IShadowProps,
  IEventHandlers
} from "../Table/interface/IGeneral";

interface ICellResultComponent {
  // TODO implement
}

/**
 * Интерфейс настройки колонки,
 * который задается прикладниками в опции columns на списке
 */
export interface ICellConfig
  extends IFontProps,
    IWidthProps,
    IAlignProps,
    IPaddingProps,
    ITextOverflow {
  // TODO IPaddingProps вместо cellPadding, но добавил paddingTop, paddingBottom
  // TODO для каждой колонки нужен свой размер разделителя???
  separatorSize?: string;

  editable?: boolean;

  backgroundColorStyle?: string;
  hoverBackgroundStyle?: string;
  templateOptions?: object;

  displayProperty?: string;
  stickyProperty?: string;
  tagStyleProperty?: string;
  tooltipProperty?: string;

  displayType?: string;
  displayTypeOptions?: object;

  CellComponent?: React.FunctionComponent<ICellComponentProps>;
  CellEditorComponent?: React.FunctionComponent<ICellComponentProps>;

  CellResultComponent?: React.FunctionComponent<ICellResultComponent>;
  resultBaseline?: string;
}

export interface ICellComponentProps
  extends IFontProps,
    IWidthProps,
    IAlignProps,
    IPaddingProps,
    ITextOverflow,
    IMarkerProps,
    ICursorProps,
    IHoverProps,
    IBackgroundProps,
    ISeparatorProps,
    IStickyProps,
    IShadowProps,
    IEventHandlers {
  /**
   * Отображаемое значение
   */
  displayValue?: string;
  CellComponent?: React.FunctionComponent<ICellComponentProps>;

  // TODO Какие-то крайне базовые пропсы, так же как и IEventHandlers
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactChildren;

  // TODO еще нужно подумать над displayType, highlightValue(searchValue),
  // style, theme, readOnly
}

export function CellComponent(props: ICellComponentProps): ReactElement {
  const style = {
    fontWeight: props.fontWeight,
    backgroundColor: props.markerVisible ? "red" : "white"
  };

  return (
    <div className={"table-cell"} style={style}>
      {props.displayValue}
    </div>
  );
}
