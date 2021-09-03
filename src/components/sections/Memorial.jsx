import React from "react";
import YoungMarino from "../../assets/images/young-marino.jpeg";

function Memorial() {
  return (
    <section id="memorial">
      <h1 className="section-title">Remembering Marino</h1>
      <img id="young-marino" src={YoungMarino} alt="young-marino" />
      <p className="section-description">
        It is with heavy hearts that we must announce the passing of Marino
        Osso, the founder of Osso City Lighting. Marino was a father, friend,
        colleague, and mentor to his family and to many in the Oshawa community,
        and will be sorely missed.
      </p>
      <p className="section-description">
        We will be closed on Friday September 3rd, and Saturday September 4th
        for the visitation and funeral at Armstrong Funeral home. For more
        information, click{" "}
        <a
          href="https://www.armstrongfh.ca/memorials/marino-osso/4712325/index.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          here to go to Armstrong's website.
        </a>
      </p>
    </section>
  );
}

export default Memorial;
