import React, { useEffect, useState } from 'react'
import styles from './Wrapper.module.css'
import Todo from '../todo/Todo';
import EditTodo from '../Edit/EditTodo';
import Form from '../Form/Form';
import { v4 as uuidv4 } from 'uuid';




const Wrapper = () => {
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = todo => {
    const newTodo = { id: uuidv4(), title: todo, isEditing: false };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const editTodo = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    );
  };

  const editTask = (title, id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, title, isEditing: !todo.isEditing } : todo))
    );
  };

  return (
    <div className={styles.Wrapper}>
      <h1>Todo Solo</h1>
      <Form addTodo = {addTodo}/>
      {todos.map((todo) => (
        todo.isEditing 
        ? <EditTodo editTodo={editTask} title={todo}/> 
        : (<Todo title = {todo.title} key = {todo.id} id = {todo.id} deleteTodo = {deleteTodo} editTodo = {editTodo}/>)
      ))}
    </div>
  )
}

export default Wrapper
