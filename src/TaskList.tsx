import React, { Component } from 'react'

export interface Task {
  id: number
  subject: string
  description: string
}

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
        <div>
          {tasks.map(task => (
            <>
              <div>{task.id}</div>
              <div>{task.subject}</div>
              <div>{task.description}</div>
            </>
          ))}
        </div>
      </>
    )
  }
}

export default TaskList