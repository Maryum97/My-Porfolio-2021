import React from 'react';
import { Container, Row, Card, CardBody } from 'reactstrap';

function ProjectLinks() {
    return (
        <Container>
            <Row>
                <Card color="warning">
                    <CardBody>
                        <p><b>Find my repositories using the links below:</b></p>
                        <ol>
                            <li>
                                <a href='https://github.com/Maryum97/06_Server-Side-API-s_Weather-Dashboard'>Weather Dashboard</a>
                            </li>
                            <li>
                                <a href='https://github.com/Maryum97/believe'>Believe</a>
                            </li>
                            <li>
                                <a href='https://github.com/Maryum97/My_README_Generator_2021'>README Generator</a>
                            </li>
                            <li>
                                <a href='https://github.com/Maryum97/Note_Taker_2021'>Note Taker</a>
                            </li>
                            <li>
                                <a href='https://github.com/Maryum97/Code_Crowd'>Code Crowd</a>
                            </li>
                            <li>
                                <a href='https://github.com/Maryum97/Employee-Directory-2021'>Employee Directory</a>
                            </li>
                        </ol>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}

export default ProjectLinks;