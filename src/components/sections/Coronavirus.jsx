import React from "react";

function Coronavirus() {
  return (
    <section id="coronavirus">
      <h1 className="section-title">
        Coronavirus Update: Ontario Wide Lockdown
      </h1>
      <p className="section-description">
        To help keep our community safe during this time, our showroom and all
        in-store shopping will be temporarily suspended as per the province-wide
        lockdown.
      </p>
      <p className="section-description">
        We will be available for email and phone orders as well as curb side
        pickup.
      </p>
      <p className="section-description">
        For any inquiries, please reach us via: <br />
        Phone:{" "}
        <a className="highlighted" href="tel:905-404-6776">
          905.404.6776
        </a>{" "}
        Email:{" "}
        <a className="highlighted" href="mailto:info@ossolighting.ca">
          info@ossolighting.ca
        </a>
      </p>
      <p className="section-description">
        Our limited hours of operation during the lockdown will be:
        <br />
        <span className="highlighted">
          Tuesday – Saturday (9:30AM – 2:00PM)
        </span>
      </p>
      <p
        className="section-description"
        style={{ color: "red", fontWeight: "bold" }}
      >
        We are closed Sundays and Mondays.
      </p>
      <p className="section-description">
        Please stay safe, we are all in this together. Thank you for your
        continued support and we look forward to seeing you soon!
      </p>
    </section>
  );
}

export default Coronavirus;
