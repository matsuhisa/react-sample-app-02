import React, { FC } from 'react'
import ToDoTask, { Task } from './ToDoTask'

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
      <ToDoTask task={task} key={task.id}></ToDoTask>
    ))}
  </>
)

export default TaskList