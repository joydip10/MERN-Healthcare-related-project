import React from 'react';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import useHooks from './../Hooks/useHooks';
import { useHistory } from 'react-router';

const ShowServices = () => {
    const [doctors] = useHooks('https://joydip10.github.io/courseInfo/medicaldata2.json', 'doctor');
    const [labs] = useHooks('https://joydip10.github.io/courseInfo/medicaldata2.json', 'lab');
    const [therapies] = useHooks('https://joydip10.github.io/courseInfo/medicaldata2.json', 'therapy')

    return (
        <div className="mt-5 container">
            <div className="px-4">
                <h3 className=" text-white text-center mt-2 bg-secondary bg-gradient p-2"> Some of our expert<span className="text-warning"> Doctors</span></h3>
                <Row xs={1} md={3} className="g-4 mb-2">
                    {doctors.slice(0, 3).map(doc => <SingleServicesDoctor key={doc.id} doc={doc} />)}
                </Row>
                <h3 className=" text-white text-center mt-5 bg-secondary bg-gradient p-2"> Take our best<span className="text-warning"> Lab Tests</span></h3>
                <Row xs={1} md={3} className="g-4 mb-2">
                    {labs.slice(0, 3).map(lab => <SingleServicesLab key={lab.id} lab={lab} />)}
                </Row>
                <h3 className=" text-white text-center mt-5 bg-secondary bg-gradient p-2"> Book our best<span className="text-warning"> Therapies</span></h3>
                <Row xs={1} md={3} className="g-4 mb-2">
                    {therapies.slice(0, 3).map(therapy => <SingleServicesTherapy key={therapy.id} therapy={therapy} />)}
                </Row>
            </div>
        </div>
    );
};

const SingleServicesDoctor = (props) => {
    const { id,title, field, img } = props.doc;
    const history = useHistory();
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img style={{ height: "300px" }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle>{field.toUpperCase()}</Card.Subtitle>
                        <div className="text-center mt-2">
                            <button className="btn btn-primary" onClick={()=>history.push(`/details/${id}`)}>Visit here to know more</button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
}

const SingleServicesLab = (props) => {
    const { id,title, img } = props.lab;
    const history = useHistory();
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img style={{ height: "300px" }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <div className="text-center mt-2">
                            <button className="btn btn-primary" onClick={()=>history.push(`/details/${id}`)}>Visit here to know more</button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
}

const SingleServicesTherapy = (props) => {
    const { id,title, img } = props.therapy;
    const history = useHistory();
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img style={{ height: "300px" }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <div className="text-center mt-2">
                            <button className="btn btn-primary" onClick={()=>history.push(`/details/${id}`)}>Visit here to know more</button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
}

export default ShowServices;