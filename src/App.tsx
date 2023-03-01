import { useState,useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

interface Itodo{
  userId:number,
  id:number,
  title:string,
  completed:Boolean
}

function App() {

  const [todos, setTodos] = useState<Itodo[]>([])

  useEffect(()=> {
    const getTodos = async() =>  {
      const res = await fetch('http://localhost:5000/todos');
      const data = await res.json()
      console.log(data);
      setTodos(data);
    }
    getTodos();
    
  }, [])

  return (
    <div className='container p-8 flex flex-col items-start'>
      <TodoForm/>

      {todos.map((todo)=>(
        <Todos todo={todo}/>
      ))}

    </div>
  );
}

export default App;
