import { useContext, ReactElement} from "react";
import { RowContext } from "./RowContext";
import { CellComponent as DefaultCellComponent } from "../Cell/CellComponent";

import {TContents} from "../../interface/IData";
import {IBaseRowComponentProps} from "./interface";
import {IBaseCellComponentProps} from "../Cell/interface";
import {CellContext, ICellContext} from "../Cell/CellContext";

/**
 * Нам нужно в опции для ячейки вмерджить опции заданные прикладником на строке.
 * Если для колонки какая-то опция не задана, то мы должны взять значение из опций строки,
 * т.к. опция строки распространяется на все ячейки.
 * @param columnProps
 * @param rowProps
 */
function mergeProps(columnProps: IBaseCellComponentProps, rowProps: IBaseRowComponentProps): IBaseCellComponentProps {
  // пример на нескольких опциях, тут не должно быть сплайса пропсов
  return {
    ...columnProps,
    fontWeight: columnProps.fontWeight || rowProps.fontWeight,
    backgroundStyle: columnProps.backgroundStyle || rowProps.backgroundStyle
  }
}

function renderCells(
  columnsProps: IBaseCellComponentProps[],
  contents: TContents,
  rowProps: IBaseRowComponentProps
): ReactElement {
  const cells = [];
  for (let i = 0; i < columnsProps.length; i++) {
    const columnProps = columnsProps[i];
    const CellComponent = columnProps.CellComponent || DefaultCellComponent;

    const mergedColumnProps = mergeProps(columnProps, rowProps);
    const cellContext: ICellContext = {
      props: mergedColumnProps
    };
    cells.push(
        <CellContext.Provider value={cellContext} key={i}>
          <CellComponent
              {
                /*TODO как избавиться от этого сплайса? 2 раза расписывать каждую опцию? Тут и в mergeProps*/
                ...mergedColumnProps
              }
              contents={contents}
              config={columnProps.config}
          />
        </CellContext.Provider>
    );
  }
  return <>{cells}</>;
}

export function RowComponent(props: IBaseRowComponentProps): ReactElement {
  const rowContext = useContext(RowContext);
  return (
    <div className="table-row">
      {props.children || renderCells(rowContext.columnsProps, rowContext.contents, props)}
    </div>
  );
}
