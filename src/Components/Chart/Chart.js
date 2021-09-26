import "./Chart.css";
import { Line } from "react-chartjs-2";

const Chart = ({
  chart = {
    date: [],
    differenceC: [],
    differenceR: [],
    differenceD: []
  }
}) => {
  return (
    <div className="chart">
      <Line
        options={{
          legend: {
            display: true
          },
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                type: "time",
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 100,
                  reverse: false
                },
                time: {
                  unit: "quarter"
                }
              }
            ]
          }
        }}
        data={{
          labels: [...chart.date],
          datasets: [
            {
              label: "Nowe przypadki",
              borderColor: "#00B2FF",
              data: [...chart.differenceC],
              borderWidth: "3",
              pointRadius: "1",
              pointHoverRadius: "1",
              grace: "2000"
            },
            {
              label: "Wyleczeni",
              borderColor: "#00FF85",
              data: [...chart.differenceR],
              borderWidth: "3",
              pointRadius: "1",
              pointHoverRadius: "1",
              hidden: "true"
            },
            {
              label: "Zgony",
              borderColor: "#FF003D",
              data: [...chart.differenceD],
              borderWidth: "3",
              pointRadius: "1",
              pointHoverRadius: "1",
              hidden: "true"
            }
          ]
        }}
        type="invertedLinear"
      />
      {/* <canvas id="myChart"></canvas> */}
    </div>
  );
};

export default Chart;
