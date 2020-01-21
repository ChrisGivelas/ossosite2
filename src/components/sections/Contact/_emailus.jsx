import React from "react";
import Spinner from "../../shared/Spinner";
import Checkmark from "../../shared/Checkmark";

const EMAIL_SERVER_ENDPOINT = "https://osso-email-service.herokuapp.com/email";

class EmailUs extends React.Component {
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
            <div id="email-us">
                <h3>
                    Send us a message below or email us at{" "}
                    <a href="mailto:info@ossolighting.ca">info@ossolighting.ca</a>
                </h3>
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
                            value="Submit"
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
            </div>
        );
    }
}

export default EmailUs;
