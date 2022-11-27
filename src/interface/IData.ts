import { TFontWeight } from "./TGeneral";

export interface TContents {
  a: string;
  b: string;
  c: string;
  fontWeight?: TFontWeight;
}

export type TItem = TContents;

export type IData = TItem[];
