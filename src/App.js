import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="max-w-4xl m-auto">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
