import React, {useState, useEffect} from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const NAME = "name";
const EMAIL = "email";
const SUBJECT = "subject";
const MESSAGE = "message";

const fields = [NAME, EMAIL, SUBJECT, MESSAGE];

const EMAIL_SERVER_ENDPOINT = "https://osso-email-service.herokuapp.com/email";

const sendEmail = async formValues => {
    console.log(formValues);
    return fetch(EMAIL_SERVER_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
    });
};

const testEmail = {
    [NAME]: "John Doe",
    [EMAIL]: "john_doe@hotmail.com",
    [SUBJECT]: "Lights?",
    [MESSAGE]: "Do you sell lights?"
};

function Contact() {
    const [formValues, setFormValues] = useState(testEmail);
    const [submitting, setSubmitting] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);

    const setInputValue = e => {
        let newFormValueState = {...formValues, [e.target.name]: e.target.value};
        setFormValues(newFormValueState);
    };

    const submit = () => {
        setSubmitting(true);
        sendEmail(formValues)
            .then(res => {
                return res.body.json();
            })
            .then(json => {
                console.log(json);
                setSubmitting(false);
                setFormValues({});
            })
            .catch(e => {
                console.log(e);
                setSubmitting(false);
            });
    };

    useEffect(() => {
        const canSubmit = fields.every(
            fieldName => formValues[fieldName] !== undefined && formValues[fieldName].length > 0
        );
        setCanSubmit(canSubmit);
    }, [formValues, canSubmit]);

    return (
        <ScrollableAnchor id="contact">
            <section id="contact-section">
                <h3 className="section-title">Contact Us</h3>
                <p className="section-description">
                    905-404-6776 | <a href="mailto:info@ossolighting.ca">info@ossolighting.ca</a>
                </p>
                <form
                    id="contact-form"
                    onSubmit={e => {
                        e.preventDefault();
                        submit();
                    }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={setInputValue}
                        defaultValue={formValues[NAME]}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={setInputValue}
                        defaultValue={formValues[EMAIL]}
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        onChange={setInputValue}
                        defaultValue={formValues[SUBJECT]}
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        onChange={setInputValue}
                        defaultValue={formValues[MESSAGE]}
                    />
                    <input
                        className={submitting ? "submitting" : null}
                        type="submit"
                        value="submit"
                        disabled={submitting || !canSubmit}
                    />
                </form>
            </section>
        </ScrollableAnchor>
    );
}

export default Contact;
