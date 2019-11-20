import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

function Contact() {
    return (
        <ScrollableAnchor id="contact">
            <section id="contact-section">
                <h3 className="section-title">Contact Us</h3>
                <p className="section-description">
                    905-404-6776 | <a href="mailto:info@ossolighting.ca">info@ossolighting.ca</a>
                </p>
                <div id="contact-form">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message" />
                    <input type="submit" value="submit" />
                </div>
            </section>
        </ScrollableAnchor>
    );
}

export default Contact;
