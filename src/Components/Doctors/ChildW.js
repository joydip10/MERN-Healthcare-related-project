import React from 'react';
import { Row } from 'react-bootstrap';
import DoctorDetails from './DoctorDetails/DoctorDetails';
import useHooks from './../Hooks/useHooks';

const ChildW = () => {
    const [doctors] = useHooks('https://joydip10.github.io/courseInfo/medicaldata.json', 'doctor');
    return (
        <div>
            <h1>Child and Women</h1>
            <Row xs={1} md={3} className="g-4">
                {doctors.slice(6, 9).map(doc => <DoctorDetails key={doc.id} doc={doc} />)}
            </Row>
        </div>
    );
};

export default ChildW;