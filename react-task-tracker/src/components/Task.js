import React from 'react'

const Task = ({ id, name, priority, reminder }) => {
    return (
        <div className='task'>
            <h5 style={{ opacity: 0.3 }}>{id}</h5>
            <h3>{name}</h3>
            <h5 style={{ marginBottom: '24px' }}>Priority: {priority}</h5>
        <div/>
    )
}

export default Tasks
