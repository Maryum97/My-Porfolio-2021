import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function InfoCard() {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">My Personal Information</CardTitle>
                    <h6>My CV</h6>

                    <a href='https://docs.google.com/document/d/1KTN8F_Mqi7AdvcGW64we8rIyqdR7r4AbglOtedmHkWo/edit?usp=sharing' target='_blank'>Link Here</a>

                    <br></br>
                    <br></br>

                    <h6>My Github</h6>

                    <a href='https://github.com/Maryum97?tab=repositories' target='_blank'>Link Here</a>

                    <br></br>
                    <br></br>

                    <h6>My LinkedIn</h6>

                    <a href='https://www.linkedin.com/in/maryum-bokhari-9070581ba/' target='_blank'>Link Here</a>

                    <br></br>
                    <br></br>

                    <h6>My Phone Number</h6>

                    +44 (0) 745 289 4940

                    <br></br>
                    <br></br>

                    <h6>My Email Address</h6>

                    maryumbokhari97@gmail.com

                    <br></br>
                    <br></br>
                </CardBody>
            </Card>
        </div>
    )
}

export default InfoCard;