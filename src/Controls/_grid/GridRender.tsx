import './style/Table.css';
import * as React from 'react';
import {IColumnConfig} from './ColumnConfiguration';
import RowComponent from './RowComponent';
import {IDataProps, IMarkerProps, IRowEventHandlers} from './interface';

interface IRenderProps extends IDataProps, IRowEventHandlers, IMarkerProps {
   columns: IColumnConfig[];
}

function getStyles(columns: IColumnConfig[], props: IRenderProps): React.CSSProperties {
   let gridTemplateColumns = '';

   columns.forEach((column) => {
      const {width = 'auto'} = column;
      gridTemplateColumns += `${width} `;
   });

   return { gridTemplateColumns };
}

function GridRender(props: IRenderProps): React.ReactElement {
   return (
      <div style={getStyles(props.columns, props)} className='table'>
         <div className='table-body'>
            {
               props.data.map((rowData) => {
                  const key = rowData[props.keyProperty];
                  return <RowComponent key={key}
                                       item={rowData}
                                       columns={props.columns}

                                       marked={props.markedKey === key}

                                       onClick={props.onRowClick}
                  />;
               })
            }
         </div>
      </div>
   );
}

export default React.memo(GridRender);
