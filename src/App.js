import './App.css';
import db from './firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore"
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Test from './components/Test';

function App() {
  const dbTodoRef = collection(db, "todo")
  const [todos, setTodos] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const togglePopUp = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(dbTodoRef)
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getTodos()
  }, [todos])
  return (
    <div className="App">
      <h1 className='text-3xl font-bold'> 🚀 Todo List</h1>
      {/* <TodoForm /> */}
      {todos.map((todo) => {
        return (
          <div>
            <Todo todo={todo.task} deadline={todo.deadline} iddoc={todo.id} />
          </div>
        )
      })}
      <button className='addTaskbtn' onClick={togglePopUp}>
        <AddTaskIcon fontSize='large' />
      </button>
      {isOpen && <TodoForm handleClose={togglePopUp} />}
    </div>
  );
}

export default App;
