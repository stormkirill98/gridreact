import {useContext, ReactElement, memo} from 'react';

import { IItemContext, ItemContext } from './ItemContext';
import { IBaseItemComponentProps } from "./interface";

import { default as DefaultCellComponent } from "../Cell/CellComponent";
import { CellContext } from "../Cell/CellContext";

import { mergeProps } from "../PropsMergerator";
import {ICellComponentProps} from '../Cell/interface';

function CellWrapperComponent(props: ICellComponentProps): ReactElement {
    const CellComponent = props.config.CellComponent || DefaultCellComponent;
    return (
        <CellContext.Provider value={props}>
            <CellComponent
                item={props.item}
                config={props.config}

                {...{}/*тут прокидываем все опции*/}
                displayValue={props.displayValue}
                fontWeight={props.fontWeight}
                markerVisible={props.markerVisible}
            />
        </CellContext.Provider>
    )
}

const CellWrapperComponentMemo = memo(CellWrapperComponent);

function renderCells(
  itemContext: IItemContext,
  itemProps: IBaseItemComponentProps
): ReactElement[] {
  const cells: ReactElement[] = [];

  itemContext.cellsData.forEach((cellData, index) => {
    const mergedCellProps = mergeProps(cellData, undefined, itemProps, itemContext);
    cells.push(
        <CellWrapperComponentMemo
            key={index}

            item={itemContext.item}
            config={cellData.config}

            {...{}/*тут прокидываем все опции*/}
            displayValue={mergedCellProps.displayValue}
            fontWeight={mergedCellProps.fontWeight}
            markerVisible={mergedCellProps.markerVisible}
        />
    );
  });

  return cells;
}

function ItemComponent(props: IBaseItemComponentProps): ReactElement {
  const itemContext = useContext(ItemContext);
  return (
    <div className="table-row"
         onClick={itemContext.handlers.onClick}>
      {props.children || renderCells(itemContext, props)}
    </div>
  );
}

// Если прикладник обернул наш элемент, то при перерисовки его компонента наш ItemComponent
// должен перерисоваться только если изменили опцию или если мы изменили контекст
export default memo(ItemComponent);
