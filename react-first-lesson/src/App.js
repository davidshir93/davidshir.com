import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) { setTodos(storedTodos) };
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.done = !todo.done;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') { return }
    todoNameRef.current.value = null;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, done: false }]
    })
  }

  function handleClearDones() {
    const newTodos = todos.filter(todo => !todo.done);
    setTodos(newTodos)
  }

  return (
    <>
      <ToDoList todos = {todos} toggleTodo = {toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add To Do</button>
      <button onClick={handleClearDones}>Clear Completed To Do's</button>
      <div>{todos.filter(todo => !todo.done).length} left to do</div>
    </>
  );
}

export default App;
