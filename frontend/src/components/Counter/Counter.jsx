import React from "react";
import { TextField, Button } from "@mui/material";
import "./Counter.css";

const Counter = () => {
  const [count, setCounter] = React.useState(0);

  const decrement = () => {
    setCounter((prevCount) => (prevCount === 0 ? 0 : Number(prevCount) - 1));
  };

  const increment = () => {
    setCounter((prevCount) => Number(prevCount) + 1);
  };

  const counterInputHandler = (value) => {
    setCounter(value);
  };

  return (
    <div className="counter-container">
      <Button variant="contained" onClick={decrement}>
        -
      </Button>
      <TextField
        id="counter"
        label="Quantity"
        type="number"
        value={count}
        variant="standard"
        className="counter-input"
        onChange={(e) => counterInputHandler(e.target.value)}
      />
      <Button variant="contained" onClick={increment}>
        +
      </Button>
    </div>
  );
};

export default Counter;
