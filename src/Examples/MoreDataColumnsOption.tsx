import React from 'react';
import {Grid, TRowEventHandler} from '../Controls/grid';

import {generateColumns, generateData} from './Data';
import {useMarker} from './utils';

const TABLE_DATA = generateData(200);
const COLUMNS = generateColumns(50);
export default function MoreDataColumnsOption(): React.ReactElement {
   const markerProps = useMarker();
   return (
      <Grid data={TABLE_DATA} keyProperty='key' columns={COLUMNS} {...markerProps}/>
   );
}
