import React from 'react';
import {Column, Grid, ICellRenderParams} from '../Controls/grid';
import TaskRender from './CellRenders/TaskRender';

import {useChangeData, useSelection} from './utils';

function BoldText(params: ICellRenderParams): React.ReactElement {
   const displayProperty = params.config.displayProperties[0];
   return <div className={'cell-bold content-center'}>
      {params.item.get(displayProperty)}
   </div>;
}

function BorderCell(params: ICellRenderParams): React.ReactElement {
   const displayProperty = params.config.displayProperties[0];
   return <div className={'cell-border content-center'}>
      {params.item.get(displayProperty)}
   </div>;
}

function CustomText(params: ICellRenderParams): string {
   const displayProperty = params.config.displayProperties[0];
   const displayValue = params.item.get(displayProperty);
   return `customize value ${displayValue}`
}

export default function CustomCellRender(): React.ReactElement {
   const {data, buttons, markedKey, onRowClick} = useChangeData();
   const {selectionVisibility, toggleButton} = useSelection();

   return (
      <div>
         {toggleButton}
         {buttons}
         <Grid data={data} keyProperty='key' markedKey={markedKey} onRowClick={onRowClick} selectionVisibility={selectionVisibility}>
            <Column displayProperties={['a']} width='1fr' render={React.memo(BoldText)}/>
            <Column displayProperties={['b']} width='1fr' render={React.memo(BorderCell)}/>
            <Column displayProperties={['c']} width='1fr' render={CustomText}/>
            <Column displayProperties={['d']} width='400px' render={React.memo(TaskRender)}/>
            <Column displayProperties={['e']} width='1fr' />
         </Grid>
      </div>
   );
}
