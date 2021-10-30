import React from 'react';

const AboutUs = () => {
    return (
        <div className="d-flex flex-column align-items-center p-5">
            <h2 className="text-danger">About <span className="text-primary">Us</span></h2>
            <div className="p-md-5 pt-0">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-5 pt-0">
                    <div className="me-2">

                        <img style={{ width: "600px", height: "400px" }} className="img-fluid img-thumbnail rounded-circle" src="https://www.pinkvilla.com/files/styles/ld-image/public/Aamir-Khan-3-idiots.jpg" alt="" />
                    </div>

                    <blockquote>In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.</blockquote>
                </div>

                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-5">
                    <div className="me-2"><img style={{ width: "600px", height: "400px" }} className="img-fluid img-thumbnail rounded-circle" src="https://hindi.laughingcolours.com/wp-content/uploads/2020/05/1-113.jpg" alt="" /></div>
                    <blockquote>In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.</blockquote>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-5">
                    <div className="me-2"><img style={{ width: "600px", height: "400px" }} className="img-fluid img-thumbnail rounded-circle" src="https://i.cdn.newsbytesapp.com/images/l2620210325140104.png" alt="" /></div>
                    <blockquote>In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.</blockquote>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;