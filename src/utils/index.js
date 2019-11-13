export const getImageURL = (resourceFileName, resourceFolderName = "images", resourceCDN = "resources") =>
    `${resourceCDN}/${resourceFolderName}/${resourceFileName}`;
