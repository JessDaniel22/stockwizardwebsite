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
        backgroundColor: "#1fd655",
        borderColor: "#1fd655",
        pointRadius: 0,
        data: data,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} dot={false}/>
    </div>
  );
};

export default LineChart;