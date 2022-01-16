import { Box, ListItem, Typography } from '@mui/material'
import { deleteDoc, doc, getDoc } from 'firebase/firestore'
import React from 'react'
import db from '../firebase'

function Todo({ todo, deadline, iddoc }) {
    const deleteTask = async (id) => {
        console.log(id);
        await deleteDoc(doc(db, "todo", id))
    }
    return (
        <Box sx={{ borderRadius: 1, border: 5, display: "flex", borderRadius: 16, mt: 2 }} >
            <ListItem style={{ display: "flex" }}>
                <Box justifyContent="center" alignItems="center" >
                    <Typography variant="body1" > ✅ Task: {todo}</Typography>
                    <Typography variant="body2" > ⏰ Deadline: {deadline}</Typography>
                    <button onClick={() => { deleteTask(iddoc) }}>HAPUS</button>
                </Box>
            </ListItem>
        </Box >
    )
}

export default Todo
