import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import question from '../../assets/question.jpg';

const Question = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-7 col-md-12 my-5 px-5">
                        <p className='primary-color'>FREQUENTLY ASKED QUESTION</p>
                        <p className='h1'>What can we help with</p>
                        <p className='h1 mb-4'>today?</p>
                        <div>
                        <Accordion defaultActiveKey="0">  
                            <Accordion.Item eventKey="0" className=' mb-4 shadow'>
                                <Accordion.Header><span className='fw-semibold fs-5'>I would like to all services at home. How is it possible?</span></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>You can book our at-home health services in three simple steps: </li>
                                        <li>Contact us/Book appointment and talk to our support team </li>
                                        <li>Select service after baseline evaluation or as per your requirement </li>
                                        <li>Pay for the service</li>
                                        <li>Our support team will suggest what is best for your specific needs.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='border mb-4 shadow'>
                                <Accordion.Header><span className='fw-semibold fs-5'>How can I book Appointment?</span></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>You can book our at-home health services in three simple steps: </li>
                                        <li>Contact us/Book appointment and talk to our support team </li>
                                        <li>Select service after baseline evaluation or as per your requirement </li>
                                        <li>Pay for the service</li>
                                        <li>Our support team will suggest what is best for your specific needs.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='border mb-4 shadow'>
                                <Accordion.Header><span className='fw-semibold fs-5'>Are all your professionals medically trained?</span></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>You can book our at-home health services in three simple steps: </li>
                                        <li>Contact us/Book appointment and talk to our support team </li>
                                        <li>Select service after baseline evaluation or as per your requirement </li>
                                        <li>Pay for the service</li>
                                        <li>Our support team will suggest what is best for your specific needs.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12" >
                        <img src={question} className='img-fluid' alt="Question" style={{borderRadius:"15px",objectFit:"cover"}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question;
