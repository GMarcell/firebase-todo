import './App.css';
import db from './firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore"
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import { Button, IconButton } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';

function App() {
  const dbTodoRef = collection(db, "todo")
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(dbTodoRef)
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getTodos()
  }, [todos])
  return (
    <div className="App">
      <h1> 🚀 Todo List</h1>
      <TodoForm />
      {todos.map((todo) => {
        return (
          <div>
            <Todo todo={todo.task} deadline={todo.deadline} iddoc={todo.id} />
          </div>
        )
      })}
      <Button variant='contained' className='addTaskbtn'>
        <AddTaskIcon fontSize='large' />
      </Button>
    </div>
  );
}

export default App;
