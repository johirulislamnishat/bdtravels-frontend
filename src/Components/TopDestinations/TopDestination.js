import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './TopDestination.css'

const TopDestination = () => {
    return (
        <div>
            <Container className="mb-5">
                <h2 className='text-center textColor'>Gallery</h2>
                <div className="row mt-3 mb-3">
                    <div className="col-xs-12 col-sm-12 col-md-8   mr-1">
                        <Card className="text-white">
                            <Card.Img src="https://media.istockphoto.com/photos/mature-couple-hike-above-lake-lugano-in-the-morning-picture-id1292251389?k=20&m=1292251389&s=612x612&w=0&h=6Oagp_uOGmyNpYUw3CKiigdqM2TyBi8O3PlCG4lkayA=" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Tour USA</Card.Title>
                                <Card.Text>Tourism, the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure
                                </Card.Text>
                                <Card.Text>300+</Card.Text>
                            </Card.ImgOverlay>
                        </Card>

                    </div>
                    <div className="d-none d-md-block col-sm-6 col-md-4  ">
                        <div className='d-flex flex-column'>
                            <Card className="text-white">
                                <Card.Img src="https://media.istockphoto.com/photos/family-visiting-a-fishing-village-picture-id1187731949?k=20&m=1187731949&s=612x612&w=0&h=J30r20jG7nc7HcHKIFMYOomXKUgRaGbG7-mgzO89SoE=" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Toranto Canada</Card.Title>
                                    <Card.Text className='text-truncate'>
                                        This is a supporting text below as a natural lead-in to
                                        additional travel. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>900+</Card.Text>
                                </Card.ImgOverlay>
                            </Card>

                            <Card className="text-white cardImage">
                                <Card.Img src="https://media.istockphoto.com/photos/family-visiting-a-fishing-village-picture-id1187731949?k=20&m=1187731949&s=612x612&w=0&h=J30r20jG7nc7HcHKIFMYOomXKUgRaGbG7-mgzO89SoE=" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Go To UK</Card.Title>
                                    <Card.Text className='text-truncate'>
                                        Process of spending time away from home in pursuit of recreation, relaxation, and pleasure
                                    </Card.Text>
                                    <Card.Text>67+</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className=" d-md-none col-sm-6 col-md-4  ">
                        <Card className="text-white">
                            <Card.Img src="https://media.istockphoto.com/photos/tourist-taking-photo-of-fjord-landscape-norway-picture-id1150972267?k=20&m=1150972267&s=612x612&w=0&h=zD9wjj2F1ryB9SaCufxpVkA9wnRnzvLmQ79jiohS5-I=" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Tourism Council (WTTC)</Card.Title>
                                <Card.Text className='text-truncate'>
                                    The World Travel & Tourism Council (WTTC) represents the Travel & Tourism sector globally. Our Members include over 200 CEOs
                                </Card.Text>
                                <Card.Text>566+</Card.Text>
                            </Card.ImgOverlay>
                        </Card>

                    </div>

                    <div className="col-sm-6 col-md-4  ">
                        <Card className="text-white">
                            <Card.Img src="https://media.istockphoto.com/photos/happy-to-travel-again-picture-id1305828428?k=20&m=1305828428&s=612x612&w=0&h=ivERWAkXreCeJnHavwnq1K7LuwML_mhO9DXDXXOc-fw=" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Outlined at Barcelona</Card.Title>
                                <Card.Text className='text-truncate'>
                                    Tourism's Sustainable Future Outlined at Barcelona Summit ... build a more prosperous and peaceful world through tourism
                                </Card.Text>
                                <Card.Text>435+</Card.Text>
                            </Card.ImgOverlay>
                        </Card>

                    </div>
                    <div className="col-sm-6 col-md-4  ">
                        <Card className="text-white">
                            <Card.Img src="https://media.istockphoto.com/photos/airplane-ready-to-take-off-from-runway-a-big-passenger-picture-id482234232?k=20&m=482234232&s=612x612&w=0&h=m0kPjEVfg4WEe5tqcfQ8Wr8m_uxG91AydXKPHOBQxfg=" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Tourism Authority of Thailand</Card.Title>
                                <Card.Text className='text-truncate'>
                                    The official site of Tourism Authority of Thailand. Amazing Thailand, Travel information, Travel guide, maps, hotels, accommodation
                                </Card.Text>
                                <Card.Text>534+</Card.Text>
                            </Card.ImgOverlay>
                        </Card>

                    </div>
                    <div className="col-sm-6 col-md-4  ">
                        <Card className="text-white">
                            <Card.Img src="https://media.istockphoto.com/photos/young-travler-taking-photo-at-queen-town-in-new-zealand-picture-id617376290?k=20&m=617376290&s=612x612&w=0&h=zkaE6zmgOUsWX7bd8Q12Whb-tmsd8H4jVmphsPtKZMg=" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>ourism Management at ScienceDirect</Card.Title>
                                <Card.Text className='text-truncate'>
                                    The Ministry of Tourism is running a scheme under which National Tourism Awards are given to Travel Agents and Tour Operators including best Adventure Tour
                                </Card.Text>
                                <Card.Text>324+</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopDestination;