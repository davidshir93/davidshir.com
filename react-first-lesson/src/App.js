import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  const [todos, setTodos] = useState([])
  return (
    <>
      <ToDoList />
      <input type="text" />
      <button>Add To Do</button>
      <button>Clear Completed To Do's</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
