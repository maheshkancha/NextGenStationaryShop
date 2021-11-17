import React from "react";
import "./TodoItem.css";

const TodoItem = ({ item, updateItemStatus }) => {
  const itemCheckHandler = () => {
    updateItemStatus(item.id);
  };

  return (
    <div className="todo-item-wrapper">
      <div className={item.isComplete ? "strikeoff" : ""}>
        {item.description}
      </div>
      <input
        type="checkbox"
        name="isComplete"
        checked={item.isComplete}
        onChange={itemCheckHandler}
      />
    </div>
  );
};

export default TodoItem;
