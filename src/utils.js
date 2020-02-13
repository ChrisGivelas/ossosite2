export const getImageURL = (resourceFileName, resourceFolderName = "images", resourceCDN = "/resources") =>
    `${resourceCDN}/${resourceFolderName}/${resourceFileName}`;

/**
 * Standard es6 debounce
 */
export const debounce = function(callback, wait, immediate = false) {
    let timeout = null;

    return function() {
        const callNow = immediate && !timeout;
        const next = () => callback.apply(this, arguments);

        clearTimeout(timeout);
        timeout = setTimeout(next, wait);

        if (callNow) {
            next();
        }
    };
};

/**
 * Execute callback every *wait* seconds while event is being fired
 */
export const modifiedDebounce = function(callback, wait, immediate = false) {
    var timeout = null;
    var isDone = false;

    return function() {
        const callNow = immediate && !timeout;
        const next = () => {
            isDone = true;
            callback.apply(this, arguments);
        };

        if (timeout === null) {
            timeout = setTimeout(next, wait);
        }

        if (isDone) {
            isDone = false;
            clearTimeout(timeout);
            timeout = setTimeout(next, wait);
        }

        if (callNow) {
            next();
        }
    };
};

export const hours = [
    {day: "Sunday", isClosed: true},
    {day: "Monday", isClosed: true},
    {day: "Tuseday", open: "9:30am", close: "5:30pm"},
    {day: "Wednesday", open: "9:30am", close: "5:30pm"},
    {day: "Thursday", open: "9:30am", close: "8:00pm"},
    {day: "Friday", open: "9:30am", close: "5:30pm"},
    {day: "Saturday", open: "9:30am", close: "5:30pm"}
];

export const getHoursForDay = day => {
    if (typeof day === "number") {
        return hours[day];
    } else if (typeof day === "string") {
        return hours.find(hourInfo => hourInfo.day === day) || hours[new Date().getDay()];
    } else {
        return hours[new Date().getDay()];
    }
};

export const today = getHoursForDay();
