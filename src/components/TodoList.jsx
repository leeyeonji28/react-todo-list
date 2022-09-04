import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <td></td>
              <th>ID</th>
              <th>할 일</th>
              <th>완료 상태</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <TodoListItem
                todo={todo}
                key={index}
                setTodos={setTodos}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
