import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history=useHistory()
    return (
        <div className="d-flex flex-column align-items-center mt-4">
            <img className="img-fluid rounded-circle img-thumbnail" src="https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1" alt=""/>
            <button className="btn btn-primary mt-3 mb-2" onClick={()=>history.push('/home')}> Go to the homepage</button>
        </div>
    );
};

export default NotFound;