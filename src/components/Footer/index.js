import React from 'react';
import './style.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>© 2021 Copyright</Col>
                    <Col>
                        Follow me on social media:<br></br>
                            <a href="https://www.linkedin.com/in/maryum-bokhari-9070581ba/" target="_blank"><FontAwesomeIcon icon={ faLinkedin } /></a>
                            <a href="https://www.instagram.com/maryumbokhari97/" target="_blank"><FontAwesomeIcon icon={ faInstagram } /></a>
                    
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;