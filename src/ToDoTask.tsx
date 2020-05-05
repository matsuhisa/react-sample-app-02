import React, { FC } from 'react'

import './Task.css'

export interface Task {
  id: number
  subject: string
  description: string
}

interface TaskProps {
  task: Task
}

const ToDoTask: FC<TaskProps> = ({ task }) => (
  <div className={'Task'}>
    <div>{task.id}</div>
    <div>{task.subject}</div>
    <div>{task.description}</div>
  </div>
)

export default ToDoTask