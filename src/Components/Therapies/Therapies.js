import React from 'react';
import { Row } from 'react-bootstrap';
import useHooks from './../Hooks/useHooks';
import Therapy from './Therapy';

const Therapies = () => {
    const [therapies]=useHooks('https://joydip10.github.io/courseInfo/medicaldata.json','therapy');
    return (
        <div className="container d-flex flex-column align-items-center mt-3">
            <h1 className="mb-2">Book for a <span className="text-primary">Therapatic Session</span></h1>
            <Row xs={1} md={3} className="g-4">
                {therapies.map(therapy=> <Therapy key={therapy.id} therapy={therapy} />)}
            </Row>
        </div>
    );
};

export default Therapies;