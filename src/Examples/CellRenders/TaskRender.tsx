import {ICellRenderParams} from '../../Controls/grid';
import React from 'react';

import './taskStyles.css'
import {Item} from '../../Controls/interface/IData';

interface IProps {
   item: Item;
}

function Employee(props: IProps): React.ReactElement {
   return <div className="task-employee">
      <span className="task-employee-name">{props.item.get('employeeName')}</span>
      <span className="task-employee-department">{props.item.get('employeeDepartment')}</span>
   </div>;
}

function Milestone(props: IProps): React.ReactElement {
   return <div className="task-milestone">
      <span className="task-milestone-title">{props.item.get('milestoneTitle')}</span>
      <span title="Срок: 28 декабря'22 17:50" className="task-milestone-date">{props.item.get('milestoneDate')}</span>
   </div>;
}

function Attachments(props: IProps): React.ReactElement {
   return <div className="task-attachments" >
      {
         props.item.get('attachments').map((it: string, idx: number) => <span className="task-attachment" key={idx}>{it}</span>)
      }
   </div>
}

function Type(props: IProps): React.ReactElement {
   return <span title="Ошибка" className="task-type">{props.item.get('type')}</span>
}

function Description(props: IProps): React.ReactElement {
   return <span>{props.item.get('description')}</span>
}

function OverTasks(props: IProps): React.ReactElement {
   return <div className="task-overtasks" >
      {
         props.item.get('overtasks').map((it: string, idx: number) => <span className="task-overtask" key={idx}>{it}</span>)
      }
   </div>
}

export default function TaskRender(params: ICellRenderParams): React.ReactElement {
   return <div className="task">
      <div className="task-header" >
         <Employee item={params.item}/>
         <Milestone item={params.item}/>
      </div>
      <div className="task-info" >
         <Type item={params.item}/>
         <Description item={params.item}/>
      </div>
      <Attachments item={params.item}/>
      <OverTasks item={params.item}/>
   </div>;
}
