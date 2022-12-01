import "./styles.css";
import React, {useCallback} from 'react';

import {
   Column,
   Grid,
   TRowEventHandler
} from './Controls/grid';

import {IData, TItem} from './Controls/interface/IData';

function generateData(count: Number): IData {
  const result: TItem[] = [];

  for (let idx = 1; idx <= count; idx++) {
    result.push({
      key: idx,
      a: `cell_${idx}_a`,
      b: `cell_${idx}_b`,
      c: `cell_${idx}_c`
    });
  }

  return result;
}

const TABLE_DATA = generateData(10);

export default function App() {
  const [markedKey, setMarkedKey] = React.useState<any>(null);

  const onRowClick: TRowEventHandler = useCallback(
     (params) => setMarkedKey(params.rowData.key), []
  );

  return (
    <div className="App">
      <Grid data={TABLE_DATA} keyProperty='key' onRowClick={onRowClick} markedKey={markedKey}>
         <Column displayProperties={['a']} width='1fr' />
         <Column displayProperties={['b']} width='1fr' />
         <Column displayProperties={['c']} width='1fr' />
      </Grid>
    </div>
  );
}
