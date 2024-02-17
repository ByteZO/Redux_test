import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Features/todo/TodoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <h1>TODOS 👇</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              className=" ml-4  border "
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
