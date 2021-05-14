import React from 'react';
import { Container, Row, Card, CardBody, Button } from 'reactstrap';

function ProjectLinks() {
    return (
        <Container>
            <Row>
                <Card color="warning">
                    <CardBody>
                        <p><b>Find my repositories and deployes apps using the links below:</b></p>
                        <ol>
                            <li>
                                Weather Dashboard:<br></br>
                                <Button color='danger'><a href='https://github.com/Maryum97/06_Server-Side-API-s_Weather-Dashboard' target='_blank'>Repo</a></Button>
                                <span>  </span>
                                <Button color='primary'><a href='https://maryum97.github.io/06_Server-Side-API-s_Weather-Dashboard/' target='_blank'>App</a></Button>
                            </li>
                            <li>
                                Believe:<br></br>
                                <Button color='danger'><a href='https://github.com/Maryum97/believe' target='_blank'>Repo</a></Button>
                                <span>  </span>
                                <Button color='primary'><a href='https://maryum97.github.io/believe/' target='_blank'>App</a></Button>
                            </li>
                            <li>
                                README Generator:<br></br>
                                <Button color='danger'><a href='https://github.com/Maryum97/My_README_Generator_2021' target='_blank'>Repo</a></Button>
                            </li>
                            <li>
                                Note Taker:<br></br>
                                <Button color='danger'><a href='https://github.com/Maryum97/Note_Taker_2021' target='_blank'>Repo</a></Button>
                                <span>  </span>
                                <Button color='primary'><a href='https://maryum-app-1.herokuapp.com/' target='_blank'>App</a></Button>
                            </li>
                            <li>
                                Code Crowd:<br></br>
                                <Button color='danger'><a href='https://github.com/Maryum97/Code_Crowd' target='_blank'>Repo</a></Button>
                                <span>  </span>
                                <Button color='primary'><a href='https://code-crowd.herokuapp.com/' target='_blank'>App</a></Button>
                            </li>
                            <li>
                                Employee Directory:<br></br>
                                <Button color='danger'><a href='https://github.com/Maryum97/Employee-Directory-2021' target='_blank'>Repo</a></Button>
                                <span>  </span>
                                <Button color='primary'><a href='https://maryum97.github.io/Employee-Directory-2021/' target='_blank'>App</a></Button>
                            </li>
                        </ol>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}

export default ProjectLinks;