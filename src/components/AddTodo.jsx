import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/todo/TodoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
     setInput("");
  }; 
  return ( 
    <>
      <div>
        <form onSubmit={addHandler}>
          <input
            className="border"
            type="text"
            placeholder="Add Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className=" ml-4 border" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
