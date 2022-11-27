import {IBaseCellComponentProps} from './Cell/interface';
import {IBaseItemComponentProps} from './Item/interface';
import {IItemContext} from './Item/ItemContext';
import {ICellContext} from './Cell/CellContext';

/**
 * Мерджит в правильном порядке опции.
 * Приоритет: cellProps, cellContext, itemProps, itemContext(viewProps)
 * Какой-то параметр может быть пропущен и тогда он будет пропущен.
 *
 * https://app.diagrams.net/#G1a1YKNV_iqXj8FFbcu5UKuNZ4SHXrlKbX
 * @param cellProps
 * @param cellContext
 * @param itemProps
 * @param itemContext
 */
export function mergeProps(
    cellProps?: IBaseCellComponentProps,
    cellContext?: ICellContext,
    itemProps?: IBaseItemComponentProps,
    itemContext?: IItemContext
): IBaseCellComponentProps {
    if (!cellProps && !cellContext && !itemProps && !itemContext) {
        throw Error('Should be set props')
    }
    return {
        fontWeight: mergeProp('fontWeight', cellProps, cellContext, itemProps, itemContext),
        backgroundStyle: mergeProp('backgroundStyle', cellProps, cellContext, itemProps, itemContext),
        displayValue: mergeProp('displayValue', cellProps, cellContext, undefined, undefined),
        markerVisible: mergeProp('markerVisible', cellProps, cellContext)
        // здесь должны все опции прокинуть и смерджить в правильном порядке
    }
}

function mergeProp<TProperty>(
    propName: keyof IBaseCellComponentProps | keyof IBaseItemComponentProps,
    cellProps?: IBaseCellComponentProps,
    cellContext?: ICellContext,
    itemProps?: IBaseItemComponentProps,
    itemContext?: IItemContext
): TProperty {
    return (cellProps?.[propName as keyof IBaseCellComponentProps] ||
        cellContext?.[propName as keyof IBaseCellComponentProps] ||
        itemProps?.[propName as keyof IBaseItemComponentProps] ||
        itemContext?.[propName as keyof IBaseItemComponentProps]) as TProperty;
}
