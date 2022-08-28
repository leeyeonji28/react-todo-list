import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdModeEditOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

const TodoListItem = ({ todo }) => {
  const { id, checked, content } = todo;
  return (
    <tr>
      <th>{id}</th>
      <td>{content}</td>
      <td>
        <div
          onClick={() => {
            alert("체크 출력 됨");
          }}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
      </td>
      <td className="edit">
        <MdModeEditOutline />
      </td>
      <td className="remove">
        <MdRemoveCircleOutline />
      </td>
    </tr>
  );
};

export default TodoListItem;
