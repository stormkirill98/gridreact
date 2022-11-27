import "./styles.css";
import { ReactElement } from "react";

import {
  GridView,
  RowComponent,
  IRowComponentProps,
  CellComponent,
  ICellComponentProps
} from "./Grid/Grid";

import { IData } from "./interface/IData";

function generateData(count: Number): IData {
  const result = [];

  for (let idx = 1; idx <= count; idx++) {
    result.push({ a: `cell_${idx}_a`, b: `cell_${idx}_b`, c: `cell_${idx}_c` });
  }

  return result;
}

function MyRowComponent(props: IRowComponentProps): ReactElement {
  // TODO получить рекорд
  return <RowComponent fontWeight="bold" />;
}

function MyCellComponent(props: ICellComponentProps): ReactElement {
  // TODO как-то нужно все опции прокидывать, а здесь будут настраивать только нужные,
  // остальные мы будем по контексту прокидывать. Аналогично MyRowComponent
  // Еще нужно прокинуть column(config)
  return <CellComponent displayValue={"custom_" + props.contents.c} />;
}

const TABLE_DATA = generateData(10);
const COLUMNS = [
  { width: "1fr", displayProperty: "a" },
  { width: "1fr", displayProperty: "b" },
  { width: "1fr", displayProperty: "c", CellComponent: MyCellComponent }
];

export default function App() {
  return (
    <div className="App">
      <GridView
        items={TABLE_DATA}
        columns={COLUMNS}
        RowComponent={MyRowComponent}
      />
    </div>
  );
}
