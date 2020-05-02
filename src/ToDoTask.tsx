import React, { FC } from 'react'

export interface Task {
  id: number
  subject: string
  description: string
}

interface TaskProps {
  task: Task
}

const ToDoTask: FC<TaskProps> = ({ task }) => (
  <>
    <div className={'task'}>
      <div>{task.id}</div>
      <div>{task.subject}</div>
      <div>{task.description}</div>
    </div>
  </>
)

export default ToDoTask