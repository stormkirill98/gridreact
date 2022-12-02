import React from 'react';
import {Column, Grid, TRowEventHandler} from '../Controls/grid';

import {generateData} from './Data';
import {TVisibility} from '../Controls/interface/TGeneral';
const TABLE_DATA = generateData(20);

export default function SelectionVisibility(): React.ReactElement {
   const [markedKey, setMarkedKey] = React.useState();
   const [selectionVisibility, setSelectionVisibility] = React.useState<TVisibility>('hidden');

   const onRowClick: TRowEventHandler = (params) => setMarkedKey(params.item.get('key'));
   const toggleSelectionVisibility = () => {
      setSelectionVisibility(selectionVisibility === 'hidden' ? 'visible' : 'hidden');
   }
   return (
      <div>
         <button onClick={toggleSelectionVisibility}>Toggle selection visibility</button>
         <Grid data={TABLE_DATA}
               keyProperty='key'
               onRowClick={onRowClick}
               markedKey={markedKey}
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
