import { IColumnConfig } from '../Controls/grid';
import {IData, TItem} from '../Controls/interface/IData';

export function generateData(count: Number): IData {
   const result: TItem[] = [];

   for (let idx = 1; idx <= count; idx++) {
      result.push({
         key: idx,
         a: `${idx}_a`,
         b: `${idx}_b`,
         c: `${idx}_c`,
         d: `${idx}_d`,
         e: `${idx}_e`
      });
   }

   return result;
}

export function generateColumns(count: number): IColumnConfig[] {
   const result: IColumnConfig[] = [];

   for (let idx = 1; idx <= count; idx++) {
      result.push({
         displayProperties: ['a'],
         width: '1fr'
      });
   }

   return result;
}
