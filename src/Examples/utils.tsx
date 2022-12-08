import React, {ReactElement} from 'react';
import {TRowEventHandler} from '../Controls/_grid/RowComponent';
import {TVisibility} from '../Controls/interface/TGeneral';
import {IColumnConfig} from '../Controls/_grid/ColumnConfiguration';
import {IData} from '../Controls/interface/IData';
import {generateData} from './Data';

export function useMarker(): {markedKey: string, onRowClick: TRowEventHandler} {
   const [markedKey, setMarkedKey] = React.useState<any>(null);
   const onRowClick: TRowEventHandler = (params) => setMarkedKey(params.item.get('key'));
   return {markedKey, onRowClick};
}

export function useSelection(): {selectionVisibility: TVisibility, toggleButton: ReactElement} {
   const [selectionVisibility, setSelectionVisibility] = React.useState<TVisibility>('hidden');
   const toggleSelectionVisibility = () => {
      setSelectionVisibility(selectionVisibility === 'hidden' ? 'visible' : 'hidden');
   }
   const toggleButton = <button onClick={toggleSelectionVisibility}>Toggle selection visibility</button>
   return {selectionVisibility, toggleButton};
}

export function useChangeData(): {buttons: ReactElement, onRowClick: TRowEventHandler, markedKey: string, data: IData} {
   const [data, setData] = React.useState(generateData(20));
   const [markedKey, setMarkedKey] = React.useState<any>(null);
   const [selectedColumn, setSelectedColumn] = React.useState<IColumnConfig|undefined>();

   const onRowClick: TRowEventHandler = (params) => {
      setMarkedKey(params.item.get('key'));
      setSelectedColumn(() => params.column);
   };

   const changeFields = (fields: string[]|undefined) => {
      const item = data.find((it) => it.get('key') === markedKey);
      if (item) {
         if (fields) {
            fields.forEach((property) => item.set(property, item.get(property) + '1'))
         } else {
            item.set('a', item.get('a') + '1')
            item.set('b', item.get('b') + '1')
            item.set('c', item.get('c') + '1')
            item.set('d', item.get('d') + '1')
            item.set('e', item.get('e') + '1')
         }

         setData(data.slice());
      }
   }

   const buttons = <div>
      <button onClick={() => changeFields(selectedColumn?.displayProperties)}>{`Change fields "${selectedColumn?.displayProperties?.join(', ')}" in item "${markedKey}"`}</button>
      <button onClick={() => changeFields(undefined)}>{`Change all fields in item "${markedKey}"`}</button>
   </div>;

   return {buttons, onRowClick, markedKey, data};
}
