import React from 'react';
import './experiences.css';
import experience from '../../assets/experiance.jpg';
import await1 from '../../assets/await1.png';
import await2 from '../../assets/await2.png';
import await3 from '../../assets/await3.png';
import await4 from '../../assets/await4.png';
import await5 from '../../assets/await5.png';
import ScrollAnimation from 'react-animate-on-scroll';

const Experiences = () => {
    return (
        <div className="bg-dark" style={{ marginTop: "100px" }}>
            <div className="container-fluid p-0">
                <div className="row p-0 m-0">
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-4 d-flex flex-column p-5">
                        <p className='primary-color mt-2'>HOW IT WORKS</p>
                        <div className='fs-1 text-white Unforgettable'>Unforgettable health care experiences await for you</div>
                        <span className='fs-5 text-white Contrary'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</span>
                        <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutLeft' >
                            <div className="card-body p-0">
                                <div className="steps steps-light d-flex mt-4">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '50%' }} />
                                    </div>
                                    <a className="step-item active d-flex flex-column align-items-center">
                                        <div className="step-progress bg-dark"><img src={await1} width={"35px"} alt="Step 1"/></div>
                                        <div className="step-label text-white">Choose Service</div>
                                    </a>
                                    <a className="step-item active  d-flex flex-column align-items-center">
                                        <div className="step-progress bg-dark"><img src={await2} width={"35px"} alt="Step 2" className='innericon' /></div>
                                        <div className="step-label text-white">Book Your Service</div>
                                    </a>
                                    <a className="step-item active  d-flex flex-column align-items-center">
                                        <div className="step-progress bg-dark"><img src={await3} width={"35px"} alt="Step 3" className='innericon' /></div>
                                        <div className="step-label text-white">Receive Your Service</div>
                                    </a>
                                    <a className="step-item active current d-flex flex-column align-items-center">
                                        <div className="step-progress bg-dark "><img src={await4} width={"35px"} alt="Step 4" className='innericon' /></div>
                                        <div className="step-label text-white">Make Payment</div>
                                    </a>
                                    <a className="step-item  d-flex flex-column align-items-center">
                                        <div className="step-progress bg-dark"><img src={await5} width={"35px"} alt="Step 5" className='innericon' /></div>
                                        <div className="step-label text-white">Share Feedback</div>
                                    </a>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                        <img src={experience} className="img-fluid" alt="Experience" style={{ height: "100%" ,objectFit:"cover"}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
