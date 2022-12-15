import React from "react";
import {
  CustomCellProps,
  DEFAULT_CUSTOM_CELL_PROPS,
  generateColumns,
  generateData,
} from "./utils";
import { Grid, ICellContentRenderProps } from "../grid";

const COMMENT = `
Плюсы:
   1. Ничего нового для прикладников)
   
Минусы:
   1. Производительность. Перерисовка будет затрагивать список + все строки + все обертки от прикладников до списка
   2. Пересоздание массива с колонками + пересоздание конфига колонки, которую нужно перерисовать.
       Прикладнику нужно правильно делать обновление, чтобы не перерисовать ничего лишнего.
`;

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

export default function ColumnConfigRenderProps(): React.ReactElement {
  const [customCellProps, setCustomCellProps] = React.useState<CustomCellProps>(
    DEFAULT_CUSTOM_CELL_PROPS
  );
  const [items] = React.useState(generateData(10));
  const [columns, setColumns] = React.useState(
    generateColumns(CustomCellRender, customCellProps)
  );

  const changeState = () => {
    const newCustomCellProps = {
      displayButton: !customCellProps.displayButton,
    };
    setCustomCellProps(newCustomCellProps);

    const newColumns = columns.slice();
    newColumns[2] = {
      ...newColumns[2],
      renderProps: newCustomCellProps,
    };
    setColumns(newColumns);
  };

  return (
    <div>
      <div title={COMMENT}>
        <b>
          Перерисовка прикладного контента вызывается с помощью
          ColumnConfig.renderProps
        </b>
      </div>
      <button onClick={changeState}>Change state</button>

      <Grid keyProperty={"key"} items={items} columns={columns} />
    </div>
  );
}
