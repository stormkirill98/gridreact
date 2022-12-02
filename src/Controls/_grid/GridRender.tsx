import './style/Table.css';
import * as React from 'react';
import {IColumnConfig} from './ColumnConfiguration';
import RowComponent from './RowComponent';
import {IDataProps, IMarkerProps, IRowEventHandlers, ISelectionProps} from './interface';

interface IRenderProps extends IDataProps, IRowEventHandlers, IMarkerProps, ISelectionProps {
   columns: IColumnConfig[];
}

function getStyles(columns: IColumnConfig[], props: IRenderProps): React.CSSProperties {
   let gridTemplateColumns = '';

   if (props.selectionVisibility === 'visible') {
      gridTemplateColumns += ' 30px';
   }

   columns.forEach((column) => {
      const {width = 'auto'} = column;
      gridTemplateColumns += ` ${width}`;
   });

   return { gridTemplateColumns };
}

function GridRender(props: IRenderProps): React.ReactElement {
   return (
      <div style={getStyles(props.columns, props)} className='table'>
         <div className='table-body'>
            {
               props.data.map((rowData) => {
                  const key = rowData.get(props.keyProperty);
                  return <RowComponent key={key}
                                       item={rowData}
                                       columns={props.columns}

                                       marked={props.markedKey === key}
                                       selectionVisibility={props.selectionVisibility}

                                       onClick={props.onRowClick}
                  />;
               })
            }
         </div>
      </div>
   );
}

export default React.memo(GridRender);
