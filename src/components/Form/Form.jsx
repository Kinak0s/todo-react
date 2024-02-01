import React, { useState } from 'react'
import styles from './../Input/Input.module.css'
import Button from "./../Button/Button";

const Form = ({addTodo}) => {
     const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
    setValue('')
  }
  return (
    <form style={{backgroundColor: 'cadetblue', padding:'10px'}} onSubmit={handleSubmit} >
    <input 
    type='text' 
    placeholder='Что будем делать?' 
    className={styles.Input} 
    value={value} 
    onChange={(e) => setValue(e.target.value)}>
    </input>
    {(value === "") ? <Button disabled/> : <Button/>}
  </form>

  )
}

export default Form
