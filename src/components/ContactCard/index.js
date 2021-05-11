import React from 'react';
import { Card, CardBody } from 'reactstrap';
import ContactForm from '../ContactForm';

function ContactCard() {
    return (
        <Card color="warning">
            <CardBody>
                <ContactForm />
            </CardBody>
        </Card>
    )
}

export default ContactCard;