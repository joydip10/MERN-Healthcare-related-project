import React  from 'react';
import { Row } from 'react-bootstrap';
import DoctorDetails from './DoctorDetails/DoctorDetails';
import useHooks from './../Hooks/useHooks';

const Gp = () => {
    const [doctors] = useHooks('https://joydip10.github.io/courseInfo/medicaldata.json', 'doctor');
    return (
        <div>
            <h1>General Physicians</h1>
            <Row xs={1} md={3} className="g-4">
                {doctors.slice(3,6).map(doc=><DoctorDetails key={doc.id} doc={doc}></DoctorDetails>)}
            </Row>
        </div>
    );
};

export default Gp;