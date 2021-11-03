import React from "react";
import YoungMarino from "../../assets/images/young-marino.jpeg";

function Memorial() {
  return (
    <section id="memorial">
      <h1 className="section-title">Remembering Marino</h1>
      <img id="young-marino" src={YoungMarino} alt="young-marino" />
      <p className="section-description">
        It is with heavy hearts that we must announce the passing of Marino
        Osso, the founder of Osso City Lighting. Marino was a father,
        grandfather, friend, colleague, and mentor to his family and to many in
        the Oshawa community, and will be sorely missed.
      </p>
    </section>
  );
}

export default Memorial;
