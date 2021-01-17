import React, { useState, useEffect } from "react";
import { fetchImage } from "../../utils";
import { Spinner, Error } from "./Icons";

const ImageFetcher = ({ url, alt, classes }) => {
  const [tried, setTried] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [img, setImg] = useState(null);

  useEffect(() => {
    if (img === null) {
      setIsFetching(true);
      fetchImage(url)
        .then((img) => {
          setIsSuccess(true);
          setImg(img);
        })
        .catch((err) => {
          setIsError(true);
        })
        .finally(() => {
          setTried(true);
          setIsFetching(false);
        });
    }
  }, [setIsFetching, img, url]);

  const showSpinner = isFetching;
  const showComponent = !showSpinner && tried && isSuccess;
  const showError = !showComponent && isError;

  if (showSpinner) {
    return <Spinner />;
  } else if (showComponent) {
    return <img className={classes} src={img} alt={alt} />;
  } else if (showError) {
    return <Error />;
  } else {
    return <React.Fragment />;
  }
};

export default ImageFetcher;
