import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import axios from "axios";
import { useState } from "react";

const TodoListItem = ({ todo, setTodos, index }) => {
  const { id, checked, content } = todo;
  const [showModal, setShowModal] = useState(false);
  const [modicon, setModicon] = useState(content);
  return (
    <tr>
      <td></td>
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
          <label
            class="btn btn-active btn-ghost"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            <FiEdit3 />
          </label>
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          {showModal == true ? (
            <div className="w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/[.2] z-100">
              <div className="modal-box w-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    alert("할 일 수정이 완료되었습니다.");
                    const data = await axios({
                      url: `http://localhost:8090/todos/edit/${id}`,
                      method: "PATCH",
                      data: { content: modicon },
                    });
                    setTodos(data.data);
                    setShowModal(false);
                  }}
                >
                  <h3 className="mb-5 text-lg font-bold">
                    수정할 내용을 입력해 주세요.
                  </h3>
                  <input
                    type="text"
                    value={modicon}
                    className="input input-bordered w-full"
                    onChange={(e) => {
                      setModicon(e.target.value);
                    }}
                  />
                </form>
                <div className="modal-action">
                  <label
                    for="my-modal-5"
                    className="btn"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    X
                  </label>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
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
