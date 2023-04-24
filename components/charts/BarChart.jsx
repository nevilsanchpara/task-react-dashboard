import React from "react";
import {Bar} from "react-chartjs-2";

const BarChart = () => {
  const barChartData = {
    labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
    datasets: [
      {
        data: [3, 6, 4, 3, 7, 4, 7, 3],
        backgroundColor: "#2C70F5",
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
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
  };

  return (
    <Bar data={barChartData} options={barChartOptions} className='w-fit' />
  );
};

export default BarChart;
