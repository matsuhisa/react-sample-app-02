import React from 'react'
// import { action } from '@storybook/addon-actions'

import ToDoTask, { Task } from '../ToDoTask'

export default {
  title: 'Task',
  component: ToDoTask,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => {
  const task: Task = { id: 1, subject: 'foo', description: 'bar' }

  return (
    <>
      <ToDoTask task={task}></ToDoTask>
    </>
  )

}
