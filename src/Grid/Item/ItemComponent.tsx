import { useContext, ReactElement} from "react";

import { IItemContext, ItemContext } from './ItemContext';
import { IBaseItemComponentProps } from "./interface";

import { CellComponent as DefaultCellComponent } from "../Cell/CellComponent";
import { CellContext } from "../Cell/CellContext";

import { mergeProps } from "../PropsMergerator";

function renderCells(
  itemContext: IItemContext,
  itemProps: IBaseItemComponentProps
): ReactElement[] {
  const cells: ReactElement[] = [];

  itemContext.cellsData.forEach((cellData, index) => {
    const mergedCellProps = mergeProps(cellData, undefined, itemProps, itemContext);
    const CellComponent = cellData.CellComponent || DefaultCellComponent;
    cells.push(
        <CellContext.Provider value={mergedCellProps} key={index}>
          <CellComponent item={itemContext.item}
                         config={cellData.config}

                         {...{}/*тут прокидываем все опции*/}
                         fontWeight={mergedCellProps.fontWeight}
                         markerVisible={mergedCellProps.markerVisible}
          />
        </CellContext.Provider>
    );
  });

  return cells;
}

export function ItemComponent(props: IBaseItemComponentProps): ReactElement {
  const itemContext = useContext(ItemContext);
  return (
    <div className="table-row"
         onClick={itemContext.handlers.onClick}>
      {props.children || renderCells(itemContext, props)}
    </div>
  );
}
