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
      <div key={task.id}>
        <ToDoTask task={task}></ToDoTask>
      </div>
    ))}
  </>
)

export default TaskList