import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from 'react-router-dom';
import GetAuth from './../Hooks/GetAuth';
const Header = () => {
    const { displayName,user,logOut } = GetAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><h3><span className="text-primary">Wellness</span> Center</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex align-items-center">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/doctors">Doctors</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/labTests">Pathology</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/therapies">Therapies</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                            {
                                (user?.email)
                                ?<Nav.Link onClick={logOut}>Sign out</Nav.Link>
                                :<Nav.Link as={Link} to="/signupin">Register/Login</Nav.Link>
                            }
                        </Nav>
                        {
                            (user.displayName) &&
                            <Navbar.Text className="d-block text-center">
                                Signed in as: {user.displayName}
                            </Navbar.Text>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;