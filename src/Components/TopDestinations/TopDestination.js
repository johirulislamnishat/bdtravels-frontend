import React from 'react';
import { Container } from 'react-bootstrap';
import './TopDestination.css'

const TopDestination = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8 bg-danger mr-1">.col-xs-12 .col-sm-6 .col-md-8</div>
                    <div className="d-none d-md-block col-sm-6 col-md-4 bg-danger">.col-xs-6 .col-md-4</div>
                </div>
                <div className="row">
                    <div className=" d-md-none col-sm-6 col-md-4 bg-danger">.col-xs-6 .col-sm-4</div>
                    <div className="col-sm-6 col-md-4 bg-danger">.col-xs-6 .col-sm-4</div>
                    <div className="col-sm-6 col-md-4 bg-danger">.col-xs-6 .col-sm-4</div>
                    <div className="col-sm-6 col-md-4 bg-danger">.col-xs-6 .col-sm-4</div>
                </div>
            </Container>
        </div>
    );
};

export default TopDestination;