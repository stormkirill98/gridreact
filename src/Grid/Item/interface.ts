import {
    IActionsProps,
    IAlignProps,
    IBackgroundProps,
    IBaseProps,
    IBorderProps,
    ICheckboxProps,
    ICursorProps,
    IFontProps,
    IHoverProps,
    IMarkerProps,
    IPaddingProps,
    IShadowProps,
    IStickyProps,
    ITagProps,
    ITextOverflowProps
} from '../../interface/IGeneral';
import {FunctionComponent} from "react";
import {IColumnConfig} from "../Cell/interface";
import {TItem} from "../../interface/IData";

/**
 * Опции строки, которые прокидываются у нас внутри и которые мы ожидаем получить в ItemComponent
 * TODO IGridItemComponentProps
 * TODO сделать автодоку
 */
export interface IBaseItemComponentProps
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
        IBorderProps,
        ICheckboxProps,
        IActionsProps {
    keyValue?: string | number | null;

    // TODO пока что убрать, над редактированием потом подумаем
    editable?: boolean;

    // TODO style - isMaster. Master - это компонент-обертка над списком, которая должна настроить правильно опции.
    // TODO theme удалить
    // TODO readonly удалить


    // TODO еще нужно подумать над TreeGrid сразу, чтобы не копипастить код
    //  в TreeGrid будет свой темплейт ячейки. Сделать CellContent и CellContentComponent.
    //  TreeGridCellContent будет вставлять в себя  CellContentComponent.
}

/**
 * Опции строки, которые отдаются прикладникам
 * Такое разделение нужно, потому что мы не должны ждать в опциях columns и item от прикладников,
 * распространяем их по контексту.
 */
export interface IItemComponentProps extends IBaseItemComponentProps {
    columns: IColumnConfig[];
    item: TItem;
}

export type TItemComponent = FunctionComponent<IItemComponentProps>;
