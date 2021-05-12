import React, { useState } from 'react';
import { Container, FormGroup, Label, Input } from 'reactstrap';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

function ContactForm() {
    const [name, setName] = useState('');
    const handleName = e => {
        setName(e.currentTarget.value);
    };

    const [email, setEmail] = useState('');
    const handleEmail = e => {
        setEmail(e.currentTarget.value);
    };

    const [message, setMessage] = useState('');
    const handleMessage = e => {
        setMessage(e.currentTarget.value);
    };

    const sendEmail = e => {

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...useState })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
        console.log((name), (email), (message));
    };


    return (
        <Container>
            <form onSubmit={sendEmail}>
                <FormGroup>
                    <Label for="name">Full Name:</Label>
                    <Input type="text" name="name" id="name" value={name} onChange={handleName} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" id="email" value={email} onChange={handleEmail} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">Leave A Message:</Label>
                    <Input type="textarea" name="message" id="message" value={message} onChange={handleMessage} />
                </FormGroup><br></br>
                <Input type="submit">Submit /</Input>
            </form>
        </Container>
    )
}

export default ContactForm;