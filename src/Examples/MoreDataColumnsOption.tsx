import React from 'react';
import {Grid, TRowEventHandler} from '../Controls/grid';

import {generateColumns, generateData} from './Data';

const TABLE_DATA = generateData(200);
const COLUMNS = generateColumns(50);
export default function MoreDataColumnsOption(): React.ReactElement {
   const [markedKey, setMarkedKey] = React.useState<any>(null);

   const onRowClick: TRowEventHandler = (params) => setMarkedKey(params.item.key);
   return (
      <div className="App">
         <Grid data={TABLE_DATA} keyProperty='key' columns={COLUMNS} onRowClick={onRowClick} markedKey={markedKey}/>
      </div>
   );
}