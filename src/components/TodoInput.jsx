import React from "react";

const TodoInput = () => {
  return (
    <div className="mb-10">
      <div className="form-control w-full max-w-xl">
        <label className="label">
          <span className="label-text">할 일을 추가해 주세요!</span>
        </label>
        <input
          type="text"
          placeholder="add..."
          className="input input-bordered w-full max-w-xl"
        />
      </div>
    </div>
  );
};

export default TodoInput;
