import React from 'react'
import edit from './../todo/edit.png';
import trash from './../todo/delete.png';
import styles from './Todo.module.css'

const Todo = ({title, id, deleteTodo, editTodo}) => {
  return (
    <div className={styles.todo}>
        <p>{title}</p>
        <div style={{margin: '10px'}}>
          <button style={{border: 'none', padding: '5px'}} onClick={() => editTodo(id)}>
            <img src={edit} alt='Изменить' width={'20px'}/>
          </button>

          <button style={{border: 'none'}} onClick={() => deleteTodo(id)}>
            <img src={trash} alt='Удалить' width={'20px'}/>
          </button>

        </div>
    </div>
  )
}

export default Todo
