import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getList = async () => {
      const json = await axios({
        url: "http://localhost:8090/todos",
        method: "GET",
      });
      setTodos(json.data);
      // console.log(json.data);
    };

    getList();
  }, []);

  // let getList = async () => {
  //   try {
  //     const json = await axios({
  //       url: "http://localhost:8090/todos",
  //       method: "GET",
  //     });
  //     setTodos(json.data);
  //     setLoading(false);
  //   } catch (e) {
  //     setError(e);
  //   }
  // };

  // useEffect(() => {
  //   getList();
  // }, []);

  const nextId = useRef(todos.length); //변경되도 렌더링을 안 함

  return (
    <div className="max-w-4xl m-auto">
      <TodoInput todos={todos} nextId={nextId} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
