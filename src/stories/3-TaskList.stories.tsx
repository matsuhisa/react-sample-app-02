import React from 'react'

import TaskLst from '../TaskList'
import { TaskData } from './2-Task.stories'

export default {
  title: 'TaskList',
  component: TaskLst,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const tasks = [
  {...TaskData, id: 1, subject: 'サブジェクトですよ1'},
  {...TaskData, id: 2, subject: 'サブジェクトですよ2'},
  {...TaskData, id: 3, subject: 'サブジェクトですよ3'},
]

export const Default = () => (<TaskLst name={'タスク'} tasks={tasks}></TaskLst>)
