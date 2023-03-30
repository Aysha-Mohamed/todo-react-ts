import React from 'react'
import './styles.css'
import { ToDo } from './model'
import SingleTodo from './SingleTodo';

interface Props{
    todos: ToDo[];
    setTodos:  React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
        {todos.map(todo=>
           <SingleTodo todo={todo} todos={todos} setTodos={setTodos}/>  
        )}
    </div>
  )
}

export default ToDoList