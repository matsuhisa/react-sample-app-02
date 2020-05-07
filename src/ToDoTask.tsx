import React, { FC } from 'react'

import styled from 'styled-components'
// import './Task.css'

export interface Task {
  id: number
  subject: string
  description: string
}

interface TaskProps {
  task: Task
}

const ToDoTask: FC<TaskProps> = ({ task }) => (
  <Task className={'Task'}>
    <div>{task.id}</div>
    <div>{task.subject}</div>
    <div>{task.description}</div>
  </Task>
)

const Task = styled.div`
  border: 1px solid red;
  padding: .4em;

  &:hover {
    background-color: blue;
  }

  & + & {
    margin-top: 2em;
  }
`

export default ToDoTask