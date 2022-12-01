interface TRecord extends Record<string, any> {
  key?: number;
  a?: string;
  b?: string;
  c?: string;
}

export type TItem = TRecord;

export type IData = TItem[];
