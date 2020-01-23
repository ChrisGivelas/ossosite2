import React from "react";
import Hours from "./_hours";
import EmailUs from "./_emailus";
import VisitUs from "./_visitus";

class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <h1 className="section-title">Contact Us</h1>
                <div id="contact-panels">
                    <Hours />
                    <EmailUs />
                    <VisitUs />
                </div>
            </section>
        );
    }
}

export default Contact;
