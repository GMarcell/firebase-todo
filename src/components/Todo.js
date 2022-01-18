import { IconButton } from '@mui/material'
import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import db from '../firebase'
import CloseIcon from '@mui/icons-material/Close';

function Todo(props) {
    const deleteTask = async (id) => {
        // console.log(id);
        await deleteDoc(doc(db, "todo", id))
    }
    return (
        <div sx={{ border: 5, display: "flex", borderRadius: 16, mt: 2 }} >
            <li style={{ display: "flex" }}>
                <div justifyContent="center" alignItems="center" >
                    <h2  > ✅ Task: {props.todo}</h2>
                    <h2  > ⏰ Deadline: {props.deadline}</h2>
                </div>
                <IconButton onClick={() => { deleteTask(props.iddoc) }}>
                    <CloseIcon />
                </IconButton>
            </li>
        </div>
    )
}

export default Todo
