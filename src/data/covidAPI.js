const getCovidData = async () => {
  return fetch("https://pomber.github.io/covid19/timeseries.json")
    .then((response) => response.json())
    .then((data) => {
      const { Poland } = data;

      const chart = {
        date: [],
        confirmed: [],
        recovered: [],
        deaths: []
      };

      Poland.forEach(({ date, confirmed, recovered, deaths }) => {
        chart.date.push(date);
        chart.confirmed.push(confirmed);
        chart.recovered.push(recovered);
        chart.deaths.push(deaths);
      });

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

          const previous = arr[index + 1] || 0;
          const differenceC = confirmed - previous.confirmed;
          table.confirmed.push({ confirmed, differenceC });
          const differenceR = recovered - previous.recovered;
          table.recovered.push({ recovered, differenceR });
          const differenceD = deaths - previous.deaths;
          table.deaths.push({ deaths, differenceD });
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
