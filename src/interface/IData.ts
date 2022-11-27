import { TFontWeight } from "./TGeneral";

interface TRecord extends Record<string, any> {
  key?: number;
  a?: string;
  b?: string;
  c?: string;
  fontWeight?: TFontWeight;
}

export type TItem = TRecord;

export type IData = TItem[];
