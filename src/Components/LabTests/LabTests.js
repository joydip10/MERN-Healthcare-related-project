import React from 'react';
import { Row } from 'react-bootstrap';
import useHooks from './../Hooks/useHooks';
import LabTest from './LabTest';

const LabTests = () => {
    const [labs]=useHooks('https://joydip10.github.io/courseInfo/medicaldata.json','lab');
    return (
        <div className="container d-flex flex-column align-items-center mt-3">
            <h1 className="mb-2">Book for a <span className="text-primary">Lab Test</span></h1>
            <Row xs={1} md={3} className="g-4">
                {labs.map(lab=> <LabTest key={lab.id} lab={lab} />)}
            </Row>
        </div>
    );
};

export default LabTests;