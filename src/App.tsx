import React, { Component } from 'react'
import TaskList from './TaskList'
import { Task } from './ToDoTask'

class App extends Component {
  render() {
    const name: string = 'タスク'
    const tasks: Task[] = [
      {
        id: 1,
        subject: 'タイトル1',
        description: 'タスクについて'
      },
      {
        id: 2,
        subject: 'タイトル2',
        description: 'タスクについて'
      },
    ]

    return (
      <div>
        <TaskList name={name} tasks={tasks}></TaskList>
      </div>
    );
  }
}

export default App;
