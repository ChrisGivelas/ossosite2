import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Spinner from "../shared/Spinner";
import Checkmark from "../shared/Checkmark";
import {CONTACT} from "../../routes";
const EMAIL_SERVER_ENDPOINT = "https://osso-email-service.herokuapp.com/email";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.defaultFormValues = {name: "", email: "", subject: "", message: ""};
        this.defaultEmailStatus = {submitting: false, sent: false, error: false};

        this.state = {
            emailStatus: this.defaultEmailStatus,
            formValues: this.defaultFormValues
        };
    }

    handleChange = e => this.setState({formValues: {...this.state.formValues, [e.target.name]: e.target.value}});

    canSubmit = () => Object.values(this.state.formValues).every(value => value && value.length > 0);

    sendEmail = () => {
        this.setState({emailStatus: {submitting: true, sent: false, error: false}}, () => {
            fetch(EMAIL_SERVER_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state.formValues)
            })
                .then(res => res.json())
                .then(body => {
                    this.setState({
                        emailStatus: {submitting: false, sent: true, error: false, ...body},
                        formValues: {
                            name: this.state.formValues.name,
                            email: this.state.formValues.email,
                            subject: "",
                            message: ""
                        }
                    });
                })
                .catch(e => {
                    this.setState({emailStatus: {submitting: false, sent: false, error: true}});
                });
        });
    };

    render() {
        const {emailStatus, formValues} = this.state;

        const submitDisabled = emailStatus.submitting || !this.canSubmit();
        return (
            <ScrollableAnchor id={CONTACT}>
                <section id="contact-section">
                    <h1>Contact.</h1>
                    <div id="contact-header-content">
                        <p id="info">
                            209 Bloor Street East
                            <br />
                            Oshawa, Ontario
                            <br />
                            905-404-6776
                            <br />
                            <a href="mailto:info@ossolighting.ca">info@ossolighting.ca</a>
                        </p>
                        <div id="hours">
                            <p className="hours-entry">
                                <span>Monday:</span>
                                <span>Closed</span>
                            </p>
                            <p className="hours-entry">
                                <span>Tuesday:</span>
                                <span>9:30am - 5:30pm</span>
                            </p>
                            <p className="hours-entry">
                                <span>Wednesday:</span>
                                <span>9:30am - 5:30pm</span>
                            </p>
                            <p className="hours-entry">
                                <span>Thursday:</span>
                                <span>9:30am - 8:00pm</span>
                            </p>
                            <p className="hours-entry">
                                <span>Friday:</span>
                                <span>9:30am - 5:30pm</span>
                            </p>
                            <p className="hours-entry">
                                <span>Sunday:</span>
                                <span>9:30am - 5:30pm</span>
                            </p>
                            <p className="hours-entry">
                                <span>Sunday:</span>
                                <span>Closed</span>
                            </p>
                        </div>
                    </div>
                    <div id="contact-content">
                        <form
                            id="contact-form"
                            onSubmit={e => {
                                this.sendEmail();
                                e.preventDefault();
                            }}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={formValues.name}
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleChange}
                                value={formValues.email}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                onChange={this.handleChange}
                                value={formValues.subject}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                onChange={this.handleChange}
                                value={formValues.message}
                            />
                            <div>
                                <input
                                    className={submitDisabled ? "disabled" : null}
                                    type="submit"
                                    value="submit"
                                    disabled={submitDisabled}
                                />
                                {emailStatus.submitting ? (
                                    <Spinner />
                                ) : emailStatus.sent ? (
                                    <span>
                                        <Checkmark /> Email sent!
                                    </span>
                                ) : emailStatus.error ? (
                                    <span style={{color: "red"}}>
                                        Error sending email. Please try again later or email us at info@ossolighting.ca.
                                    </span>
                                ) : null}
                            </div>
                        </form>
                        <iframe
                            id="osso-map"
                            title="osso-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.761981813491!2d-78.85005888449489!3d43.881482879114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d2fe0c5d2d1%3A0x19688693ec78b9df!2sOsso%20City%20Lighting%20Limited!5e0!3m2!1sen!2sca!4v1576166279902!5m2!1sen!2sca"
                            width="800"
                            height="600"
                            frameBorder="0"
                            style={{border: 0}}
                            allowFullScreen=""
                        ></iframe>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}

export default Contact;
