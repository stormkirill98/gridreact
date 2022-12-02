import React from 'react';
import {Column, Grid, IColumnConfig, TRowEventHandler} from '../Controls/grid';

import {generateData} from './Data';
const TABLE_DATA = generateData(20);

export default function RerenderByChangeField(): React.ReactElement {
   const [markedKey, setMarkedKey] = React.useState<any>(null);
   const [selectedColumn, setSelectedColumn] = React.useState<IColumnConfig|undefined>();

   const onRowClick: TRowEventHandler = (params) => {
      setMarkedKey(params.item.get('key'));
      setSelectedColumn(() => params.column);
   };
   const changeFields = (fields: string[]|undefined) => {
      const item = TABLE_DATA.find((it) => it.get('key') === markedKey);
      if (item) {
         if (fields) {
            fields.forEach((property) => item.set(property, item.get(property) + '1'))
         } else {
            item.set('a', item.get('a') + '1')
            item.set('b', item.get('b') + '1')
            item.set('c', item.get('c') + '1')
            item.set('d', item.get('d') + '1')
            item.set('e', item.get('e') + '1')
         }
      }
   }
   return (
      <div>
         <div>
            <button onClick={() => changeFields(selectedColumn?.displayProperties)}>{`Change fields "${selectedColumn?.displayProperties?.join(', ')}" in item "${markedKey}"`}</button>
            <button onClick={() => changeFields(undefined)}>{`Change all fields in item "${markedKey}"`}</button>
         </div>
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
