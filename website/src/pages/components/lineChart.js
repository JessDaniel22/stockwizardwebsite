// ./components/LineChart.js

import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ labels, data, companyName }) => {
  const chartData = {



    labels: labels,
    datasets: [
      {
        label: companyName,
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
