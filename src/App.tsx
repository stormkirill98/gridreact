import './styles.css';
import React from 'react';
import RerenderByContext from './examples/RerenderByContext';
import RerenderByColumnRenderProps from './examples/RerenderByColumnRenderProps';

export default function App() {
   return (
      <div className="App">
         <RerenderByContext />
         <RerenderByColumnRenderProps />
      </div>
   );
}
