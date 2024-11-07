import React, { FC } from 'react'
import './QuestionCard.css'

interface QuestionCardProps {
  id: string
  title: string
  isPublished: boolean
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}

export const QuestionCard: FC<QuestionCardProps> = props => {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props

  function edit(id: string) {
    console.log('edit', id)
  }
  function deleteQuestionHandler(id: string) {
    deleteQuestion?.(id)
  }
  function publishQuestionHandler(id: string) {
    publishQuestion?.(id)
  }

  return (
    <div key={id} className="question-card">
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button onClick={() => edit(id)}>编辑</button>
      &nbsp;
      <button onClick={() => deleteQuestionHandler(id)}>删除</button>
      &nbsp;
      <button onClick={() => publishQuestionHandler(id)}>{isPublished ? '下线' : '发布'}</button>
    </div>
  )
}
