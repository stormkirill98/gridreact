import React from 'react';

/**
 * Конфигурация колонки
 */
export interface IColumnConfig {
   /**
    * Массив полей, от которых зависит эта колонка.
    * Если не задан render, то по дефолту выводится первое поле.
    */
   dependentProperties: string[];

   width: string;

   /**
    * Компонент, используемый для отрисовки кастомного контента в ячейке.
    */
   render?: React.FunctionComponent<ICellContentRenderProps>;
}

export interface ICellContentRenderProps {
   item: Record<string, string>;
   column: IColumnConfig;
}

interface ICellComponentProps {
   item: Record<string, string>;
   column: IColumnConfig;
   dependentValues: Record<string, any>;
}

function CellComponent(props: ICellComponentProps): React.ReactElement {
   let content: string | React.ReactElement;

   if (props.column.render) {
      content = <props.column.render column={props.column} item={props.item}/>;
   } else {
      const displayProperty = props.column.dependentProperties[0];
      content = props.item[displayProperty];
   }

   return (
      <div className='grid-cell'>
         {content}
      </div>
   );
}

export default React.memo(CellComponent);
