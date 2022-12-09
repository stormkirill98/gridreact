import React from 'react';
import RowComponent from './RowComponent';
import { IColumnConfig } from './CellComponent';

interface IGridProps {
   items: Record<string, string>[];
   columns: IColumnConfig[];
   keyProperty: string;
}

function getRowDependentValues(columns: IColumnConfig[], item: Record<string, string>): Record<string, string> {
   const dependentValues: Record<string, string> = {};

   columns.forEach((column) => {
      column.dependentProperties.forEach((dependentProperty) => {
         dependentValues[dependentProperty] = item[dependentProperty];
      })
   })

   return dependentValues;
}

function getStyles(columns: IColumnConfig[]): React.CSSProperties {
   let gridTemplateColumns = '';

   columns.forEach((column) => {
      const {width = 'auto'} = column;
      gridTemplateColumns += ` ${width}`;
   });

   return { gridTemplateColumns };
}

function Grid(props: IGridProps): React.ReactElement {
   return (
      <div style={getStyles(props.columns)} className={'grid'}>
         {
            props.items.map((item) => {
               const key = item[props.keyProperty];
               const dependentValues = getRowDependentValues(props.columns, item);
               return <RowComponent key={key}
                                    columns={props.columns}
                                    item={item}
                                    dependentValues={dependentValues}
               />;
            })
         }
      </div>
   );
}

export default React.memo(Grid);
