import React from 'react';
import {Column, Grid, TRowEventHandler} from '../Controls/grid';

import {generateData} from './Data';
import {TVisibility} from '../Controls/interface/TGeneral';
import {useMarker, useSelection} from './utils';
const TABLE_DATA = generateData(20);

export default function SelectionVisibility(): React.ReactElement {
   const markerProps = useMarker();
   const {selectionVisibility, toggleButton} = useSelection();
   return (
      <div>
         {toggleButton}
         <Grid data={TABLE_DATA}
               keyProperty='key'
               {...markerProps}
               selectionVisibility={selectionVisibility}
         >
            <Column displayProperties={['a']} width='1fr' />
            <Column displayProperties={['b']} width='1fr' />
            <Column displayProperties={['c']} width='1fr' />
            <Column displayProperties={['d']} width='1fr' />
            <Column displayProperties={['e']} width='1fr' />
         </Grid>
      </div>
   );
}
