import "./styles.css";
import React from 'react';
import {Grid, ICellContentRenderProps, IColumnConfig } from "./grid";

function generateData(count: Number): Record<string, string>[] {
   const result: Record<string, string>[] = [];

   for (let idx = 1; idx <= count; idx++) {
      result.push({
         key: `${idx}`,
         a: `cell_${idx}_a`,
         b: `cell_${idx}_b`,
         c: `cell_${idx}_c`,
         d: `cell_${idx}_d`,
         e: `cell_${idx}_e`
      });
   }

   return result;
}

const TABLE_DATA = generateData(10);
const COLUMNS: IColumnConfig[] = [
   { width: "1fr", dependentProperties: ["a"] },
   { width: "1fr", dependentProperties: ["b"] },
   { width: "1fr", dependentProperties: ["c", 'd'], render: CustomCellRender },
];

function CustomCellRender(props: ICellContentRenderProps): React.ReactElement {
   return (
      <div>
         {`${props.item.c} ${props.item.d}`}
      </div>
   );
}

export default function App() {
   return (
      <div className="App">
         <Grid keyProperty={'key'} items={TABLE_DATA} columns={COLUMNS} />
      </div>
   );
}
