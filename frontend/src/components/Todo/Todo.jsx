import React from "react";
import { TodoItem } from "../index";
import todoList from "./Todo.json";
import "./Todo.css";

const Todo = () => {
  const [todoItems, addTodoItem] = React.useState(todoList);
  const itemRef = React.useRef();

  const AddItem = () => {
    if (itemRef.current.value) {
      const existingItems = [...todoItems];
      existingItems.push({
        id: existingItems.length + 1,
        description: itemRef.current.value,
        isComplete: false,
      });
      addTodoItem(existingItems);
      itemRef.current.value = "";
    } else {
      alert("Please enter something...");
    }
  };

  const updateItemStatus = (itemId) => {
    const todoItemsCopy = [...todoItems];
    const selectedItemIndex = todoItemsCopy.findIndex(
      (item) => item.id === itemId
    );
    todoItemsCopy[selectedItemIndex] = {
      ...todoItemsCopy[selectedItemIndex],
      isComplete: !todoItemsCopy[selectedItemIndex].isComplete,
    };
    addTodoItem(todoItemsCopy);
  };

  return (
    <div className="todo-container">
      <h1>Add Items</h1>
      <hr />
      <div className="todo-add-item">
        <input type="text" placeholder="Add items..." ref={itemRef} />
        <button type="submit" onClick={AddItem}>
          +
        </button>
      </div>
      {todoItems.map((item) => (
        <TodoItem
          key={`${item.id}-todoitem`}
          item={item}
          updateItemStatus={updateItemStatus}
        />
      ))}
    </div>
  );
};

export default Todo;
