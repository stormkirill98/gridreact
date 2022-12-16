import React from "react";
import {
   CustomCellProps,
   DEFAULT_CUSTOM_CELL_PROPS,
   generateData,
} from './utils';
import {
   Grid,
   ICellContentRenderProps, IColumnConfig
} from '../grid';

const COMMENT = ``;

function CustomCellRender(
  props: ICellContentRenderProps<CustomCellProps>
): React.ReactElement {
  const button = props.renderProps?.displayButton && <button>Button</button>;
  return (
    <div>
      {`${props.item.c} ${props.item.d}`}
      {button}
    </div>
  );
}

export default function GridGetCellRenderProps(): React.ReactElement {
  const [customCellProps, setCustomCellProps] = React.useState<CustomCellProps>(
    DEFAULT_CUSTOM_CELL_PROPS
  );

  const getCustomCellRenderProps = React.useCallback(
     () => customCellProps,
     [customCellProps]
  );

  const getCustomCellRenderPropsForOneCell = React.useCallback(
     (item: any) => item.key === '1' ? customCellProps : undefined,
     [customCellProps]
  );

  const items = React.useMemo(() => generateData(10), []);

   const [columns, setColumns] = React.useState<IColumnConfig[]>(
      () =>  [
         { width: "1fr", displayProperty: 'a' },
         { width: "1fr", displayProperty: 'b' },
         { width: "1fr", displayProperty: 'c', render: CustomCellRender, getRenderProps: getCustomCellRenderProps },
      ]
   );

   // TODO идеальный вариант, но тогда пересоздатся ссылка на каждую колонку.
   //  То есть чтобы избежать лишних перерисовок нужно нам глубоко сравнивать объект.
   /*  const columns = React.useMemo<IColumnConfig<CustomCellProps>[]>(
        () =>  [
         { width: "1fr", displayProperty: 'a' },
         { width: "1fr", displayProperty: 'b' },
         { width: "1fr", displayProperty: 'c', render: CustomCellRender, getRenderProps: getCustomCellRenderProps },
       ],
        [getCustomCellRenderProps]
     );*/

   const changeState = (getRenderProps: any) => {
      const newCustomCellProps = {
         displayButton: !customCellProps.displayButton,
      };
      setCustomCellProps(newCustomCellProps);

      const newColumns = columns.slice();
      newColumns[2] = {
         ...newColumns[2],
         getRenderProps,
      };
      setColumns(newColumns);
   };

   const changeAllCells = () => {
      changeState(getCustomCellRenderProps);
   };

   const changeOneCellState = () => {
      changeState(getCustomCellRenderPropsForOneCell);
   };

  return (
    <div>
      <div title={COMMENT}>
        <b>
          Перерисовка прикладного контента вызывается с помощью
          Column.getRenderProps - callback
        </b>
      </div>
      <button onClick={changeAllCells}>Change all cells</button>
      <button onClick={changeOneCellState}>Change one cell</button>

      <Grid
        keyProperty={"key"}
        items={items}
        columns={columns}
      />
    </div>
  );
}
