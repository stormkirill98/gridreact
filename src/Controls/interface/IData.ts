interface TRecord extends Record<string, any> {
  key?: number;
  a?: string;
  b?: string;
  c?: string;
}

export type TItem = Item;

export type IData = TItem[];

export class Item {
  private _data: Record<string, any>;
  private _version: number = 0;

  constructor(data: Record<string, any>) {
    this._data = data;
  }

  set(field: string, value: any): void {
    if (this._data[field] !== value) {
      this._data[field] = value;
      this._version++;
    }
  }

  get(field: string): any {
    return this._data[field];
  }

  getVersion(): number {
    return this._version;
  }
}
