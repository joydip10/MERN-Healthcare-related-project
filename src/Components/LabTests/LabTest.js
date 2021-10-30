import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const LabTest = (props) => {
    const { id,title, img } = props.lab;
    const history=useHistory();
    return (
        <Col>
            <Card>
                <Card.Img variant="top" style={{ height: "300px" }} src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <div className="text-center mb-2">
                    <button className="btn btn-primary" onClick={()=>history.push(`/details/${id}`)}>Click to know more</button>
                </div>
            </Card>
        </Col>
    );
};

export default LabTest;