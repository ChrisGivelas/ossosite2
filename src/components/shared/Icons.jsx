import React from "react";
import SpinnerIcon from "../../assets/images/spinner.gif";
import ErrorIcon from "../../assets/images/error.png";
import CheckmarkIcon from "../../assets/images/CheckMark.png";

export function Checkmark() {
  return (
    <img
      style={{ marginLeft: 15, maxWidth: 20, maxHeight: 20 }}
      src={CheckmarkIcon}
      alt="checkmark"
    />
  );
}

export function Spinner() {
  return <img style={{ width: 40 }} src={SpinnerIcon} alt="spinner" />;
}

export function Error() {
  return <img style={{ width: 40 }} src={ErrorIcon} alt="error" />;
}
