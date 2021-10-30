import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import doctorImg from "./Doctors.jpg";
import labImg from "./Lab2.jpg";
import therapyImg from "./Therapies.jpg";
import { useHistory } from 'react-router';

const MiddleSection = () => {
    const history=useHistory();
    return (
        <div className="px-5 pt-4 container">
            <CardGroup>
                <Card className="me-2">
                    <Card.Img variant="top" className="img-fluid" style={{height:'300px'}} src={doctorImg} />
                    <Card.Body>
                        <Card.Title>Consult Doctors</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                        <button className="btn btn-primary" onClick={()=>history.push('/doctors')}>Consult now</button>
                   
                </Card>

                <Card className="me-2">
                    <Card.Img variant="top" style={{height:'300px'}} src={labImg} />
                    <Card.Body>
                        <Card.Title>Take Lab Tests</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <button className="btn btn-primary" onClick={()=>history.push('/labTests')}>Contact Now</button>
                </Card>

                <Card>
                    <Card.Img variant="top" style={{height:'300px'}} src={therapyImg} />
                    <Card.Body>
                        <Card.Title>Book a therapy Now</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <button className="btn btn-primary" onClick={()=>history.push('/therapies')}> Book a therapy</button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default MiddleSection;