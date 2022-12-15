import React from 'react';
import {CustomCellProps, DEFAULT_CUSTOM_CELL_PROPS, generateColumns, generateData} from './utils';
import {Grid, ICellContentRenderProps, TGetCellRenderPropsCallback} from '../grid';

function CustomCellRender(props: ICellContentRenderProps<CustomCellProps>): React.ReactElement {
   const button = props.renderProps?.displayButton && <button>Button</button>
   return (
      <div>
         {`${props.item.c} ${props.item.d}`}
         {button}
      </div>
   );
}

export default function (): React.ReactElement {
   const [customCellProps, setCustomCellProps] = React.useState<CustomCellProps>(DEFAULT_CUSTOM_CELL_PROPS);

   const items = React.useMemo(() => generateData(10), []);
   const columns = React.useMemo(() => generateColumns(CustomCellRender), []);
   const getCellRenderProps: TGetCellRenderPropsCallback = React.useCallback(
      (column) => (column.displayProperty === 'c' ? customCellProps : undefined),
      [customCellProps]
   );

   const changeState = () => {
      const newCustomCellProps = { displayButton: !customCellProps.displayButton };
      setCustomCellProps(newCustomCellProps);
   }

   return (
      <div>
         <div><b>Перерисовка прикладного контента вызывается с помощью Grid.getCellRenderProps - callback</b></div>
         <button onClick={changeState}>Change state</button>

         <Grid keyProperty={'key'} items={items} columns={columns} getCellRenderProps={getCellRenderProps}/>
      </div>
   );
}
