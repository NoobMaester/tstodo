import React from 'react'

interface TodosProps{
  todo: any
}

const Todos = ({todo}:TodosProps) => {
  return (
    <div className='p-3 m-2' key={todo.id}>
      <h2 className='text-white font-mono font-bold border-b-2'>{todo.title}</h2>
    </div>
  )
}

export default Todos;