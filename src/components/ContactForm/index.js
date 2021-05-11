import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function ContactForm() {
    return (
        <Form>
            <FormGroup>
                <Label for="name">Full Name</Label>
                <Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">Message</Label>
                <Input type="textarea" name="message" id="message" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>

    )
}

export default ContactForm;