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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
