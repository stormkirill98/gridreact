import React from 'react';
import {Column, Grid, TRowEventHandler} from '../Controls/grid';

import {generateData} from './Data';
import {useMarker} from './utils';

// 200 записей, 50 колонок
const TABLE_DATA = generateData(200);
export default function MoreDataWithChildren(): React.ReactElement {
   const markerProps = useMarker();
   return (
      <Grid data={TABLE_DATA} keyProperty='key' {...markerProps}>
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
