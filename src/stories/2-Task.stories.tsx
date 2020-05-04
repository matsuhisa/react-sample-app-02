import React from 'react'
// import { action } from '@storybook/addon-actions'

import ToDoTask, { Task } from '../ToDoTask'

export default {
  title: 'Task',
  component: ToDoTask,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const TaskData = {
  id: 1, 
  subject: 'サブジェクトです',
  description: 'ようやくです'
}

export const Default = () => (<ToDoTask task={TaskData}></ToDoTask>)
