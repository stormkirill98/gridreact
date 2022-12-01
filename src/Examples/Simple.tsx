import React from 'react';
import {Column, Grid, TRowEventHandler} from '../Controls/grid';

import {generateData} from './Data';
const TABLE_DATA = generateData(20);

export default function Simple(): React.ReactElement {
   const [markedKey, setMarkedKey] = React.useState<any>(null);

   const onRowClick: TRowEventHandler = (params) => setMarkedKey(params.item.get('key'));
   return (
      <div className="App">
         <Grid data={TABLE_DATA} keyProperty='key' onRowClick={onRowClick} markedKey={markedKey}>
            <Column displayProperties={['a']} width='1fr' />
            <Column displayProperties={['b']} width='1fr' />
            <Column displayProperties={['c']} width='1fr' />
            <Column displayProperties={['d']} width='1fr' />
            <Column displayProperties={['e']} width='1fr' />
         </Grid>
      </div>
   );
}
