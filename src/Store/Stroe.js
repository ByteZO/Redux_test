import { configureStore } from "@reduxjs/toolkit";
import todoReducres from "../Features/todo/TodoSlice";

export const store = configureStore({
  reducer: todoReducres,
});
