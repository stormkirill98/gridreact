import {ReactElement} from 'react';
import {columnsAreEqual, getColumnConfigs, IColumnConfig, TColumn} from './ColumnConfiguration';
import {IDataProps, IMarkerProps, IRowEventHandlers} from './interface';
import * as React from 'react';
import GridRender from './GridRender';



interface IGridProps extends IDataProps, IRowEventHandlers, IMarkerProps {
   /**
    * Конфигурация колонок
    */
   children: TColumn | TColumn[];
}

/**
 * Публичный компонент.
 * Его задача дать публичное апи и отсеять все не нужные отрисовки уже на своем уровне.
 * Ненужные отрисовки: отслеживать изменение конфигурации колонок, обработчики событий.
 * То есть забираем ответственность прикладников на себя, чтобы им не приходилось писать useCallback, useMemo и тд
 * @param props
 * @constructor
 */
function Grid(props: IGridProps): ReactElement {
   const columns: IColumnConfig[] = React.useMemo(
      () => getColumnConfigs(props.children), []
   );

   return <GridRender data={props.data}
                      keyProperty={props.keyProperty}
                      columns={columns}
                      markedKey={props.markedKey}
                      onRowClick={props.onRowClick}/>;
}

function propsAreEqual(prevProps: IGridProps, nextProps: IGridProps): boolean {
   return prevProps.keyProperty === nextProps.keyProperty &&
      prevProps.markedKey === nextProps.markedKey &&
      columnsAreEqual(prevProps.children, nextProps.children);
}
export default React.memo(Grid, propsAreEqual);
