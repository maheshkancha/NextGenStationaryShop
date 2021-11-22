import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import "./Chart.css";

const data = {
  labels: [
    "Pens",
    "Xerox Copy",
    "Colors",
    "Pouch",
    "Fevi Stick",
    "Rubber Ball",
  ],
  datasets: [
    {
      label: "Sales Report",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales Chart",
    },
  },
};

const Chart = () => {
  return (
    <div className="chart-container">
      <div>
        <Doughnut data={data} />;
      </div>
      <div>
        <Bar data={data} style={{ height: "50rem" }} options={options} />
      </div>
    </div>
  );
};

export default Chart;
