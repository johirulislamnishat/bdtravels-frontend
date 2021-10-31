import React from 'react';
import { Container } from 'react-bootstrap';
import './TopDestination.css'

const TopDestination = () => {
    return (
        <div>
            <Container className="mb-5">
                <h2 className='text-center'>Gallery</h2>
                <div className="row mt-3 mb-3">
                    <div className="col-xs-12 col-sm-12 col-md-8   mr-1"><img src="https://media.istockphoto.com/photos/mature-couple-hike-above-lake-lugano-in-the-morning-picture-id1292251389?k=20&m=1292251389&s=612x612&w=0&h=6Oagp_uOGmyNpYUw3CKiigdqM2TyBi8O3PlCG4lkayA=" alt="" /></div>
                    <div className="d-none d-md-block col-sm-6 col-md-4  "><img src="https://media.istockphoto.com/photos/family-visiting-a-fishing-village-picture-id1187731949?k=20&m=1187731949&s=612x612&w=0&h=J30r20jG7nc7HcHKIFMYOomXKUgRaGbG7-mgzO89SoE=" alt="" /></div>
                </div>
                <div className="row">
                    <div className=" d-md-none col-sm-6 col-md-4  "><img src="https://media.istockphoto.com/photos/tourist-taking-photo-of-fjord-landscape-norway-picture-id1150972267?k=20&m=1150972267&s=612x612&w=0&h=zD9wjj2F1ryB9SaCufxpVkA9wnRnzvLmQ79jiohS5-I=" alt="" /></div>
                    <div className="col-sm-6 col-md-4  "><img src="https://media.istockphoto.com/photos/happy-to-travel-again-picture-id1305828428?k=20&m=1305828428&s=612x612&w=0&h=ivERWAkXreCeJnHavwnq1K7LuwML_mhO9DXDXXOc-fw=" alt="" /></div>
                    <div className="col-sm-6 col-md-4  "><img src="https://media.istockphoto.com/photos/airplane-ready-to-take-off-from-runway-a-big-passenger-picture-id482234232?k=20&m=482234232&s=612x612&w=0&h=m0kPjEVfg4WEe5tqcfQ8Wr8m_uxG91AydXKPHOBQxfg=" alt="" /></div>
                    <div className="col-sm-6 col-md-4  "><img src="https://media.istockphoto.com/photos/young-travler-taking-photo-at-queen-town-in-new-zealand-picture-id617376290?k=20&m=617376290&s=612x612&w=0&h=zkaE6zmgOUsWX7bd8Q12Whb-tmsd8H4jVmphsPtKZMg=" alt="" /></div>
                </div>
            </Container>
        </div>
    );
};

export default TopDestination;