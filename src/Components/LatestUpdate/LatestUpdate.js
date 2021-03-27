import React from "react";
import "./LatestUpdate.css";

const Latest = (props) => {
  return (
    <div className="latest">
      <div className="dateDiv">
        Stan na dzień: <span className="date">{props.date}</span>
      </div>
      <div className="todayBox todayConfirmedBox">
        Zakażeni
        <div className="todayInfo todayConfirmedInfo">
          {props.confirmed} (+{props.differenceC})
        </div>
      </div>
      <div className="todayBox todayRecoveredBox">
        Wyleczeni
        <div className="todayInfo todayRecoveredInfo">
          {props.recovered} (+{props.differenceR})
        </div>
      </div>
      <div className="todayBox todayDeadBox">
        Zgony
        <div className="todayInfo todayDeadInfo">
          {props.deaths} (+{props.differenceD})
        </div>
      </div>
    </div>
  );
};

export default Latest;
