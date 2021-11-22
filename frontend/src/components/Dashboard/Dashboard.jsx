import React from "react";
import Chart from "../Chart/Chart";
import Todo from "../Todo/Todo";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="main-content">
      <div className="chart-section">
        <Chart />
      </div>
      <div className="todo-section">
        <Todo />
      </div>
    </div>
  );
};

export default Dashboard;
