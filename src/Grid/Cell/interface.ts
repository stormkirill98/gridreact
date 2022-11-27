import {
  IAlignProps,
  IBackgroundProps,
  IBaseProps,
  ICursorProps,
  IFontProps,
  IHoverProps,
  IMarkerProps,
  IPaddingProps,
  ISeparatorProps,
  IShadowProps,
  IStickyProps,
  ITagProps,
  ITextOverflow,
  IWidthProps,
} from "../../interface/IGeneral";
import React from "react";
import { TContents } from "../../interface/IData";

/**
 * Интерфейс настройки колонки,
 * который задается прикладниками в опции columns на списке
 */
export interface ICellConfig
  extends IFontProps,
    IWidthProps,
    IAlignProps,
    IPaddingProps,
    ISeparatorProps,
    ITextOverflow,
    IBackgroundProps,
    IHoverProps{
  // TODO IPaddingProps вместо cellPadding, но добавил paddingTop, paddingBottom
  // TODO ISeparatorProps вместо columnSeparatorSize, но добавились separatorTop, separatorBottom
  // TODO backgroundColorStyle -> backgroundStyle(IBackgroundProps)
  // TODO hoverBackgroundStyle -> backgroundHoverStyle(IHoverProps),
  //  но добавилось highlightOnHover(точно неплохо от этой опции)
  editable?: boolean;

  templateOptions?: object;

  displayProperty?: string;
  stickyProperty?: string;
  tagStyleProperty?: string;
  tooltipProperty?: string;

  displayType?: string;
  displayTypeOptions?: object;

  CellComponent?: TCellComponent;
  CellEditorComponent?: TCellComponent;

  CellResultComponent?: TCellComponent;
  resultBaseline?: string;
}

export interface IBaseCellComponentProps
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
    ITagProps,
    IBaseProps {
  /**
   * Отображаемое значение
   */
  displayValue?: string;
  CellComponent?: TCellComponent;
  // TODO еще нужно подумать над displayType, highlightValue(searchValue),
  //  style, theme, readOnly

  /**
   * Оригинальная настройка ячейки, которую прикладники задают в опции columns
   * @remark нужно прокинуть ее, чтобы отдать прикладникам в компонент
   * TODO прикладникам не обязательно его прокидывать, а нам прикладникам обязательно. Как тут интерфес написать??
   */
  config?: ICellConfig;
}

export interface ICellComponentProps extends IBaseCellComponentProps {
  contents: TContents;
}

export type TCellComponent = React.FunctionComponent<ICellComponentProps>;
