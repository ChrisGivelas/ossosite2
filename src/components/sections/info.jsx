import React from "react";
import { Assets } from "../../App";

function Info({ content }) {
  const { heading, ps = [] } = content || {};

  return (
    <section id="info">
      <h1 className="section-title">{heading}</h1>
      {ps.map((p, i) => (
        <p key={`corona_${i}`} className="section-description">
          {p}
        </p>
      ))}
    </section>
  );
}

export default () => (
  <Assets.Consumer>
    {(config) => {
      return config.info && config.info.visible ? (
        <Info content={config.info.content} />
      ) : (
        <></>
      );
    }}
  </Assets.Consumer>
);
