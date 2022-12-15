import React from 'react';

export type TCellRender<TRenderProps = any> = React.FunctionComponent<ICellContentRenderProps<TRenderProps>>

export type TRenderValue = Record<string, any>;

/**
 * Конфигурация колонки
 */
export interface IColumnConfig<TRenderProps = any> {
   /**
    * Массив полей, от которых зависит эта колонка.
    * Если не задан render, то по дефолту выводится первое поле.
    */
   displayProperty: string | string[];

   width: string;

   /**
    * Компонент, используемый для отрисовки кастомного контента в ячейке.
    */
   render?: TCellRender<TRenderProps>;

   /**
    * Кастомные опции для рендера контента.
    */
   renderProps?: TRenderProps;
}

export interface ICellContentRenderProps<TRenderProps = any, TRenderValue = any> {
   item: Record<string, string>;
   renderValue: TRenderValue;
   renderProps?: TRenderProps;
}

interface ICellComponentProps {
   item: Record<string, string>;
   column: IColumnConfig;
   renderValue: TRenderValue;
}

function CellComponent(props: ICellComponentProps): React.ReactElement {
   let content: string | React.ReactElement;

   if (props.column.render) {
      content = <props.column.render item={props.item} renderProps={props.column.renderProps} renderValue={props.renderValue}/>;
   } else {
      const displayProperty = typeof props.column.displayProperty === 'string'
         ? props.column.displayProperty
         : props.column.displayProperty[0];
      content = props.item[displayProperty];
   }

   return (
      <div className='grid-cell'>
         {content}
      </div>
   );
}

export default React.memo(CellComponent);
