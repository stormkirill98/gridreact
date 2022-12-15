import React from 'react';
import {CustomCellProps, DEFAULT_CUSTOM_CELL_PROPS, generateColumns, generateData} from './utils';
import {Grid, ICellContentRenderProps} from '../grid';

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
   const [items] = React.useState(generateData(10));
   const [columns, setColumns] = React.useState(generateColumns(CustomCellRender, customCellProps));

   const changeState = () => {
      const newCustomCellProps = { displayButton: !customCellProps.displayButton };
      setCustomCellProps(newCustomCellProps);

      const newColumns = columns.slice();
      newColumns[2] = {
         ...newColumns[2],
         renderProps: newCustomCellProps
      };
      setColumns(newColumns);
   }

   return (
      <div>
         <div><b>Перерисовка прикладного контента вызывается с помощью ColumnConfig.renderProps</b></div>
         <button onClick={changeState}>Change state</button>

         <Grid keyProperty={'key'} items={items} columns={columns} />
      </div>
   );
}
