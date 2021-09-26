import React, { useEffect, useState } from "react";
import Latest from './Components/LatestUpdate/LatestUpdate.js';
import Table from './Components/Table/Table.js';
import Chart from './Components/Chart/Chart.js';
import getCovidData from "./data/covidAPI.js";
import './App.css';


const App = () => {
  const [data, setData] = useState({});
  const getData = async () => {
    setData(await getCovidData());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <h1>Statystyka dotycząca koronawirusa w Polsce</h1>
      <Latest {...data} />
      <div className="DescriptionBox">
        <Table {...data} />
        <Chart {...data} />
      </div>
    </React.Fragment>
  );
};

export default App;