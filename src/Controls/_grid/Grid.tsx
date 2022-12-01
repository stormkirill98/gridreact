import * as React from 'react';
import {columnsAreEqual, getColumnConfigs, IColumnConfig, TColumn} from './ColumnConfiguration';
import {IDataProps, IMarkerProps, IRowEventHandlers} from './interface';
import GridRender from './GridRender';



interface IGridProps extends IDataProps, IRowEventHandlers, IMarkerProps {
   /**
    * Конфигурация колонок
    */
   children: TColumn | TColumn[];
}

interface IGridState {
   columns: IColumnConfig[];
}

/**
 * Публичный компонент.
 * Его задача дать публичное апи(преобразовать children в columns) и отсеять не нужные отрисовки уже на своем уровне.
 * Ненужные отрисовки: отслеживать изменение конфигурации колонок, обработчики событий.
 * То есть забираем ответственность прикладников на себя, чтобы им не приходилось писать useCallback, useMemo и тд
 * @param props
 * @constructor
 */
export default class Grid extends React.Component<IGridProps, IGridState> {
   constructor(props: IGridProps) {
      super(props);
      this.state = { columns: [] };
   }

   shouldComponentUpdate(nextProps: Readonly<IGridProps>, nextState: Readonly<IGridState>, nextContext: any): boolean {
      return this.props.keyProperty !== nextProps.keyProperty ||
         this.props.data !== nextProps.data ||
         this.props.markedKey !== nextProps.markedKey ||
         !columnsAreEqual(this.state.columns, getColumnConfigs(nextProps.children));
   }

   render() {
      return <GridRender data={this.props.data}
                         keyProperty={this.props.keyProperty}
                         columns={this.state.columns}
                         markedKey={this.props.markedKey}
                         onRowClick={this.props.onRowClick}/>;
   }

   static getDerivedStateFromProps(props: IGridProps, state: IGridState): IGridState|null {
      const newColumnConfig = getColumnConfigs(props.children);
      if (columnsAreEqual(state.columns, newColumnConfig)) {
         return null;
      }

      return {
         columns: newColumnConfig
      };
   }
}
