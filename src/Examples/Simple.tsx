import React from 'react';
import {Column, Grid, TRowEventHandler} from '../Controls/grid';

import {generateData} from './Data';
import {useMarker} from './utils';
const TABLE_DATA = generateData(20);

export default function Simple(): React.ReactElement {
   const markerProps = useMarker();
   return (
      <Grid data={TABLE_DATA} keyProperty='key' {...markerProps}>
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
         <Column displayProperties={['d']} width='1fr' />
         <Column displayProperties={['e']} width='1fr' />
      </Grid>
   );
}
