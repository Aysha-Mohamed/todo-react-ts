import React, { useRef } from "react";
import "./styles.css";

//todo we know the type.
//but for settodo, type is not known, go to App.tsx, hover over settodo and copy the type
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd : (e: React.FormEvent) => void;
}



const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
    <form className="input" onSubmit={(e)=>{handleAdd(e); inputRef.current?.blur()}}>
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="inputBox"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="inputSubmit">
        Goooo
      </button>
    </form>
  );
};

export default InputField;
