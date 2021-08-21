import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {

  const [tasks, setTasks] = useState([
    { 
        id: 1,
        name: 'Learn React',
        priority: 1,
        reminder: true,
    },
    { 
        id: 2,
        name: 'Go To The Gym',
        priority: 1,
        reminder: true,
    },
    { 
        id: 3,
        name: 'Meet the love of your life',
        priority: 2,
        reminder: false,
    },
  ])

  // Delete Tasks
  const deleteTask = (id) => {
    console.log('Delete Task', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
      <Tasks 
        tasks={tasks}
        onDelete={deleteTask}
      /> ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
