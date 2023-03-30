import React, { useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { ToDo } from './components/model';
import TodoList from './components/TodoList';

const App:React.FC = () => {
  //to specify type for useState, use  <>
  const [todo,setTodo] = useState<string>("");

  //create an array of a type or interface
  const [todos, setTodos] = useState<ToDo[]>([]);

  


  //function to add todos to state
  //we are going to add e as we want to give prevent efault. 
  //but adding e will throw error as the type is any

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(), todo:todo, isDone:false}]);
      setTodo("");
    }

  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
