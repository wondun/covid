import React from "react";
import "./Table.css";

const Table = ({
  table = {
    date: [],
    confirmed: [],
    recovered: [],
    deaths: []
  }
}) => {
  const {
    date,
    confirmed: confirmedData,
    recovered: recoveredData,
    deaths: deathsData
  } = table;
  return (
    <div className="table">
      <table>
         <thead>
        <tr className="tableHeader">
          <th>Data</th>
          <th className="tableConfirmed">Zakażeni</th>
          <th className="tableRecovered">Wyleczeni</th>
          <th className="tableDead">Zgony</th>
        </tr>
        </thead>

        {date.map((date, index) => {
          const { confirmed, differenceC } = confirmedData[index];
          const { deaths, differenceD } = deathsData[index];
          const { recovered, differenceR } = recoveredData[index];
          return (
            <tbody key ={index}>
            <tr>
              <td> {date} </td>
              <td>
                {confirmed} &nbsp; (+{differenceC})
              </td>
              <td>
                {recovered} &nbsp; (+{differenceR})
              </td>
              <td>
                {deaths} &nbsp; (+{differenceD})
              </td>
            </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
