import React from "react";
import Hours from "./_hours";
import EmailUs from "./_emailus";
import VisitUs from "./_visitus";
import SocialMedia from "./_socialmedia";

class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <h1 className="section-title">Contact Us</h1>
                <div id="contact-panels">
                    <div id="contact-left-panel">
                        <Hours />
                        <EmailUs />
                    </div>
                    <div id="contact-right-panel">
                        <SocialMedia />
                        <VisitUs />
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
