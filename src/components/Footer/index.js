import React from 'react';
import './style.css';
import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>© 2021 Copyright</Col>
                    <Col>
                        Follow me on social media:
                            <a href="https://www.linkedin.com/in/maryum-bokhari-9070581ba/" target="_blank"><i class="fab fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/maryumbokhari97/" target="_blank"><i class="fab fa-instagram"></i></a>
                    
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;