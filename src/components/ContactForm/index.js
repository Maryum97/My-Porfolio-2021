import React from 'react';
import axios from 'axios';
import { Container, FormGroup, Label, Input, Button} from 'reactstrap';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleMsgChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: 'http://localhost:7000/send',
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        });
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                    <FormGroup>
                        <Label for="name">Full Name:</Label>
                        <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">Leave A Message:</Label>
                        <Input type="textarea" name="message" id="message" value={this.state.message} onChange={this.handleMsgChange.bind(this)} />
                    </FormGroup><br></br>
                    <Button type="submit" onClick={e => this.handleFormSubmit(e)} value="submit">Submit </Button>
                </form>
            </Container>
        )
    }
}

export default ContactForm;