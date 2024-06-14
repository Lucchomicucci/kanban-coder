import React from 'react'
import Task from '../../components/task/task'
import styles from './column.module.css'

const Column = ({ title, tareas }) => {
  return (
    <div className={styles['column']}>
      <h1>{title}</h1>
      <div>
        {tareas?.map((tarea, index) => <Task key={index} task={tarea} />)}
      </div>
    </div>
  )
}

export default Column