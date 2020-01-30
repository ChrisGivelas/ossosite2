import React from "react";

const date = new Date();

const daysOfWeek = ["Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const hours = [
    {day: "Monday", isClosed: true},
    {day: "Tuseday", open: "9am", close: "5:30pm"},
    {day: "Wednesday", open: "9am", close: "5:30pm"},
    {day: "Thursday", open: "9am", close: "8:00pm"},
    {day: "Friday", open: "9am", close: "5:30pm"},
    {day: "Saturday", open: "9am", close: "5:30pm"},
    {day: "Sunday", isClosed: true}
];

const currentDay = (function() {
    const day = date.getDay();
    if (day - 1 < 0) return "Sunday";
    else {
    }
    return daysOfWeek[day - 1];
})();

function Hours() {
    return (
        <div id="hours">
            {hours.map(item => {
                const classes = currentDay === item.day ? "today" : null;
                return (
                    <React.Fragment key={item.day}>
                        <span className={classes}>{item.day}</span>
                        <span className={classes}>{item.isClosed ? null : item.open}</span>
                        <span className={classes}>{item.isClosed ? null : "-"}</span>
                        <span className={classes}>{item.isClosed ? "Closed" : item.close}</span>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default Hours;
