import { Box, ListItem, Typography, IconButton } from '@mui/material'
import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import db from '../firebase'
import CloseIcon from '@mui/icons-material/Close';

function Todo({ todo, deadline, iddoc }) {
    const deleteTask = async (id) => {
        // console.log(id);
        await deleteDoc(doc(db, "todo", id))
    }
    return (
        <Box sx={{ border: 5, display: "flex", borderRadius: 16, mt: 2 }} >
            <ListItem style={{ display: "flex" }}>
                <Box justifyContent="center" alignItems="center" >
                    <Typography variant="body1" > ✅ Task: {todo}</Typography>
                    <Typography variant="body2" > ⏰ Deadline: {deadline}</Typography>
                </Box>
                <IconButton onClick={() => { deleteTask(iddoc) }}>
                    <CloseIcon />
                </IconButton>
            </ListItem>
        </Box >
    )
}

export default Todo
