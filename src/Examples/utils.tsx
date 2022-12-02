import React, {ReactElement} from 'react';
import {TRowEventHandler} from '../Controls/_grid/RowComponent';
import {TVisibility} from '../Controls/interface/TGeneral';
import {IColumnConfig} from '../Controls/_grid/ColumnConfiguration';

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
