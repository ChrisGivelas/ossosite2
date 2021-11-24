const defaultConfig = require("./defaultConfig.json");

/**
 * Standard es6 debounce
 */

// export const debounce = function (callback, wait, immediate = false) {
//   let timeout = null;

//   return function () {
//     const callNow = immediate && !timeout;
//     const next = () => callback.apply(this, arguments);

//     clearTimeout(timeout);
//     timeout = setTimeout(next, wait);

//     if (callNow) {
//       next();
//     }
//   };
// };

/**
 * Execute callback every *wait* seconds while event is being fired
 */
export const modifiedDebounce = function (callback, wait, immediate = false) {
  var timeout = null;
  var isDone = false;

  return function () {
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

// Start with default hours as fallback because why the heck not?
var hours = [
  { day: "Sunday", isClosed: true },
  { day: "Monday", isClosed: true },
  { day: "Tuseday", open: "9:30am", close: "2:00pm" },
  { day: "Wednesday", open: "9:30am", close: "2:00pm" },
  { day: "Thursday", open: "9:30am", close: "2:00pm" },
  { day: "Friday", open: "9:30am", close: "2:00pm" },
  { day: "Saturday", open: "9:30am", close: "2:00pm" },
];

export const updateHours = (newHours) => {
  hours = newHours;
};

export const getHoursForDay = (day) => {
  if (typeof day === "number") {
    return hours[day];
  } else if (typeof day === "string") {
    return (
      hours.find((hourInfo) => hourInfo.day === day) ||
      hours[new Date().getDay()]
    );
  } else {
    return hours[new Date().getDay()];
  }
};

export const today = getHoursForDay();

export const elementIsHidden = (el, mode = "visible") => {
  const positionInfo = el.getBoundingClientRect();

  const above = positionInfo.top + positionInfo.height < 0;
  const below = positionInfo.top > window.innerHeight;

  return mode === "above"
    ? above
    : mode === "below"
    ? below
    : mode === "visible"
    ? above || below
    : false;
};

export const fetchAssetsConfig = async () => {
  return fetch(origin + "/config/main.json", {
    headers: {
      "Cache-Control": "no-store no-cache must-revalidate max-age=10",
    },
  })
    .then((res) => res.json())
    .catch(() => defaultConfig);
};

export function isTouchEnabled() {
  try {
    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch) ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0 ||
      Math.max(document.documentElement.clientWidth, window.innerWidth, 0) < 768
    ) {
      //console.log("Touch enabled: ", true);
      return true;
    } else {
      var prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
      var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join(
        ""
      );
      var touchEnabled = window.matchMedia(query).matches;
      // console.log("Touch enabled: ", touchEnabled);
      return touchEnabled;
    }
  } catch (e) {
    // console.log(
    //     "Error trying to check if this device is touch enabled. Please send us an email at info@ossolighting.ca with your device name, and we will fix this as soon as possible."
    // );
    return undefined;
  }
}

export const getIntArray = (n, start = 0) =>
  Array(n)
    .fill()
    .map((_, i) => i + 1 + start);

export const fetchImage = (url) => {
  return fetch(url)
    .then((res) => {
      return res.blob();
    })
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          if (
            blob.type.toLowerCase() !== "image/jpeg" &&
            blob.type.toLowerCase() !== "image/png"
          ) {
            reject("Image Not Found!");
          } else {
            var fr = new FileReader();

            fr.addEventListener("load", function () {
              resolve(fr.result);
            });

            fr.readAsDataURL(blob);
          }
        })
    );
};

export const batchFetchImages = (batchSize, start, dir) => {
  return getIntArray(batchSize, start).map((numb) => {
    return fetchImage(`${dir}${numb}.jpg`);
  });
};

export const seperateBatchResults = (results) =>
  results.reduce(
    (agg, curr) => {
      if (curr.status === "fulfilled") {
        return [[...agg[0], curr], agg[1]];
      } else {
        return [agg[0], [...agg[1], curr]];
      }
    },
    [[], []]
  );

export const fetchAllImagesInDir = async ({
  dir,
  batchSize = 3,
  errorLimit = 3,
}) => {
  var done = false;
  var count = 0;
  var imgs = [];

  while (!done) {
    const batch = batchFetchImages(batchSize, count, dir);
    const [isDone, newImgs] = await Promise.allSettled(batch).then(
      (results) => {
        const [successes, errors] = seperateBatchResults(results);

        if (errors.length >= errorLimit) {
          return [true, successes.map((result) => result.value)];
        } else {
          return [false, successes.map((result) => result.value)];
        }
      }
    );

    done = isDone;
    count += batchSize;
    imgs = imgs.concat(newImgs);
  }

  return imgs;
};
