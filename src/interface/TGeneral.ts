/**
 * Варианты видимости элемента.
 * @variant visible Виден всегда.
 * @variant hidden Спрятан всегда.
 * @variant onhover Отборажается при наведении курсора мыши.
 * @author Колесов В.А.
 */
export type TVisibility = "visible" | "hidden" | "onhover";

/**
 * Варианты настройки размеров маркера
 * @variant content-xl Используется для размещения маркера в случае, когда содержимое записи должно быть расположено на нескольких строках.
 * @variant content-xs Используется для размещения маркера в случае, когда содержимое записи должно быть расположено в одной строке.
 * @variant image-l Используется для размещения маркера рядом с изображением размера "l".
 * @variant image-m Используется для размещения маркера рядом с изображением размера "m".
 * @variant image-mt Используется для размещения маркера рядом с изображением размера "mt".
 * @variant image-s Используется для размещения маркера рядом с изображением размера "s".
 */
export type TMarkerSize =
  | "image-l"
  | "image-m"
  | "image-mt"
  | "image-s"
  | "content-xl"
  | "content-xs";

/**
 * Варианты курсора мыши.
 * @variant pointer указатель.
 * @variant auto автоматический выбор.
 */
export type TCursor = "pointer" | "auto";

/**
 * Варианты значений для стиля цвета рамки вокруг записи.
 * @variant default
 * @variant danger
 */
export type TBorderStyle = "default" | "danger";

/**
 * Общая линейка размеров. Используется для скруглений, отступов.
 */
export type TSize =
  | "null"
  | "3xs"
  | "2xs"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "2xl"
  | "3xl";

/**
 * Допустимые значения цветовых стилей шрифта.
 */
export type TFontColorStyle =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "unaccented"
  | "link"
  | "label"
  | "info"
  | "default";

/**
 * Допустимые значения начертания шрифта.
 * @variant default начертание, которое задается при помощи переменной темы оформления
 * @variant normal нормальное начертание
 * @variant bold полужирное начертание
 */
export type TFontWeight = "default" | "normal" | "bold";

/**
 * Допустимые варианты отображения действия.
 * @variant MENU показывать кнопку операции только в дополнительном меню
 * @variant MENU_TOOLBAR показывать кнопку операции в дополнительном меню и тулбаре
 * @variant TOOLBAR показывать кнопку операции только в тулбаре
 * @variant FIXED Показывать кнопку операции в фиксированном положении или перед кнопкой меню.
 */
export enum TActionShowType {
  MENU,
  MENU_TOOLBAR,
  TOOLBAR,
  FIXED
}

/**
 * Варианты значений для стиля кнопки.
 */
export type TButtonStyle =
  | "primary"
  | "warning"
  | "secondary"
  | "success"
  | "danger"
  | "info"
  | "unaccented"
  | "default"
  | "pale";

/**
 * Допустимые значения для стиля отображаения иконки.
 */
export type TIconStyle =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "label"
  | "default"
  | "link"
  | "contrast"
  | "unaccented"
  | "forTranslucent"
  | "readonly";

/**
 * Допустимые размеры иконки действия.
 */
export type TActionSize = "s" | "m";

/**
 * Допустимые режимы отображения кнопки действия
 */
export type TActionViewMode =
  | "button"
  | "link"
  | "linkButton"
  | "toolButton"
  | "functionalButton"
  | "filled"
  | "outlined"
  | "ghost"
  | "link"
  | "functionalButton";

/**
 * Обработчик клика по кнопке действия
 */
export type TActionHandler = (item: any) => void;

/**
 * Допустимые режимы отображения действия.
 * @variant TITLE показывать только заголовок
 * @variant ICON показывать только иконку
 * @variant BOTH показывать иконку и заголовок
 * @variant AUTO если есть иконка, то показывать иконку, иначе заголовок
 */
export enum TActionDisplayMode {
  TITLE = "title",
  ICON = "icon",
  BOTH = "both",
  AUTO = "auto"
}

export type THorizontalAlign = "left" | "center" | "right";
export type TVerticalAlign = "top" | "center" | "bottom" | "baseline";

export type TTextOverflow = "ellipsis" | "none";

export type TBackgroundStyle =
  | "default"
  | "danger"
  | "success"
  | "warning"
  | "primary"
  | "secondary"
  | "unaccented"
  | "readonly"
  | "info"
  | string;

/**
 * Значения для разделителя
 * @typedef {String} TSeparatorSize
 * @variant s Стандартный разделитель толщиной 1px
 * @variant null без разделителя
 * TODO может быть получтися как-то свести к стандартной линейке?
 *       и вроде бы логично назвать TBorderSize
 */
export type TSeparatorSize = "s" | null;

export type TTagStyle =
  | "info"
  | "danger"
  | "primary"
  | "success"
  | "warning"
  | "secondary";
