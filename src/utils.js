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
