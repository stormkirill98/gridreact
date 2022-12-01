import {memo, ReactElement} from 'react';
import {IColumnConfig} from './ColumnConfiguration';

interface ICellProps {
   config: IColumnConfig;
   data: Record<string, any>;
}

function CellComponent(props: ICellProps): ReactElement {
   return <span>{props.data[props.config.displayProperties[0]]}</span>;
}

export default memo(CellComponent);
