import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import { store } from "./Store/Stroe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" flex justify-center items-center flex-col  h-screen w-screen  border">
      <div>
        <Provider store={store}>
          <h1>Redux Toolkit</h1>
          <AddTodo />
          <Todo />
        </Provider>
      </div>
    </div>
  );
}

export default App;
