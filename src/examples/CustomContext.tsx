import React from "react";
import {
  CustomCellProps,
  DEFAULT_CUSTOM_CELL_PROPS,
  generateColumns,
  generateData,
} from "./utils";
import { Grid, ICellContentRenderProps } from "../grid";

const CustomCellContext = React.createContext<CustomCellProps>(
  DEFAULT_CUSTOM_CELL_PROPS
);

function CustomCellRender(props: ICellContentRenderProps): React.ReactElement {
  const customCellProps = React.useContext(CustomCellContext);
  const button = customCellProps.displayButton && <button>Button</button>;
  return (
    <div>
      {`${props.item.c} ${props.item.d}`}
      {button}
    </div>
  );
}

export default function CustomContext(): React.ReactElement {
  const [customCellProps, setCustomCellProps] = React.useState<CustomCellProps>(
    DEFAULT_CUSTOM_CELL_PROPS
  );

  const items = React.useMemo(() => generateData(10), []);
  const columns = React.useMemo(() => generateColumns(CustomCellRender), []);

  const changeState = () => {
    setCustomCellProps({
      displayButton: !customCellProps.displayButton,
    });
  };

  return (
    <div>
      <div>
        <b>
          Перерисовка прикладного контента вызывается с помощью прикладного
          контекста
        </b>
      </div>
      <button onClick={changeState}>Change state</button>

      <CustomCellContext.Provider value={customCellProps}>
        <Grid keyProperty={"key"} items={items} columns={columns} />
      </CustomCellContext.Provider>
    </div>
  );
}
