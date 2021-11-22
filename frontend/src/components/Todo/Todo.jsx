import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./Todo.css";

const todoList = [
  {
    id: 1,
    description: "Due Rs. 250 on Ganesh for taking 2 sets xerox.",
    isComplete: false,
  },
  {
    id: 2,
    description: "Create visual chart report for Sales",
    isComplete: false,
  },
  {
    id: 3,
    description: "Create Dashboard page",
    isComplete: true,
  },
  {
    id: 4,
    description: "Link frontend with backend",
    isComplete: true,
  },
  {
    id: 5,
    description: "Add toast messages for notification",
    isComplete: false,
  },
  {
    id: 6,
    description: "Generate PDF report",
    isComplete: false,
  },
  {
    id: 7,
    description: "Work on Next Gen Stationary Shop App",
    isComplete: false,
  },
];

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
      <h1>Add Checklist</h1>
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
