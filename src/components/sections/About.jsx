import React from "react";
import { Assets } from "../../App";
import Marino from "../../assets/images/marino.jpg";
import defaultConfig from "../../defaultConfig.json";

function About({ content }) {
  const { heading, ps = [] } = content;

  return (
    <section id="about">
      <h1 className="section-title">{heading}</h1>
      <div>
        {ps.map((p, i) => (
          <p key={`about_${i}`} className="section-description">
            {p}
          </p>
        ))}
      </div>
      <img className="marino" src={Marino} alt="Marino" />
    </section>
  );
}

export default () => (
  <Assets.Consumer>
    {(config) => {
      let content =
        config && config.aboutSection && config.aboutSection.content
          ? config.aboutSection.content
          : defaultConfig.aboutSection.content;
      return <About content={content} />;
    }}
  </Assets.Consumer>
);
