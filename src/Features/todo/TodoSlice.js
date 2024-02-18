import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    {
      id: 1,
      text: "yoyo",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const { id, newtext } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo.text) todo.text = newtext;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

const todoReducres = todoSlice.reducer;

export default todoReducres;
