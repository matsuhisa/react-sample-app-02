import React, { Component } from 'react'
import { Task } from './ToDoTask'

interface TaskListProps {
  name: string
  tasks: Task[]
}

class TaskList extends Component<TaskListProps> {
  render() {
    const { name, tasks } = this.props

    return(
      <>
        <h1>{name}の一覧</h1>
        {tasks.map(task => (
          <div className={'todo-task'} key={task.id}>
            <div>{task.id}</div>
            <div>{task.subject}</div>
            <div>{task.description}</div>
          </div>
        ))}
      </>
    )
  }
}

export default TaskList