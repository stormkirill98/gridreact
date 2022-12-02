import { IColumnConfig } from '../Controls/grid';
import {IData, Item, TItem} from '../Controls/interface/IData';

function getTaskData(): Record<string, any> {
   return {
      employeeName: 'Шабаров Георгий',
      employeeDepartment: 'Тестирование каталогов',
      milestoneTitle: '23.1100 online/inside (23.1000 Platforma)',
      milestoneDate: '28 дек',
      attachments: [
         'АвтоматическийСкриншот.png',
         'test-online-28-11-2022_17-49-17-329.sbislogz',
         'test-online-28-11-2022_17-49-17-329.sbisconsole'
      ],
      type: 'Ошибка',
      description: 'Новый список. При раскрытии раздела по треугольнику - ошибка в консоль Как повторить:&nbsp;ФР:&nbsp; ошибка:hooks.js:649 CONTROL ERROR:&nbsp; Первый аргумент undefined имеет не поддерживаемый тип',
      overtasks: [
         'Проект разработки: Настройки иерархического списка и реестр каталога',
         'Проект разработки: Настройки иерархического списка и реестр каталога'
      ]
   }
}

export function generateData(count: Number): IData {
   const result: TItem[] = [];

   for (let idx = 1; idx <= count; idx++) {
      result.push(new Item({
         key: idx,
         a: `${idx}_a`,
         b: `${idx}_b`,
         c: `${idx}_c`,
         d: `${idx}_d`,
         e: `${idx}_e`,
         ...getTaskData()
      }));
   }

   return result;
}

export function generateColumns(count: number): IColumnConfig[] {
   const result: IColumnConfig[] = [];

   for (let idx = 1; idx <= count; idx++) {
      result.push({
         displayProperties: ['a'],
         width: '1fr'
      });
   }

   return result;
}
