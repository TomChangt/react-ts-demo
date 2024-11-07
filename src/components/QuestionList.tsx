import React, { FC, useState } from 'react'
import { QuestionCard } from './QuestionCard'

interface QuestionProps {
  id: string
  title: string
  isPublished: boolean
}

export const QuestionList: FC = () => {
  const [questionList, setQuestionList] = useState<QuestionProps[]>([])

  function deleteQuestion(id: string) {
    setQuestionList(questionList.filter(q => q.id !== id))
  }

  function publishQuestion(id: string) {
    // isPublished取反
    setQuestionList(
      questionList.map(q => (q.id === id ? { ...q, isPublished: !q.isPublished } : q))
    )
  }

  function addQuestion() {
    const id = Math.random().toString().slice(2, 6)
    setQuestionList([...questionList, { id, title: '问题' + id, isPublished: false }])
  }

  return (
    <div>
      <h1>问卷调查</h1>
      <div>
        {questionList.map(q => (
          <QuestionCard
            key={q.id}
            {...q}
            deleteQuestion={deleteQuestion}
            publishQuestion={publishQuestion}
          />
        ))}
        <button onClick={addQuestion}>添加问卷</button>
      </div>
    </div>
  )
}
