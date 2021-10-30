import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const DoctorDetails = (props) => {
    const { id,name, field, img } = props.doc;
    const history=useHistory();
    return (
        <Col>
            <Card className="">
                <Card.Img variant="top" className="img-fluid" style={{height:"340px"}} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {field}
                    </Card.Text>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={()=>history.push(`/details/${id}`)}>Click to know more</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DoctorDetails;