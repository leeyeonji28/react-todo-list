import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
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

        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-3xl">
            <form
              onSubmit={(e) => {
                // e.preventDefault();
                alert("제출");
              }}
            >
              <h3 className="mb-5 text-lg">수정할 내용을 입력해 주세요.</h3>
              <input
                type="text"
                placeholder="수정할 내용를 입력해 주세요."
                className="input input-bordered w-full"
              />
            </form>
            <div className="modal-action">
              <label for="my-modal-5" className="btn">
                X
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
