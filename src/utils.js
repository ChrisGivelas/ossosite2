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

export const normalizeProductImageNamesAsUrl = (productTypes, supplier) => {
    return productTypes
        .map(type => {
            if (type === "Chandeliers") {
                return getImageURL("CHANDELIER.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Vanities") {
                return getImageURL("VANITY.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Linears") {
                return getImageURL("LINEAR.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Pendants") {
                return getImageURL("PENDANT.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Sconces") {
                return getImageURL("SCONCE.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Outdoor" || type === "Outdoor + Landscape") {
                return getImageURL("OUTDOOR.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Ceiling") {
                return getImageURL("CEILING.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Pendants") {
                return getImageURL("PENDANT.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Ceiling Fans") {
                return getImageURL("FAN.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Recessed") {
                return getImageURL("RECESSED.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Cabinet" || type === "Cabinets") {
                return getImageURL("CABINET.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Accessories") {
                return getImageURL("ACCESSORIES.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "LED Mirrors") {
                return getImageURL("MIRROR.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Track") {
                return getImageURL("TRACK.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Landscape") {
                return getImageURL("LANDSCAPE.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Lamps") {
                return getImageURL("LAMP.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Torchieres") {
                return getImageURL("TORCHIER.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Ottomans") {
                return getImageURL("OTTOMAN.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Console Tables") {
                return getImageURL("CONSOLE TABLE.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Drawers") {
                return getImageURL("DRAWER.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Stools") {
                return getImageURL("STOOL.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Coffee Tables") {
                return getImageURL("COFFEE TABLE.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Art") {
                return getImageURL("ART.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Task Lamps") {
                return getImageURL("TASK LAMP.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Floor Lamps") {
                return getImageURL("FLOOR LAMP.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Table Lamps") {
                return getImageURL("TABLE LAMP.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "Mailboxes") {
                return getImageURL("MAILBOX.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else if (type === "House Numbers") {
                return getImageURL("HOUSE NUMBER.jpg", `images/supplier_products/${supplier.toUpperCase()}`);
            } else {
                return "";
            }
        })
        .filter(type => type !== "");
};
