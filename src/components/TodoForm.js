import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore"
import db from '../firebase'
import "../App.css"
import { TextField } from '@mui/material'


function TodoForm(props) {
    const dbTodoRef = collection(db, "todo")
    const [newTask, setnewTask] = useState("")
    // const [taskInput, settaskInput] = useState("")
    const [newDeadline, setnewDeadline] = useState("")
    // const [deadlineInput, setdeadlineInput] = useState("")
    const addTask = async (e) => {
        e.preventDefault()
        await addDoc(dbTodoRef, { task: newTask, deadline: newDeadline })
        // console.log(newDeadline);
        setnewTask("")
        setnewDeadline("")
    }
    return (
        <div className='popup-box'>
            <div className='box'>
                <form onSubmit={addTask} className='todo-form' >
                    <div className='inputs'>
                        <TextField
                            sx={{ m: 0.5, p: 0 }}
                            label="Task"
                            className='task-input'
                            size="small" variant="filled"
                            placeholder='Task...'
                            onChange={(event) => { setnewTask(event.target.value) }}
                            value={newTask} />
                        <TextField
                            sx={{ m: 0.5, p: 0 }}
                            className="date-input"
                            type="date"
                            variant="filled"
                            size="small"
                            onChange={(event) => { setnewDeadline(event.target.value) }}
                            value={newDeadline} />
                    </div>
                    <button disabled={!newTask && !newDeadline} className='font-bold bg-red-900 p-2 ml-5 rounded disabled:bg-zinc-700' type='submit'>SUBMIT</button>
                </form>
                <div className="close-icon" onClick={props.handleClose}>X</div>
            </div>
        </div>
    )
}

export default TodoForm
