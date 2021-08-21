import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            {/* <h3 style={{ opacity: 0.3, display: 'inline', marginRight: '8px'}}>{task.id}</h3> */}
            <h3>
                {task.name}
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <h5>Priority: {task.priority}</h5>
        </div>
    )
}

export default Task
