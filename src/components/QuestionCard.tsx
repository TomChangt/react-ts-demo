import React, { FC } from 'react'
import './QuestionCard.css'

interface QuestionCardProps {
  id: string
  title: string
  isPublished: boolean
}

export const QuestionCard: FC<QuestionCardProps> = props => {
  const { id, title, isPublished } = props

  function edit(id: string) {
    console.log('edit', id)
  }

  return (
    <div key={id} className="question-card">
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button onClick={() => edit(id)}>编辑</button>
    </div>
  )
}
