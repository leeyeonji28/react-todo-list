import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import axios from "axios";

const TodoListItem = ({ todo, setTodos, index }) => {
  const { id, checked, content } = todo;
  return (
    <tr>
      <th>{index + 1}</th>
      {checked ? (
        <td className="line-through text-gray-400">{content}</td>
      ) : (
        <td>{content}</td>
      )}
      <td className="cursor-pointer">
        <div
          onClick={async () => {
            // js방식
            // setTodos((todos) => todos.map((todo, index) => todo.id === id ? {...todo, checked : !todo.checked} : todo))
            const data = await axios({
              url: `http://localhost:8090/todos/${id}`,
              method: "PATCH",
            });
            setTodos(data.data);
          }}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
      </td>
      <td className="edit cursor-pointer">
        <div for="my-modal-5">
          <label for="my-modal-5" class="btn btn-active btn-ghost">
            <FiEdit3 />
          </label>
        </div>
      </td>
      <td className="remove cursor-pointer">
        <div
          // 배열에 담아서 삭제
          // onClick={() => {
          //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
          // }}
          onClick={async () => {
            const data = await axios({
              url: `http://localhost:8090/todos/${id}`,
              method: "DELETE",
            });
            setTodos(data.data);
          }}
        >
          <FiTrash2 />
        </div>
      </td>
    </tr>
  );
};

export default TodoListItem;
