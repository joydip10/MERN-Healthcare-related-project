import React from 'react';
import { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import GetAuth from '../Hooks/GetAuth';

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const { user, error, signInWithEP, googleSignIn, logOut, isLoading, displayName, setDisplayName, setUser, setError,setIsLoading,setUserName } = GetAuth();

    const location = useLocation();
    const history = useHistory();
    let redirects = "/home";
    if (location.state) {
        if (location.state.from) {
            redirects = location.state.from;
        }
    }

    const onEmail = (e) => {
        setEmail(e.target.value);
    }
    const onPassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "") {
            setErr("Didn't input password");
        }
        else {
            setErr('');
            signInWithEP(email, password)
                .then((res) => {
                    setError("");
                    setUserName(res.user.displayName);
                    setDisplayName(res.user.displayName);
                    history.push(redirects);
                })
                .catch((err) => {
                    setError(err.message);
                })
                .finally(()=>setIsLoading(false));
        }
    }
    const googleSign = () => {
        googleSignIn()
            .then(res => {
                setUser(res.user);
                setError("");
                setDisplayName(res.user.displayName);
                history.push(redirects);
            })
            .catch(err => setError(err.message))
            .finally(()=>setIsLoading(false));
    }
    return (
        <div className="d-flex flex-column align-items-center  p-5 pt-0 login">
            <h2>Please <span className="text-primary mb-0 mt-2 pb-0">Sign in</span></h2>
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
                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={onEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={onPassword} type="password" placeholder="Password" required />
                        <Form.Text className="text-muted">
                            {err}
                        </Form.Text>
                    </Form.Group>

                    <div className="text-center mt-2">
                        {
                            (displayName !== "") &&
                            <Button variant="warning" onClick={logOut}>
                                Log Out
                            </Button>
                        }
                        {
                            (displayName === "") &&
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        }
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

export default Signin;