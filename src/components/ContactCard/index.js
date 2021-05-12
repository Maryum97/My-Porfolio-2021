import React from 'react';
import { Container, Row, Card, CardBody } from 'reactstrap';
import ContactForm from '../ContactForm';

function ContactCard() {
    return (
        <Container>
            <Row>
                <Card color="warning">
                    <CardBody>
                        <ContactForm />
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}

export default ContactCard;