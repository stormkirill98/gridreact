import "./styles.css";
import { ReactElement } from "react";

import {
  GridView,
  RowComponent,
  IRowComponentProps,
  CellComponent,
  ICellComponentProps,
} from "./Grid/Grid";

import { IData } from "./interface/IData";
import { IEventHandlers } from "./interface/IGeneral";
import { ICellConfig } from "./Grid/Cell/interface";

function generateData(count: Number): IData {
  const result = [];

  for (let idx = 1; idx <= count; idx++) {
    result.push({
      a: `cell_${idx}_a`,
      b: `cell_${idx}_b`,
      c: `cell_${idx}_c`,
      fontWeight: idx % 3 === 0 ? "bold" : undefined,
    });
  }

  return result;
}

function MyRowComponent(props: IRowComponentProps): ReactElement {
  return <RowComponent fontWeight={props.contents.fontWeight} />;
}

interface ICellTemplateOptions {
  addedDisplayValue: string;
}

function MyCellComponent(props: ICellComponentProps): ReactElement {
  const displayValue = "custom_" + props.contents?.c;
  return <CellComponent displayValue={displayValue} />;
}

const TABLE_DATA = generateData(10);
const COLUMNS: ICellConfig[] = [
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
  const handlers: IEventHandlers = {
    onClick: () => console.log("click on row"),
  };
  return (
    <div className="App">
      <GridView
        items={TABLE_DATA}
        columns={COLUMNS}
        handlers={handlers}
        RowComponent={MyRowComponent}
      />
    </div>
  );
}
