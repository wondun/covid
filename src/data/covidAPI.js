const getCovidData = async () => {
  return fetch("https://pomber.github.io/covid19/timeseries.json")
    .then((response) => response.json())
    .then((data) => {
      const { Poland } = data;
      let flaga=0;
      const chart = {
        date: [],
        differenceC: [],
        differenceCbar:[],
        differenceR: [],
        differenceD: []
      };

      const table = {
        date: [],
        confirmed: [],
        recovered: [],
        deaths: []
      };

      [...Poland]
        .reverse()
        .forEach(({ date, confirmed, recovered, deaths }, index, arr) => {
          table.date.push(date);
          if (flaga%7===0)
          chart.date.push(date);
       
          const previous = arr[index + 1] || 0;

          const differenceC = confirmed - previous.confirmed;
          table.confirmed.push({ confirmed, differenceC });
         
          if (flaga%7===0)
          chart.differenceC.push(differenceC);

          const differenceR = recovered - previous.recovered;
          table.recovered.push({ recovered, differenceR });
          
          if (flaga%7===0)
          chart.differenceR.push(differenceR);

          const differenceD = deaths - previous.deaths;
          table.deaths.push({ deaths, differenceD });
          
          if (flaga%7===0)
          chart.differenceD.push(differenceD);
          
          flaga++;
        });

      const latestState = Poland.pop();
      const previousLatestState = Poland[Poland.length - 1];

      const { date, confirmed, deaths, recovered } = latestState;
      const {
        confirmed: previousConfirmed,
        deaths: previousDeaths,
        recovered: previousRecovered
      } = previousLatestState;

      const differenceC = confirmed - previousConfirmed;
      const differenceR = recovered - previousRecovered;
      const differenceD = deaths - previousDeaths;




      return {
        date,
        confirmed,
        deaths,
        recovered,
        differenceC,
        differenceD,
        differenceR,
        chart,
        table
      };
    });
};
export default getCovidData;
