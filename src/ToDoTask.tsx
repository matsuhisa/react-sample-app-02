import React, { Component } from 'react'

export interface Task {
  id: number
  subject: string
  description: string
}

interface TaskProps {
  task: Task
}

class ToDoTask extends Component<TaskProps> {
  render() {
    const { task } = this.props

    return(
      <>
        <div className={'task'}>
          <div>{task.id}</div>
          <div>{task.subject}</div>
        </div>
      </>
    )
  }
}

export default ToDoTask