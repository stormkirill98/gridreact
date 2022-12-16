import './styles.css';
import React from 'react';
import CustomContext from './examples/CustomContext';
import ColumnConfigRenderProps from './examples/ColumnConfigRenderProps';
import GridGetCellRenderProps from './examples/GridGetCellRenderProps';
import ColumnConfigGetRenderProps from './examples/ColumnConfigGetRenderProps';

export default function App() {
   return (
      <div className="App">
         <CustomContext />
         <ColumnConfigRenderProps />
         <GridGetCellRenderProps />
         <ColumnConfigGetRenderProps />
      </div>
   );
}
