import React from 'react';
import {Column, Grid, TRowEventHandler} from '../Controls/grid';

import {generateData} from './Data';

// 200 записей, 50 колонок
const TABLE_DATA = generateData(200);
export default function MoreDataWithChildren(): React.ReactElement {
   const [markedKey, setMarkedKey] = React.useState<any>(null);

   const onRowClick: TRowEventHandler = (params) => setMarkedKey(params.item.get('key'));
   return (
      <Grid data={TABLE_DATA} keyProperty='key' onRowClick={onRowClick} markedKey={markedKey}>
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
      </Grid>
   );
}
