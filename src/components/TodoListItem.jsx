import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

const TodoListItem = ({ todo }) => {
  const { id, checked, content } = todo;
  return (
    <tr>
      <th>{id}</th>
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
        <FiTrash2 />
      </td>
    </tr>
  );
};

export default TodoListItem;
