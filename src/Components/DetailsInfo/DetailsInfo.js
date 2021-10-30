import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';

const DetailsInfo = () => {
    const {detailID}=useParams();
    const [person,setPerson]=useState({});
    const {title,price,job,contact,desc,img}=person;
    useEffect(()=>{
        fetch('https://joydip10.github.io/courseInfo/medicaldata2.json')
        .then(res=>res.json())
        .then(data=>setPerson(data.filter(dt=>dt.id===detailID)[0]))
    },[detailID])
    return (
        <div className="container me-auto text-center d-flex flex-column align-items-center">
            <h1>Detail <span className="text-primary">Information</span></h1>
            {
                (person?.title)?
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {
                        person?.field &&
                        <Card.Subtitle className="mb-2 text-muted">{person?.field.toUpperCase()}</Card.Subtitle>
                    }
                    <Card.Subtitle className="mb-2 text-muted">{job?.toUpperCase()}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Charge: {price}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Contact: {contact}</Card.Subtitle>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
            </Card>
            :
            <div className="text-center">
                <Spinner animation="border" />
            </div>
            }
        </div>
    );
};

export default DetailsInfo;