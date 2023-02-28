import { useState,useEffect } from 'react';
import './App.css';

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
    <div className='container m-8'>
      <form className='bg-gray-400 p-3 m-2 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <input type="text" placeholder='Write a todo here...' className='shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none'/>
        <input type="button" value="Add todo" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2'/>
      </form>

      {todos.map((todo)=>(
        <div className='p-3 m-2' key={todo.id}>
          <h2 className='font-bold'>{todo.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
