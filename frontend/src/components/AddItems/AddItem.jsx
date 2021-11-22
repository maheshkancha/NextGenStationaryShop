import React from "react";

const AddItem = ({ addItemHandler }) => {
  const [value, setValue] = React.useState("");

  const sendValue = () => {
    const enteredValue = document.querySelector("#add-item-input").value;
    addItemHandler(enteredValue);
  };

  return (
    <div className="todo-add-item">
      <input
        id="add-item-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Add items..."
      />
      <button type="submit" onClick={sendValue}>
        +
      </button>
    </div>
  );
};

export default AddItem;
