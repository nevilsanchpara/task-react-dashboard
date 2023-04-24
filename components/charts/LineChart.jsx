import React from "react";
import {Line} from "react-chartjs-2";

const LineChart = () => {
  const lineData = {
    labels: [
      "m",
      "a",
      "b",
      "c",
      "d",
      "e",
      "a",
      "b",
      "m",
      "a",
      "b",
      "c",
      "d",
      "e",
      "a",
    ],
    datasets: [
      {
        data: [30, 34, 36, 32, 34, 28, 32, 24, 25, 32, 30, 33, 31, 28, 30],
        borderColor: "#5146DF",
        fill: true,
        pointRadius: 0,
        backgroundColor: "#EEEDFB",
      },
    ],
  };
  const lineOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        min: 20,
        max: 40,
        ticks: {
          display: false,
          beginAtZero: true,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  return <Line options={lineOptions} data={lineData} className='mt-5' />;
};

export default LineChart;
