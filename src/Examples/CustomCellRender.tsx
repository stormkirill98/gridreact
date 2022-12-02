import React, {ReactElement} from 'react';
import {Column, Grid, ICellRenderParams, TRowEventHandler} from '../Controls/grid';
import TaskRender from './CellRenders/TaskRender';

import {generateData} from './Data';
import {useMarker} from './utils';
const TABLE_DATA = generateData(20);

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
   return `${displayProperty} custom`
}

export default function CustomCellRender(): React.ReactElement {
   const markerProps = useMarker();
   return (
      <Grid data={TABLE_DATA} keyProperty='key' {...markerProps}>
         <Column displayProperties={['a']} width='1fr' render={React.memo(BoldText)}/>
         <Column displayProperties={['b']} width='1fr' render={React.memo(BorderCell)}/>
         <Column displayProperties={['c']} width='1fr' render={CustomText}/>
         <Column displayProperties={['d']} width='400px' render={React.memo(TaskRender)}/>
         <Column displayProperties={['e']} width='1fr' />
      </Grid>
   );
}
