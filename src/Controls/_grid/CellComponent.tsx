import {memo, ReactElement} from 'react';
import {IColumnConfig, TCellContentRender} from './ColumnConfiguration';
import {TItem} from './interface';
import * as React from 'react';

const CELL_CLASS_NAME = 'table-cell';
export const CELL_SELECTOR = `.${CELL_CLASS_NAME}`;

/**
 * Интерфейс опций ячейки
 * @remark
 * Наследует рекорд, т.к. в опции прокидываем значения полей записи, от которых эта колонка влияет.
 * Делаем это для оптимизации перерисовок.
 * Прокидывать объект нельзя, т.к. внутри цикла по колонкам его нельзя мемоизировать(нельзя вызвать хук).
 * Для объекта придется делать wrapper над ячейкой, который его мемоизирует.
 */
interface ICellProps extends Record<string, any> {
   item: TItem;
   config: IColumnConfig;
   marked: boolean;
}

function getClassName(props: ICellProps): string {
   let className = CELL_CLASS_NAME;
   if (props.marked) {
      className += ' table-cell-marked';
   }
   return className;
}

function getContent(props: ICellProps): string | ReactElement {
   if (typeof props.config.render === 'function') {
      const dependentValues = getCellDependentValues(props.config, props.item);
      return props.config.render({...dependentValues, config: props.config, item: props.item});
   }

   if (props.config.render) {
      const dependentValues = getCellDependentValues(props.config, props.item);
      const Render = props.config.render as TCellContentRender;
      return <Render {...dependentValues} item={props.item} config={props.config} />
   }

   return props.item.get(props.config.displayProperties[0]);
}

function CellComponent(props: ICellProps): ReactElement {
   return <span className={getClassName(props)}>
      {getContent(props)}
   </span>;
}

export default memo(CellComponent);

export function getCellDependentValues(column: IColumnConfig, item: TItem): Record<string, unknown> {
   const dependentValues: Record<string, any> = {};
   column.displayProperties.forEach((property) => dependentValues[property] = item.get(property))
   return dependentValues;
}
