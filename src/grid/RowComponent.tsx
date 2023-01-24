import React from "react";
import CellComponent, { IColumnConfig } from "./CellComponent";

interface IRowComponentProps {
  columns: IColumnConfig[];
  item: Record<string, any>;
  dependentValues: Record<string, any>;
}

function getCellDependentValues(
  column: IColumnConfig,
  item: Record<string, string>
): Record<string, string> {
  const dependentValues: Record<string, string> = {};

  column.dependentProperties.forEach((dependentProperty) => {
    dependentValues[dependentProperty] = item[dependentProperty];
  });

  return dependentValues;
}

function RowComponent(props: IRowComponentProps): React.ReactElement {
  return (
    <div className="grid-row">
      {props.columns.map((column) => {
        const keyProperty = column.dependentProperties[0];
        const dependentValues = getCellDependentValues(column, props.item);
        return (
          <CellComponent
            key={keyProperty}
            column={column}
            item={props.item}
            dependentValues={dependentValues}
          />
        );
      })}
    </div>
  );
}

export default React.memo(RowComponent);
