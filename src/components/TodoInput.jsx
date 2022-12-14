import axios from "axios";
import React, { useState } from "react";

const TodoInput = ({ todos, nextId, setTodos }) => {
  const [value, setValue] = useState("");
  return (
    <div className="mb-10">
      <div className="form-control w-full max-w-xl">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            // const todo = { id: nextId.current, content: value, checked: false };
            // setTodos((prev) => prev.concat(todo));
            const json = await axios({
              url: "http://localhost:8090/todos",
              method: "POST",
              data: { content: value },
            });
            setTodos(json.data);
            nextId.current++;
          }}
        >
          <label className="label">
            <span className="label-text">할 일을 추가해 주세요!</span>
          </label>
          <input
            type="text"
            placeholder="add..."
            className="input input-bordered w-full max-w-xl"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
