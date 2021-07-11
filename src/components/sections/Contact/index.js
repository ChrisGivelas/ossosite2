import React from "react";
import Hours from "./_hours";
import VisitUs from "./_visitus";

class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <div id="contact-panels">
                    <p id="email-message">
                        Pricing inquiries or other Questions? Feel free to send
                        us an email at{" "}
                        <a
                            style={{ fontSize: "inherit", fontWeight: "bold" }}
                            href="mailto:info@ossolighting.ca"
                        >
                            info@ossolighting.ca
                        </a>
                        , or give us a call at{" "}
                        <a
                            style={{ fontSize: "inherit", fontWeight: "bold" }}
                            href="tel:905-404-6776"
                        >
                            905-404-6776
                        </a>
                        .
                    </p>
                    <Hours />
                    <VisitUs />
                </div>
            </section>
        );
    }
}

export default Contact;
