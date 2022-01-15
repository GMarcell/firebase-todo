import { Box, ListItem, Typography } from '@mui/material'
import React from 'react'

class Todo extends React.Component {
    render() {
        return (
            <Box sx={{ borderRadius: 1, border: 5, display: "flex", borderRadius: 16, mt: 2 }} >
                <ListItem style={{ display: "flex" }}>
                    <Box justifyContent="center" alignItems="center" >
                        <Typography variant="body1" > ✅ Task: {this.props.todo}</Typography>
                        <Typography variant="body2" > ⏰ Deadline: {this.props.deadline}</Typography>
                    </Box>
                </ListItem>
            </Box >
        )
    }
}

export default Todo
