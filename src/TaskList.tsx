import React, { FC } from 'react'
import { Task } from './ToDoTask'

interface TaskListProps {
  name: string
  tasks: Task[]
}

const TaskList: FC<TaskListProps> = ({
  name, tasks
}) => (
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

export default TaskList