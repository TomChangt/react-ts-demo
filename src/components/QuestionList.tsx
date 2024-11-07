import React, { FC, useState } from 'react'
import { QuestionCard } from './QuestionCard'
import { produce } from 'immer'

interface QuestionProps {
  id: string
  title: string
  isPublished: boolean
}

export const QuestionList: FC = () => {
  const [questionList, setQuestionList] = useState<QuestionProps[]>([])

  function deleteQuestion(id: string) {
    setQuestionList(
      produce(draft => {
        const q = draft.find(q => q.id === id)
        if (q) {
          draft.splice(
            draft.findIndex(q => q.id === id),
            1
          )
        }
      })
    )
  }

  function publishQuestion(id: string) {
    // isPublished取反
    setQuestionList(
      produce(draft => {
        const q = draft.find(q => q.id === id)
        if (q) {
          q.isPublished = !q.isPublished
        }
      })
    )
  }

  function addQuestion() {
    const id = Math.random().toString().slice(2, 6)
    setQuestionList(
      produce(draft => {
        draft.push({ id, title: '问题' + id, isPublished: false })
      })
    )
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
