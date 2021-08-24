import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

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

  // Toggle reminder
  const toggleReminder = (id) => {
    console.log('Toggle Reminder', id);
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task ));
  }

  // Add Task
  const addTask = (task) => {
    console.log('Add Task', task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask) }/>
      { setShowAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks 
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      /> ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
