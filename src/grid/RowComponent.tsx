import React from 'react';
import CellComponent, {IColumnConfig, TCellRender, TGetCellRenderPropsCallback, TRenderValue} from './CellComponent';

interface IRowComponentProps {
   columns: IColumnConfig[];
   item: Record<string, any>;
   renderValue: TRenderValue;

   getCellRenderProps?: TGetCellRenderPropsCallback;
}

function getCellRenderValue(displayProperty: string| string[], item: Record<string, string>): TRenderValue {
   const renderValue: TRenderValue = {};

   const properties = typeof displayProperty === 'string' ? [displayProperty] : displayProperty;
   properties.forEach((property) => {
      renderValue[property] = item[property];
   })

   return renderValue;
}

// TODO Нужно для мемоизации renderValue, в нашей структуре это не пригодится, мемоизация будет на уровне коллекции
//  то есть на уровне коллекции мы просто не изменим объект, если не изменился displayProperty
function CellWrapper(props: {displayProperty: string| string[], item: Record<string, string>, cellRenderProps: any, render?: TCellRender}): React.ReactElement {
   const renderValue = React.useMemo(
      () => getCellRenderValue(props.displayProperty, props.item),
      [props.displayProperty]
   );
   return <CellComponent item={props.item}
                         renderValue={renderValue}
                         displayProperty={props.displayProperty}
                         render={props.render}
                         cellRenderProps={props.cellRenderProps}/>
}
const CellWrapperMemo = React.memo(CellWrapper);

function RowComponent(props: IRowComponentProps): React.ReactElement {

   return (
      <div className='grid-row'>
         {
            props.columns.map((column) => {
               const renderProps = props.getCellRenderProps?.(column, props.item) ||
                  column.renderProps ||
                  column.getRenderProps?.(props.item);
               return <CellWrapperMemo key={column.displayProperty[0]}
                                       displayProperty={column.displayProperty}
                                       render={column.render}
                                       item={props.item}
                                       cellRenderProps={renderProps}
               />
            })
         }
      </div>
   );
}

export default React.memo(RowComponent);
