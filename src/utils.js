export const getImageURL = (resourceFileName, resourceFolderName = "images", resourceCDN = "/resources") =>
    `${resourceCDN}/${resourceFolderName}/${resourceFileName}`;

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
