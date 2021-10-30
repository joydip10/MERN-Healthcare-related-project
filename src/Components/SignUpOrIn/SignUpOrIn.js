import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Signup from './Signup';
import Signin from './Signin';


const SignUpOrIn = () => {
    const [check, setCheck] = useState(true);
    const checkChecker=(e)=>{
        setCheck(e.target.checked);
    }
    return (
        <div className="d-flex flex-column align-items-center">
                <Form.Group className="mt-5 pb-0 mb-0" controlId="formBasicCheckbox">
                    <Form.Check onChange={checkChecker} type="checkbox" label="Registered Yet?" defaultChecked/>
                </Form.Group>
                {
                    (check===true)
                    &&
                    <Signin/>
                }
                {
                    (check===false)
                    &&
                    <Signup/>
                }
        </div>
    );
};

export default SignUpOrIn;