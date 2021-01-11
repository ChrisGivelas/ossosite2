import React, { useState, useEffect } from "react";
import { Spinner, Error } from "./Icons";

const ImageFetcher = ({ Component, url }) => {
  const [tried, setTried] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [img, setImg] = useState(null);

  useEffect(() => {
    if (img === null) {
      setIsFetching(true);
      fetch(url)
        .then((res) => {
          console.log(res);
          setIsSuccess(true);
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
        })
        .finally(() => {
          setTried(true);
          setIsFetching(false);
        });
    }
  });

  const showSpinner = isFetching;
  const showComponent = !showSpinner && tried && isSuccess;
  const showError = !showComponent && isError;

  var imgToShow = null;

  if (showSpinner) {
    imgToShow = <Spinner />;
  } else if (showComponent) {
    imgToShow = <img src={img} />;
  } else if (showError) {
    imgToShow = <Error />;
  } else {
    imgToShow = <React.Fragment />;
  }

  return <Component img={imgToShow} />;
};

export default ImageFetcher;
