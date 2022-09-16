import React from "react";
import { Assets } from "../../../App";
import { defaultHours } from "../../../utils";

function Hours({ hours }) {
  const today = hours[new Date().getDay()];

  return (
    <div id="hours">
      {hours.map((item) => {
        const classes = today.day === item.day ? "today" : null;
        return (
          <React.Fragment key={item.day}>
            <span style={{ textAlign: "left" }} className={classes}>
              {item.day}
            </span>
            <span className={classes}>{item.isClosed ? null : item.open}</span>
            <span className={classes}>{item.isClosed ? null : "-"}</span>
            <span className={classes}>
              {item.isClosed ? "Closed" : item.close}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default () => (
  <Assets.Consumer>
    {(config) => {
      return <Hours hours={config.hours || defaultHours} />;
    }}
  </Assets.Consumer>
);
