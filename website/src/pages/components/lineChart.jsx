import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  
} from "chart.js"
// import { CategoryScale, Chart } from "chart.js";
// import { Chart as ChartJS } from "chart.js/auto"
// Chart.register(CategoryScale);
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend);

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