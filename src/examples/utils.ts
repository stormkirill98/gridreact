import {IColumnConfig, TCellRender} from '../grid';

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

export function generateColumns(cellRender?: TCellRender<CustomCellProps>,
                                cellRenderProps?: CustomCellProps): IColumnConfig<CustomCellProps>[] {
   return [
      { width: "1fr", displayProperty: ["a"] },
      { width: "1fr", displayProperty: ["b"] },
      { width: "1fr", displayProperty: ["c", 'd'], render: cellRender, renderProps: cellRenderProps },
   ]
}

export interface CustomCellProps {
   displayButton: boolean;
}
export const DEFAULT_CUSTOM_CELL_PROPS = {displayButton: false};
