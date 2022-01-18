import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore"
import db from '../firebase'
import "../App.css"


function TodoForm() {
    const dbTodoRef = collection(db, "todo")
    const [newTask, setnewTask] = useState("")
    const [taskInput, settaskInput] = useState("")
    const [newDeadline, setnewDeadline] = useState("")
    const [deadlineInput, setdeadlineInput] = useState("")
    const addTask = async (e) => {
        e.preventDefault()
        await addDoc(dbTodoRef, { task: newTask, deadline: newDeadline })
        // console.log(newDeadline);
        setnewTask("")
        setnewDeadline("")
    }
    return (
        <form onSubmit={addTask} className='todo-form' >
            <div className='inputs'>
                <input
                    sx={{ m: 0.5, p: 0 }}
                    className='task-input'
                    size="small" variant="filled"
                    placeholder='Task...'
                    onChange={(event) => { setnewTask(event.target.value) }}
                    value={newTask} />
                <input
                    sx={{ m: 0.5, p: 0 }}
                    className="date-input"
                    type="date"
                    variant="filled"
                    size="small"
                    onChange={(event) => { setnewDeadline(event.target.value) }}
                    value={newDeadline} />
            </div>
            <button disabled={!newTask && !newDeadline} sx={{ m: 2 }} variant="contained" type='submit'>SUBMIT</button>
        </form>
    )
}

export default TodoForm
