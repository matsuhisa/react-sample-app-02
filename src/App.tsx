import React, { FC } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import TaskList from './TaskList'
import { Task } from './ToDoTask'

const titleStyle = css({
  boxSizing: 'border-box',
  width: 300,
  height: 200
})

const App: FC<{}> = () => {
  const name: string = 'リスト'
  const tasks: Task[] = [
    {
      id: 1,
      subject: 'タイトル',
      description: 'ようやく',
    },
    {
      id: 2,
      subject: 'タイトル123',
      description: 'ようやく',
    },
  ]

  return(
    <div data-foo={"123"} css={titleStyle}>
      <TaskList name={name} tasks={tasks}></TaskList>
    </div>
  )
}

export default App;
