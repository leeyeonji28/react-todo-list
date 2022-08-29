import { useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "기상",
      checked: false,
    },
    {
      id: 2,
      content: "씻기",
      checked: false,
    },
    {
      id: 3,
      content: "밥먹기",
      checked: false,
    },
  ]);
  const nextId = useRef(4); //변경되도 렌더링을 안 함

  return (
    <div className="max-w-4xl m-auto">
      <TodoInput todos={todos} nextId={nextId} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
