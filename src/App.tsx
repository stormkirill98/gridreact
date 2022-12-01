import "./styles.css";
import {useMemo} from 'react';

import {
  Column,
  GridView,
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
  return (
    <div className="App">
      <GridView data={TABLE_DATA} keyProperty='key'>
         <Column displayProperties={useMemo(() => ['a'], [])} width='1fr' />
         <Column displayProperties={useMemo(() => ['b'], [])} width='1fr' />
         <Column displayProperties={useMemo(() => ['c'], [])} width='1fr' />
      </GridView>
    </div>
  );
}
