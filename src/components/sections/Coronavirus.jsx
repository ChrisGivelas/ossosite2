import React from "react";
import { Assets } from "../../App";

function Coronavirus({ content }) {
  const { heading, ps = [] } = content || {};

  console.log(heading, ps);

  return (
    <section id="coronavirus">
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
      return <Coronavirus content={config.coronavirusSection} />;
    }}
  </Assets.Consumer>
);
