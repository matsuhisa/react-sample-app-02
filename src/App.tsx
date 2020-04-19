import React, { Component } from 'react'
import TaskList, { Task } from './TaskList'

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
