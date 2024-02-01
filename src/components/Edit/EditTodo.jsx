import React, { useState } from 'react'
import styles from './../Input/Input.module.css'
import Button from "./../Button/Button";

const EditTodo = ({editTodo, title}) => {
     const [value, setValue] = useState(title.title);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, title.id)
  }
  return (
    <form style={{backgroundColor: 'cadetblue', padding:'10px'}} onSubmit={handleSubmit} >
    <input 
    type='text' 
    placeholder='Обновить задание' 
    className={styles.Input} 
    value={value} 
    onChange={(e) => setValue(e.target.value)}>
    </input>
    <Button/>
  </form>

  )
}

export default EditTodo
