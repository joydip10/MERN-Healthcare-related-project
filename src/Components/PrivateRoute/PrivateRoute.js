import React from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";
import GetAuth from './../Hooks/GetAuth';
import { Spinner } from 'react-bootstrap';

function PrivateRoute({ children, ...rest }) {
    let { user,isLoading } = GetAuth();
    return (
        <div>
            {
                (isLoading===true) &&
                <div className="text-center">
                    <Spinner animation="grow" />
                </div>
            }
            {
                (isLoading===false) &&

                <Route
                    {...rest}
                    render={({ location }) =>
                        user.email ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/signupin",
                                    state: { from: location }
                                }}
                            />
                        )
                    }
                />
            }
        </div>
    );
}

export default PrivateRoute;