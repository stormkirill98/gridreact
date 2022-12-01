interface TRecord extends Record<string, any> {
  key?: number;
  a?: string;
  b?: string;
  c?: string;
}

export type TItem = Item;

export type IData = TItem[];

type TChangeCallback = (field: string, value: any) => void;

export class Item {
  private _data: Record<string, any>;
  private _onChangeCallback: TChangeCallback | null = null;

  constructor(data: Record<string, any>) {
    this._data = data;
  }

  set(field: string, value: any): void {
    this._data[field] = value;
    if (this._onChangeCallback) {
      this._onChangeCallback(field, value);
    }
  }

  get(field: string): any {
    return this._data[field];
  }

  setChangeCallback(callback: TChangeCallback): void {
    this._onChangeCallback = callback;
  }
}
