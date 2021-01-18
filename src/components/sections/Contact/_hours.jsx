import React from "react";
import { Assets } from "../../../App";
import { today } from "../../../utils";

function Hours({ hours }) {
  return (
    <div id="hours">
      {hours.map((item) => {
        const classes = today.day === item.day ? "today" : null;
        return (
          <React.Fragment key={item.day}>
            <span className={classes}>{item.day}</span>
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
      return <Hours hours={config.hours || []} />;
    }}
  </Assets.Consumer>
);
