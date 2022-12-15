import {ICellContentRenderProps, IColumnConfig} from '../grid';
import React from 'react';

export function generateData(count: Number): Record<string, string>[] {
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

export function generateColumns(cellRender?: React.FunctionComponent<ICellContentRenderProps>): IColumnConfig[] {
   return [
      { width: "1fr", dependentProperties: ["a"] },
      { width: "1fr", dependentProperties: ["b"] },
      { width: "1fr", dependentProperties: ["c", 'd'], render: cellRender },
   ]
}