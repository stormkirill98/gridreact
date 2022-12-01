import {memo, ReactElement} from 'react';
import {IColumnConfig} from './ColumnConfiguration';
import CellComponent from './CellComponent';

export interface IRowProps<TRowData extends Record<string, any> = Record<string, any>> {
   data: TRowData;
   columns: IColumnConfig[];
   keyProperty: string;
}

function RowComponent(props: IRowProps): ReactElement {
   return <div className='table-row' key={props.data[props.keyProperty]}>
      {
         props.columns.map((column) => {
            const cellData: Record<string, any> = {};
            column.displayProperties.forEach((property) => cellData[property] = props.data[property])
            return <CellComponent config={column} data={cellData} key={column.displayProperties[0]}/>;
         })
      }
   </div>;
}

export default memo(RowComponent);
