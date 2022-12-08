import React from 'react';
import {Column, Grid} from '../Controls/grid';

import {useChangeData} from './utils';

export default function RerenderByChangeField(): React.ReactElement {
   const {data, buttons, markedKey, onRowClick} = useChangeData();
   return (
      <div>
         {buttons}
         <Grid data={data} keyProperty='key' onRowClick={onRowClick} markedKey={markedKey}>
            <Column displayProperties={['a']} width='1fr' />
            <Column displayProperties={['b']} width='1fr' />
            <Column displayProperties={['c']} width='1fr' />
            <Column displayProperties={['d']} width='1fr' />
            <Column displayProperties={['e']} width='1fr' />
         </Grid>
      </div>
   );
}
