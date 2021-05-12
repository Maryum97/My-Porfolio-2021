import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Container, FormGroup, Label, Input } from 'reactstrap';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            emailStatus: '',
        };
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        emailjs.sendForm('gmail', 'template_irxkmod', event.target, 'user_gxiulwpVRO5vyn8yUAmeN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            event.target.reset();
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.handleFormSubmit}>
                    <FormGroup>
                        <Label for="name">Full Name:</Label>
                        <Input type="text" name="name" id="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input type="email" name="email" id="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">Leave A Message:</Label>
                        <Input type="textarea" name="message" id="message" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
                    </FormGroup><br></br>
                    <Input type="submit" onClick={e => this.handleFormSubmit(e)} value="submit">Submit </Input>
                </form>
            </Container>
        )
    }
}

export default ContactForm;