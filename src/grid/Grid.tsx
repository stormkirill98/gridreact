import React from 'react';
import RowComponent from './RowComponent';
import {IColumnConfig, TGetCellRenderPropsCallback, TRenderValue} from './CellComponent';

interface IGridProps {
   items: Record<string, string>[];
   columns: IColumnConfig[];
   keyProperty: string;

   getCellRenderProps?: TGetCellRenderPropsCallback;
}

function getRowRenderValue(columns: IColumnConfig[], item: Record<string, string>): TRenderValue {
   const renderValue: TRenderValue = {};

   columns.forEach((column) => {
      const properties = typeof column.displayProperty === 'string' ? [column.displayProperty] : column.displayProperty;
      properties.forEach((property) => {
         renderValue[property] = item[property];
      })
   })

   return renderValue;
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
               const renderValue = getRowRenderValue(props.columns, item);
               return <RowComponent key={key}
                                    columns={props.columns}
                                    item={item}
                                    renderValue={renderValue}
                                    getCellRenderProps={props.getCellRenderProps}
               />;
            })
         }
      </div>
   );
}

export default React.memo(Grid);
