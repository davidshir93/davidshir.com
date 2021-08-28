import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [name, setName] = useState('')
    const [priority, setPriority] = useState(1)
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert('Please enter a name');
            return
        }

        onAdd({name, priority, reminder });

        setName('');
        setPriority(1);
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task:</label>
                <input type="name" placeholder="Add a New Task" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Priority:</label>
                <input type="Number" placeholder="1" value={priority} onChange={(e) => setPriority(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder:</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>           
                <input type="submit" value="Save Task" className="btn btn-block" backgroundColor="green" />
        </form>
    )
}
export default AddTask
