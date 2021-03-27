import "./Chart.css";
import { Line } from "react-chartjs-2";

const Chart = ({
    chart = {
      date: [],
      confirmed: [],
      recovered: [],
      deaths: []
    }
  }) => {
    return (
      <div className="chart">
        <Line
          options={{
            legend: {
              display: false
            },
            maintainAspectRatio: false
          }}
          data={{
            labels: [...chart.date],
            datasets: [
              {
                label: "Zakażeni",
                borderColor: "#00B2FF",
                data: [...chart.confirmed],
                borderWidth: "3",
                pointRadius: "false"
              },
              {
                label: "Wyleczeni",
                borderColor: "#00FF85",
                data: [...chart.recovered],
                borderWidth: "3",
                pointRadius: "false"
              },
              {
                label: "Zgony",
                borderColor: "#FF003D",
                data: [...chart.deaths],
                borderWidth: "3",
                pointRadius: "false"
              }
            ]
          }}
          type="line"
        />
        {/* <canvas id="myChart"></canvas> */}
      </div>
    );
  };

  export default Chart;
