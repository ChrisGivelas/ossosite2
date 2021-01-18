import React from "react";
import Marino from "../../assets/images/historical/1.jpg";

function About() {
  return (
    <section id="about">
      <h1 className="section-title">Our Story</h1>
      <div>
        <p className="section-description">
          In 1966, owner Marino Osso arrived in Canada at the age of nineteen
          from Calabria, Italy. Being raised by two hardworking farmers, he knew
          the value of making an honest living and was inspired to pursue a
          trade. Determined to succeed, he obtained his license in Electrical
          Construction Maintenance from George Brown College in 1972. Marino
          then opened a contracting operation called Osso Electric Limited,
          where he dedicated twelve years to perfecting his craft. In 1984, he
          sold Osso Electric and began a new venture through the knowledge he
          developed as an expert businessman in the lighting field. Thanks to
          the support that we have received from the community, Osso City
          Lighting is now celebrating 30+ years of customer satisfaction.
        </p>
        <p className="section-description">
          Since its inception in 1984, Osso City Lighting has proudly been one
          of Durham Region’s largest purveyors of fine lighting. Our goal is to
          continuously provide you the same level of excellence that we have
          shown for over a quarter century. Whether it's traditional,
          contemporary, or anything in between, Osso City Lighting has exactly
          what you need. Come visit our family and see the light in what we
          love.
        </p>
      </div>
      <img className="marino" src={Marino} alt="Marino" />
    </section>
  );
}

export default About;
