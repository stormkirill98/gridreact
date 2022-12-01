import './styles.css';
import React from 'react';
import Simple from './Examples/Simple';
import MoreDataColumnsOption from './Examples/MoreDataColumnsOption';
import MoreDataWithChildren from './Examples/MoreDataWithChildren';
import RerenderByChangeField from "./Examples/RerenderByChangeField";

const EXAMPLES: any = {
   Simple: {
      example: Simple,
      title: 'Простой пример'
   },
   MoreDataColumnsOption: {
      example: MoreDataColumnsOption,
      title: 'Много записей. Колонки настроены с помощью опции columns.'
   },
   MoreDataWithChildren: {
      example: MoreDataWithChildren,
      title: 'Много записей. Колонки настроены с помощью children.'
   },
   RerenderByChangeField: {
      example: RerenderByChangeField,
      title: 'Немного записей. Перерисовка при изменении свойства записи.'
   }
}

export default function App(): React.ReactElement {
   const [Example, setExample] = React.useState(() => Simple);

   return (
      <div>
         <ExampleSelector onChangeExample={(example) => setExample(() => example)}/>
         <Example/>
      </div>
   );
}

function ExampleSelector(props: {onChangeExample: (example: React.ReactElement) => void}): React.ReactElement {
   const [selectedExample, setSelectedExample] = React.useState('Simple');

   const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
      setSelectedExample(event.target.value);
      props.onChangeExample(EXAMPLES[event.target.value].example)
   }
   return <select value={selectedExample} onChange={onChange}>
      {
         Object.keys(EXAMPLES).map((exampleKey) => (
               <option key={exampleKey} value={exampleKey} title={EXAMPLES[exampleKey].title}>
                  {exampleKey}
               </option>
            ))
      }
   </select>

}
