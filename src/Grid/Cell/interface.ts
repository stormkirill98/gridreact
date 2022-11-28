import {
  IActionsProps,
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
  ITextOverflowProps,
  IWidthProps,
} from '../../interface/IGeneral';
import React from "react";
import { TItem } from "../../interface/IData";

/**
 * Интерфейс настройки колонки,
 * который задается прикладниками в опции columns на списке
 */
export interface IColumnConfig
  extends IFontProps,
    IWidthProps,
    IAlignProps,
    IPaddingProps,
    ISeparatorProps,
    ITextOverflowProps,
    IBackgroundProps,
    IHoverProps{
  // TODO IPaddingProps вместо cellPadding, но добавил paddingTop, paddingBottom
  // TODO ISeparatorProps вместо columnSeparatorSize, но добавились separatorTop, separatorBottom
  // TODO backgroundColorStyle -> backgroundStyle(IBackgroundProps)
  // TODO hoverBackgroundStyle -> backgroundHoverStyle(IHoverProps),
  //  но добавилось highlightOnHover(точно неплохо от этой опции)

  // TODO добавить опцию dependenceProperties (зависимые значения рекорда), чтобы оптимально перерисовывать ячейки,
  //  если не задано то всегда перерисовываемся

  editable?: boolean;

  templateOptions?: object;

  displayProperty?: string;
  stickyProperty?: string;
  tagStyleProperty?: string;
  tooltipProperty?: string;

  // TODO displayType не должен настраиваться, а должен сам высчитыватсья из формата поля рекорда
  displayType?: string;
  displayTypeOptions?: object;

  CellComponent?: TCellComponent;
  CellEditorComponent?: TCellComponent;

  CellResultComponent?: TCellComponent;
  resultBaseline?: string;
}

export interface IBaseCellComponentProps
  extends IBaseProps,
    IFontProps,
    IAlignProps,
    IPaddingProps,
    ITextOverflowProps,
    IMarkerProps,
    ICursorProps,
    IHoverProps,
    IBackgroundProps,
    IStickyProps,
    IShadowProps,
    ITagProps,
    IActionsProps,
    ISeparatorProps {
  /**
   * Отображаемое значение
   */
  displayValue?: string;
  CellComponent?: TCellComponent;
  // TODO еще нужно подумать над displayType, highlightValue(searchValue),
  //  style, theme, readOnly
}

export interface ICellComponentProps extends IBaseCellComponentProps {
  item: TItem;
  /**
   * Оригинальная настройка ячейки, которую прикладники задают в опции columns
   * @remark нужно прокинуть ее, чтобы отдать прикладникам в компонент
   * TODO прикладникам не обязательно его прокидывать, а нам прикладникам обязательно. Как тут интерфес написать??
   */
  config: IColumnConfig;
}

export type TCellComponent = React.FunctionComponent<ICellComponentProps>;
