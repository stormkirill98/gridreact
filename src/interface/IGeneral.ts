import {
  TMarkerSize,
  TVisibility,
  TCursor,
  TBorderStyle,
  TSize,
  TFontColorStyle,
  TFontWeight,
  TButtonStyle,
  TActionShowType,
  TIconStyle,
  TActionSize,
  TActionViewMode,
  TActionHandler,
  TActionDisplayMode,
  THorizontalAlign,
  TVerticalAlign,
  TTextOverflow,
  TBackgroundStyle,
  TSeparatorSize,
  TTagStyle
} from "./TGeneral";
import React, { ReactEventHandler } from "react";

/**
 * Интерфейс опций для отображения маркера
 */
export interface IMarkerProps {
  /**
   * @cfg {Boolean} Видимость маркера
   */
  markerVisible?: boolean;
  /**
   * @cfg {TMarkerSize} Размер маркера
   */
  markerSize?: TMarkerSize;
  /**
   * @cfg Класс, используемый при формировании css-класса маркера
   * [NEW] Отчётность использует кастомный размер строки (из-за увеличенного по высоте поля ввода),
   * из-за чего не вписываются в стандартные отступы.
   */
  markerClassName?: string;
}

/**
 * Интерфейс опций для отображения чекбокса
 */
export interface ICheckboxProps {
  /**
   * @cfg {TVisibility} Видимость чекбокса
   */
  checkboxVisibility?: TVisibility;
  /**
   * @cfg Отображаемое значение чекбокса
   */
  checkboxValue?: true | false | null;
}

/**
 * Интерфейс опций для отображения курсора
 */
export interface ICursorProps {
  /**
   * @cfg {TCursor} Курсор мыши, отображаемый при наведении на элемент
   */
  cursor?: TCursor;
}

/**
 * Интерфейс опций для отображения тени
 */
export interface IShadowProps {
  /**
   * @cfg {TVisibility} Видимость тени
   */
  shadowVisibility?: TVisibility;
}

/**
 * Интерфейс опций для отображения обводки
 */
export interface IBorderProps {
  /**
   * @cfg {TVisibility} Видимость обводки
   */
  borderVisibility?: TVisibility;
  /**
   *  @cfg {TBorderStyle} Стиль обводки
   */
  borderStyle?: TBorderStyle;
}

/**
 * Интерфейс опций для отображения скругления
 */
export interface IRoundAnglesProps {
  /**
   * @cfg {TSize} Размер скругления нижнего левого угла
   */
  roundAngleBL?: TSize;
  /**
   * @cfg {TSize} Размер скругления нижнего правого угла
   */
  roundAngleBR?: TSize;
  /**
   * @cfg {TSize} Размер скругления верхнего левого угла
   */
  roundAngleTL?: TSize;
  /**
   * @cfg {TSize} Размер скругления верхнего правого угла
   */
  roundAngleTR?: TSize;
}

/**
 * Интерфейс опций для отображения внутренних отступов
 */
export interface IPaddingProps {
  /**
   * @cfg {TSize} Размер верхнего внутреннего отступа
   */
  paddingTop?: TSize;
  /**
   * @cfg {TSize} Размер нижнего внутреннего отступа
   */
  paddingBottom?: TSize;
  /**
   * @cfg {TSize} Размер левого внутреннего отступа
   */
  paddingLeft?: TSize;
  /**
   * @cfg {TSize} Размер правого внутреннего отступа
   */
  paddingRight?: TSize;
}

/**
 * Интерфейс опций для настройки шрифта
 */
export interface IFontProps {
  /**
   * @cfg {String} Размер шрифта
   */
  fontSize?: string;
  /**
   * @cfg {TFontColorStyle} Цветовой стиль шрифта
   */
  fontColorStyle?: TFontColorStyle;
  /**
   * @cfg {TFontWeight} Начертание шрифта
   */
  fontWeight?: TFontWeight;
}

/**
 * Интерфейс опций для отображения действий
 */
export interface IActionsProps {
  /**
   * @cfg {IAction[]} Набор действий
   */
  actions?: IAction[];
  /**
   * @cfg {TVisibility} Видимость действий
   */
  actionsVisibility?: TVisibility;
  /**
   * @cfg {boolean} Включает задержку появления действий
   */
  actionsDisplayDelay?: boolean;
  /**
   * @cfg Класс, навешиваемый на контейнер с действиями.
   * Применяется для кастомного позиционирования контейнера с действиями.
   */
  actionsClassName?: string;
  /**
   * @cfg {boolean} Выключает появление действий по наведению мышки.
   * TODO надо понять для чего это
   */
  showItemActionsOnHover?: boolean;
}

/*
 * Интерфейс действия (например, действие над записью в списочном контроле)
 */
export interface IAction {
  /**
   * @cfg Идентификатор действия
   */
  id: string | number;
  /**
   * @cfg Заголовок действия.
   */
  title?: string;
  /**
   * @cfg Имя иконки или путь SVG-иконки действия.
   */
  icon?: string;
  /**
   * @cfg Определяет, где будет отображаться действие.
   */
  showType?: TActionShowType;
  /**
   * @cfg Стиль кнопки действия.
   */
  style?: TButtonStyle;
  /**
   * @cfg Цветовой стиль иконки кнопки действия.
   */
  iconStyle?: TIconStyle;
  /**
   * @cfg Размер иконки кнопки действия.
   */
  iconSize?: TActionSize;
  /**
   * @cfg Режим отображения кнопки действия.
   */
  viewMode?: TActionViewMode;
  /**
   * @cfg Обработчик клика по кнопке действия.
   */
  handler?: TActionHandler;
  /**
   * @cfg Поле, описывающее тип действия в рамках иерархии (лист, узел, скрытый узел).
   */
  "parent@"?: boolean;
  /**
   * @cfg Режим отображения действия.
   */
  displayMode?: TActionDisplayMode;
  /**
   * @cfg Текст всплывающей подсказки, отображаемой при наведении на действие.
   */
  tooltip?: string;
  /**
   * @cfg Идентификатор родительского дейтсвия
   */
  parent?: string | number;

  //??? commandName, commandOptions ???
}

/**
 * Интерфейс опций для установки ширины
 */
export interface IWidthProps {
  /**
   * Ширина
   */
  width?: string;
  /**
   * Минимальная ширина в пикселях
   */
  minWidth?: number;
  /**
   * Максимальная ширина в пикселях
   */
  maxWidth?: number;
  /**
   * Ширина в браузерах не поддерживающих CSS Grid Layout
   */
  compatibleWidth?: string;
}

/**
 * Интерфейс опция для выравнивания контента
 */
export interface IAlignProps {
  /**
   * Горизонтально выравнивание
   */
  halign?: THorizontalAlign;
  /**
   * Вертикальное выравнивание
   */
  valign?: TVerticalAlign;
}

/**
 * Интерфейс опций для обрезания текста
 */
export interface ITextOverflow {
  textOverflow?: TTextOverflow;
}

/**
 * Интерфейс опций для настройки поведения при наведении мышки
 */
export interface IHoverProps {
  /**
   * Стиль цвета фона при наведении мышки
   */
  backgroundHoverStyle?: TBackgroundStyle;
  /**
   * Включает или выключает подсветку фона при наведении мышки
   */
  highlightOnHover?: boolean;
}

/**
 * Интерфейс опций для настройки фона
 */
export interface IBackgroundProps {
  /**
   * Стиль цвета фона
   */
  backgroundStyle?: TBackgroundStyle;
}

/**
 * Интерфейс опций для настройки разделителей по краям компонента
 * TODO может быть это IBorderProps???
 */
export interface ISeparatorProps {
  topSeparatorSize?: TSeparatorSize;
  bottomSeparatorSize?: TSeparatorSize;
  leftSeparatorSize?: TSeparatorSize;
  rightSeparatorSize?: TSeparatorSize;
}

export type TStickyPosition = "top" | "bottom" | "left" | "right";

/**
 * Интерфейс опций с помощью которых можно настроить застикивание компонента
 */
export interface IStickyProps {
  /**
   * Включить или выключить застикивание
   */
  sticky?: boolean;
  /**
   * Позиция компонента во время застикивания
   */
  stickyPosition?: TStickyPosition;
  /**
   * Стиль фона если компонент застикан
   */
  stickyBackgroundStyle?: TBackgroundStyle;
  /**
   * Видимость теней если компонент застикан
   * TODO было column.shadowVisibility
   */
  stickyShadowVisibility?: Exclude<TVisibility, "onhover">;

  // Задает fixedSZindex в stickyBlock. Обычно задается дефолтный=2,
  // но при наличии гор скролла проставляется 3
  // TODO Думаю нужно как-то избавиться от этой опции.
  stickyZIndex?: number;

  // TODO может быть через контекст прокинуть в ячейки??? Это явно в апи не входит.
  isIosZIndexOptimized?: boolean;
  subPixelArtifactFix?: boolean;
  pixelRatioBugFix?: boolean;
}

/**
 * Интерфейс опций для настройки тэга
 */
export interface ITagProps {
  tagVisible?: TVisibility;
  tagStyle?: TTagStyle;
  onTagClick?: (event: React.BaseSyntheticEvent) => void;
  onTagHover?: (event: React.BaseSyntheticEvent) => void;
}

// TODO Какие-то крайне базовые пропсы, так же как и IEventHandlers
export interface IBaseProps extends IEventHandlers {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactChildren;
}

/**
 * Интерфейс описывающий поддерживаемые обработчики нативных событий
 */
export interface IEventHandlers {
  onClick?: ReactEventHandler<HTMLDivElement>;
  onDoubleClick?: ReactEventHandler<HTMLDivElement>;
  onMouseDown?: ReactEventHandler<HTMLDivElement>;
  onMouseUp?: ReactEventHandler<HTMLDivElement>;
  onMouseLeave?: ReactEventHandler<HTMLDivElement>;
  onMouseEnter?: ReactEventHandler<HTMLDivElement>;
  onMouseMove?: ReactEventHandler<HTMLDivElement>;
  onWheel?: ReactEventHandler<HTMLDivElement>;
  onKeyDown?: ReactEventHandler<HTMLDivElement>;
  onContextMenu?: ReactEventHandler<HTMLDivElement>;
}
