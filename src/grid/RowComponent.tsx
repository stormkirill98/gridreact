import React from 'react';
import CellComponent, {IColumnConfig, TGetCellRenderPropsCallback, TRenderValue} from './CellComponent';

interface IRowComponentProps {
   columns: IColumnConfig[];
   item: Record<string, any>;
   renderValue: TRenderValue;

   getCellRenderProps?: TGetCellRenderPropsCallback;
}

function getCellRenderValue(column: IColumnConfig, item: Record<string, string>): TRenderValue {
   const renderValue: TRenderValue = {};

   const properties = typeof column.displayProperty === 'string' ? [column.displayProperty] : column.displayProperty;
   properties.forEach((property) => {
      renderValue[property] = item[property];
   })

   return renderValue;
}

// TODO Нужно для мемоизации renderValue, в нашей структуре это не пригодится, мемоизация будет на уровне коллекции
//  то есть на уровне коллекции мы просто не изменим объект, если не изменился displayProperty
function CellWrapper(props: {column: IColumnConfig, item: Record<string, string>, cellRenderProps: any}): React.ReactElement {
   const renderValue = React.useMemo(
      () => getCellRenderValue(props.column, props.item),
      [props.column.displayProperty]
   );
   return <CellComponent column={props.column}
                         item={props.item}
                         renderValue={renderValue}
                         cellRenderProps={props.cellRenderProps}/>
}
const CellWrapperMemo = React.memo(CellWrapper);

function RowComponent(props: IRowComponentProps): React.ReactElement {
   return (
      <div className='grid-row'>
         {
            props.columns.map((column) => <CellWrapperMemo key={column.displayProperty[0]}
                                                           column={column}
                                                           item={props.item}
                                                           cellRenderProps={props.getCellRenderProps?.(column, props.item)}
            />)
         }
      </div>
   );
}

export default React.memo(RowComponent);
