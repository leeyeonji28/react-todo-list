import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import axios from "axios";

const TodoListItem = ({ todo, setTodos, index }) => {
  const { id, checked, content } = todo;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{content}</td>
      <td className="cursor-pointer">
        <div
          onClick={() => {
            alert("체크 출력 됨");
          }}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
      </td>
      <td className="edit cursor-pointer">
        <FiEdit3 />
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
