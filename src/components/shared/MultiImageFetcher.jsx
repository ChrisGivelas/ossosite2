import React, { useState, useEffect } from "react";
import { getIntArray } from "../../utils";
import Carousel from "./Carousel";

const MultiImageFetcher = ({
  dir,
  classes,
  batchSize = 3,
  errorLimit = 3,
  alt,
  withCarousel = false,
}) => {
  const [fetchingBatch, setFetchingBatch] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const [done, setDone] = useState(false);
  const [imgSrcs, setImgSrcs] = useState([]);

  useEffect(() => {
    if (!done && !fetchingBatch) {
      setFetchingBatch(true);
      var batch = getIntArray(batchSize, attemptCount).map((numb) =>
        fetch(`${dir}${numb}.jpg`)
          .then((res) => {
            return res.blob();
          })
          .then(
            async (blob) =>
              await new Promise((resolve, reject) => {
                if (blob.type.toLowerCase() !== "image/jpeg") {
                  reject("Image Not Found!");
                } else {
                  var fr = new FileReader();

                  fr.addEventListener("load", function () {
                    resolve(fr.result);
                  });

                  fr.readAsDataURL(blob);
                }
              })
          )
      );

      Promise.allSettled(batch).then((results) => {
        const [successes, errors] = results.reduce(
          (agg, curr) => {
            if (curr.status === "fulfilled") {
              return [[...agg[0], curr], agg[1]];
            } else {
              return [agg[0], [...agg[1], curr]];
            }
          },
          [[], []]
        );

        setImgSrcs([...imgSrcs, ...successes.map((result) => result.value)]);

        if (errors.length >= errorLimit) {
          setDone(true);
        }

        setAttemptCount(attemptCount + batchSize);

        setFetchingBatch(false);
      });
    }
  }, [imgSrcs, errorLimit, fetchingBatch, attemptCount, batchSize, dir, done]);

  const imgs = imgSrcs.map((src, i) => (
    <img
      key={`${alt}_${i}`}
      src={src}
      className={classes}
      alt={`${alt}_${i}`}
    />
  ));

  return withCarousel ? <Carousel>{imgs}</Carousel> : imgs;
};

export default MultiImageFetcher;
