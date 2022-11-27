import "./styles.css";
import {ReactElement, useMemo, useState} from 'react';

import {
  GridView,
  ItemComponent,
  IItemComponentProps,
  CellComponent,
  ICellComponentProps,
} from "./Grid/Grid";

import {IData, TItem} from './interface/IData';
import { IColumnConfig } from "./Grid/Cell/interface";
import {IItemEventHandlers} from './Grid/GridView';

function generateData(count: Number): IData {
  const result: TItem[] = [];

  for (let idx = 1; idx <= count; idx++) {
    result.push({
      key: idx,
      a: `cell_${idx}_a`,
      b: `cell_${idx}_b`,
      c: `cell_${idx}_c`,
      fontWeight: idx % 3 === 0 ? "bold" : undefined,
    });
  }

  return result;
}

function MyItemComponent(props: IItemComponentProps): ReactElement {
  return <ItemComponent fontWeight={props.item.fontWeight}/>;
}

interface ICellTemplateOptions {
  addedDisplayValue: string;
}

function MyCellComponent(props: ICellComponentProps): ReactElement {
  const displayValue = "custom_" + props.item?.c;
  return <CellComponent displayValue={displayValue} />;
}

const TABLE_DATA = generateData(10);
const COLUMNS: IColumnConfig[] = [
  { width: "1fr", displayProperty: "a" },
  { width: "1fr", displayProperty: "b" },
  {
    width: "1fr",
    displayProperty: "c",
    CellComponent: MyCellComponent,
    templateOptions: { addedDisplayValue: "123" },
  },
];

export default function App() {
  const [markedKey, setMarkedKey] = useState(1);

  const handlers: IItemEventHandlers = useMemo(() => ({
    onClick: (event, item) => item.key && setMarkedKey(item.key),
  }), []);
  return (
    <div className="App">
      <GridView
        items={TABLE_DATA}
        columns={COLUMNS}
        handlers={handlers}
        ItemComponent={MyItemComponent}
        markedKey={markedKey}
      />
    </div>
  );
}
