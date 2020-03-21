import React from "react";

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
            var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
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

export const initialValue = isTouchEnabled();

export default React.createContext(initialValue);
