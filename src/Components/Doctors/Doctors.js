import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import ChildW from './ChildW';
import Experts from './Experts';
import Gp from './Gp';

const Doctors = () => {
    const { path, url } = useRouteMatch();
    return (
        <div className="container d-flex flex-column align-items-center">
            <div className="" >
                <img className="img img-fluid img-thumbnail w-100" src="https://images.news18.com/ibnlive/uploads/2021/06/1625075977_doctors-day-history-new.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal" style={{ height: "600px" }} alt="" />
            </div>
            <div className="anchors mt-3">
                <Nav fill variant="tabs" defaultActiveKey={`${url}/experts`} className="d-flex flex-column flex-md-row  justify-content-between align-items-center">
                    <Nav.Item>
                        <Nav.Link as={Link} to={`${url}/experts`}>Experts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={`${url}/gp`}>General Physicians</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to={`${url}/childandwomen`}>Child and Women</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div>
                <Switch>
                    <Route exact path={`${path}`}>
                        <Experts></Experts>
                    </Route>
                    <Route path={`${path}/experts`}>
                        <Experts></Experts>
                    </Route>
                    <Route path={`${path}/gp`}>
                        <Gp></Gp>
                    </Route>
                    <Route path={`${path}/childandwomen`}>
                        <ChildW></ChildW>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Doctors;