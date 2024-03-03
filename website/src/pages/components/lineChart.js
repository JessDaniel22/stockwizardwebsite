// ./components/LineChart.js

import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Company xxxx",
        backgroundColor: "06132C",
        borderColor: "ECECEC",
        data: data,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
