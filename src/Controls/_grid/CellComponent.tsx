import {memo, ReactElement} from 'react';
import {IColumnConfig} from './ColumnConfiguration';
import {TItem} from './interface';

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
   let className = 'table-cell';
   if (props.marked) {
      className += ' table-cell-marked';
   }
   return className;
}

function CellComponent(props: ICellProps): ReactElement {
   const displayValue = props.item.get(props.config.displayProperties[0]);
   return <span className={getClassName(props)}>
      {displayValue}
   </span>;
}

export default memo(CellComponent);
