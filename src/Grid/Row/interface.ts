import {
    IAlignProps,
    IBackgroundProps,
    IBaseProps,
    IBorderProps,
    ICursorProps,
    IFontProps,
    IHoverProps,
    IMarkerProps,
    IPaddingProps,
    IShadowProps,
    IStickyProps,
    ITextOverflow
} from "../../interface/IGeneral";
import {FunctionComponent} from "react";
import {ICellConfig} from "../Cell/interface";
import {TContents} from "../../interface/IData";

/**
 * Опции строки, которые прокидываются у нас внутри и которые мы ожидаем получить в RowComponent
 */
export interface IBaseRowComponentProps
    extends IFontProps,
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
        IBaseProps {
    key?: string | number | null;

    editable?: boolean;

    // TODO style, theme, readonly
    // TODO еще нужно подумать над TreeGrid сразу, чтобы не копипастить код
}

/**
 * Опции строки, которые отдаются прикладникам
 * Такое разделение нужно, потому что мы не должны ждать в опциях columns и contents. Распространяем по контексту.
 */
export interface IRowComponentProps extends IBaseRowComponentProps {
    columns: ICellConfig[];
    contents: TContents;
}

export type TRowComponent = FunctionComponent<IRowComponentProps>;
