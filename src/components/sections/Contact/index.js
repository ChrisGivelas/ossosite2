import React from "react";
import Hours from "./_hours";
import EmailUs from "./_emailus";
import VisitUs from "./_visitus";

class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <div id="contact-panels">
                    <p id="hours-message">Our hours</p>
                    <Hours />
                    <p id="email-message">
                        Send us a message below or email us at{" "}
                        <a href="mailto:info@ossolighting.ca">info@ossolighting.ca</a>
                    </p>
                    <EmailUs />
                    <p id="visit-message">
                        209 Bloor Street East
                        <br />
                        Oshawa, Ontario
                        <br />
                        <a href="tel:905-404-6776">905-404-6776</a>
                    </p>
                    <VisitUs />
                </div>
            </section>
        );
    }
}

export default Contact;
