import * as React from 'react';
import {columnsAreEqual, getColumnConfigs, IColumnConfig, TColumn} from './ColumnConfiguration';
import {IDataProps, IMarkerProps, IRowEventHandlers} from './interface';
import GridRender from './GridRender';

interface IGridProps extends IDataProps, IRowEventHandlers, IMarkerProps {
   /**
    * Конфигурация колонок
    */
   children?: TColumn | TColumn[];
   columns?: IColumnConfig[];
}

interface IGridState extends IRowEventHandlers {
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
      this.state = {
         columns: [],
         // Оборачиваем в коллбэк, чтобы прикладнику не нужно было писать useCallback
         onRowClick: props.onRowClick ? (params) => props.onRowClick?.(params) : undefined
      };
   }

   shouldComponentUpdate(nextProps: Readonly<IGridProps>, nextState: Readonly<IGridState>, nextContext: any): boolean {
      return this.props.keyProperty !== nextProps.keyProperty ||
         this.props.data !== nextProps.data ||
         this.props.markedKey !== nextProps.markedKey ||
         this.props.columns !== nextProps.columns ||
         !!nextProps.children && !columnsAreEqual(this.state.columns, getColumnConfigs(nextProps.columns, nextProps.children));
   }

   render() {
      return <GridRender data={this.props.data}
                         keyProperty={this.props.keyProperty}
                         columns={this.state.columns}
                         markedKey={this.props.markedKey}
                         onRowClick={this.state.onRowClick}/>;
   }

   static getDerivedStateFromProps(props: IGridProps, state: IGridState): IGridState|null {
      const newColumnConfig = getColumnConfigs(props.columns, props.children);
      // Сравниваем только если задан children, если задают columns то это задача прикладника
      if (props.children && columnsAreEqual(state.columns, newColumnConfig)) {
         return null;
      }

      return {
         ...state,
         columns: newColumnConfig
      };
   }
}
