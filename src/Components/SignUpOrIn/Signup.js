import React from 'react';
import { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import GetAuth from '../Hooks/GetAuth';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err, setErr] = useState('');

    const { user, error, signUpWithEP, googleSignIn, logOut, isLoading,setUser,setDisplayName,setError,setUserName,setIsLoading } = GetAuth();

    const location = useLocation();
    const history = useHistory();
    let redirects = "/home";
    if (location.state) {
        if (location.state.from) {
            redirects = location.state.from;
        }
    }

    const onName = (e) => {
        setName(e.target.value);
    }
    const onEmail = (e) => {
        setEmail(e.target.value);
    }
    const onPassword = (e) => {
        setPassword(e.target.value);
    }
    const onConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "") {
            setErr("Didn't input password");
        }
        else if (password !== confirmPassword) {
            setErr("Password didn't match")
        }
        else if (password.length < 6) {
            setErr("Password too short")
        }
        else {
            setErr('');
            signUpWithEP(name, email, password)
            .then((res) => {
                setUser(res.user);
                setUserName(name);
                setError("");
                history.push(redirects);
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(()=>setIsLoading(false));
        }
    }
    const googleSign=()=>{
        googleSignIn()
        .then(res => {
            setError("");
            history.push(redirects);
        })
        .catch((err) => {
            setError(err.message)
        })
        .finally(()=>setIsLoading(false));
    }
    return (
        <div className="d-flex flex-column align-items-center  p-5 pt-0 signup">
            <h2>Please <span className="text-primary mb-0 mt-2 pb-0">Sign up</span></h2>
            <br />
            {
                (isLoading === true) &&
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
            {
                (isLoading === false) &&
                <Form onSubmit={handleSubmit}>

                    {/* name */}
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={onName} type="text" placeholder="Enter name" />
                    </Form.Group>

                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={onEmail} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={onPassword} type="password" placeholder="Password" required />
                        <Form.Text className="text-muted">
                            {err}
                        </Form.Text>
                    </Form.Group>

                    {/* confirm-pass */}
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={onConfirmPassword} type="password" placeholder="Confirm Password" required />
                        <Form.Text className="text-muted">
                            {err}
                        </Form.Text>
                    </Form.Group>


                    <div className="text-center mt-2">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <h6 className="text-danger">{error.substr(9)}</h6>
                    </div>


                </Form>

            }
            <div className="text-center mt-2">
                {
                    user?.email ?
                        <Button variant="danger" onClick={logOut}>
                            Sign out as {user.displayName}
                        </Button>
                        :
                        <Button variant="danger" onClick={googleSign}>
                            <i class="fab fa-google"></i> Google SignIn
                        </Button>
                }
                <h6 className="text-danger">{error.substr(9)}</h6>
            </div>
        </div>
    );
};

export default Signup;