import React from "react";
import { TextField, Button } from "@mui/material";
import "./Counter.css";

const Counter = ({ name, value, updateCounter }) => {
  const decrement = () => {
    updateCounter({ target: { value: Number(value) - 1, name: "quantity" } });
  };

  const increment = () => {
    updateCounter({ target: { value: Number(value) + 1, name: "quantity" } });
  };

  const counterInputHandler = (e) => {
    updateCounter(e);
  };

  return (
    <div className="counter-container">
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <TextField
        name={name}
        label={name.replace(/^\w{1}/g, (letter) => letter.toUpperCase())}
        type="number"
        value={value}
        variant="standard"
        className="counter-input"
        onChange={(e) => counterInputHandler(e)}
      />
      <Button variant="contained" onClick={increment}>
        +
      </Button>
    </div>
  );
};

export default Counter;
