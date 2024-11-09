import React, { FC } from 'react'
import styles from './QuestionCard.module.scss'

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
    <div key={id} className={styles['question-card']}>
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? <span className={styles['published-span']}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button onClick={() => edit(id)}>编辑</button>
      &nbsp;
      <button onClick={() => deleteQuestionHandler(id)}>删除</button>
      &nbsp;
      <button onClick={() => publishQuestionHandler(id)}>{isPublished ? '下线' : '发布'}</button>
    </div>
  )
}
