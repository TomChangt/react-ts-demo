import React, { FC } from 'react'
import { QuestionCard } from './QuestionCard'

export const QuestionList: FC = () => {
  const questionList = [
    { id: '1', title: '问题1', isPublished: true },
    { id: '2', title: '问题2', isPublished: false },
    { id: '3', title: '问题3', isPublished: false },
  ]

  return (
    <div>
      <h1>问卷调查</h1>
      <div>
        {questionList.map(q => (
          <QuestionCard key={q.id} {...q} />
        ))}
      </div>
    </div>
  )
}
