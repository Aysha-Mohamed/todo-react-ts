import React, { useState, useRef, useEffect } from "react";
import { ToDo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone, MdSave } from "react-icons/md";
import "./styles.css";

type Props = {
  todo: ToDo;
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, seteditTodo] = useState<string>(todo.todo);

  
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
   
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

//SET FOCUS ON THE INPUT BOX WHILE EDITING
const editRef = useRef<HTMLInputElement>(null);

useEffect(() => {
 editRef.current?.focus();
}, [edit])


  return (
    <form className="todosSingle" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
        ref={editRef}
          value={editTodo}
          onChange={(e) => {
            seteditTodo(e.target.value);
          }}
          className="todosSingleText"
        />
      ) : todo.isDone ? (
        <s className="todosSingleText">{todo.todo}</s>
      ) : (
        <span className="todosSingleText">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          {
            edit?<MdSave onClick={(e)=>{handleEdit(e,todo.id)}}/> : <MdDone />
          }
          
          
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
