import { Box, ListItem, Typography, IconButton } from '@mui/material'
import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import db from '../firebase'

function Todo({ todo, deadline, iddoc }) {
    return (
        <Box sx={{ borderRadius: 1, border: 5, display: "flex", borderRadius: 16, mt: 2 }} >
            <ListItem style={{ display: "flex" }}>
                <Box justifyContent="center" alignItems="center" >
                    <Typography variant="body1" > ✅ Task: {todo}</Typography>
                    <Typography variant="body2" > ⏰ Deadline: {deadline}</Typography>
                </Box>
            </ListItem>
        </Box >
    )
}

export default Todo
