import React from 'react'

const Tasks = ({ tasks }) => {
    return (
        <>
         {tasks.map(task => (
             <>
                <h5 style={{ opacity: 0.3 }}>{task.id}</h5>
                <h3>{task.name}</h3>
                <h5 style={{ marginBottom: '24px' }}>Priority: {task.priority}</h5>
             </>
         ))}   
        </>
    )
}

export default Tasks
