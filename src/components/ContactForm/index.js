import React, { useState } from 'react';
import { Container, FormGroup, Label, Input } from 'reactstrap';
import { nodemailer, sendEmail } from 'nodemailer';

function ContactForm() {
    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleStateChange(e) {
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const submitEmail = async (e) => {
        e.preventDefault();
        console.log({ mailerState });
        const response = await fetch("http://localhost:3001/send", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ mailerState }),
        })
            .then((res) => res.json())
            .then(async (res) => {
                const resData = await res;
                console.log(resData);
                if (resData.status === "success") {
                    alert("Message Sent");
                } else if (resData.status === "fail") {
                    alert("Message failed to send");
                }
            })
            .then(() => {
                setMailerState({
                    email: "",
                    name: "",
                    message: "",
                });
            });
    };

    return (
        <Container>
            <form onSubmit={sendEmail}>
                <FormGroup>
                    <Label for="name">Full Name:</Label>
                    <Input type="text" name="name" id="name" value={mailerState.name} onChange={handleStateChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" id="email" value={mailerState.email} onChange={handleStateChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">Leave A Message:</Label>
                    <Input type="textarea" name="message" id="message" value={mailerState.message} onChange={handleStateChange} />
                </FormGroup><br></br>
                <Input type="submit">Submit </Input>
            </form>
        </Container>
    )
}

export default ContactForm;