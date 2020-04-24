import React, { FC } from 'react'
import TaskList from './TaskList'
import { Task } from './ToDoTask'

const App: FC<{}> = () => {
  const name: string = 'リスト'
  const tasks: Task[] = [
    {
      id: 1,
      subject: 'タイトル',
      description: 'ようやく',
    },
    {
      id: 2,
      subject: 'タイトル123',
      description: 'ようやく',
    },
  ]

  return(
    <div>
      <TaskList name={name} tasks={tasks}></TaskList>
    </div>
  )
}

export default App;
