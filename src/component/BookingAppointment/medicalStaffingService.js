import { Col, Container, Row, Form } from "react-bootstrap";
import "./BookingAppointment.css";
import medicalbookappoinmentimg from '../../assets/medicalbookappoinment.png'
const MedicalBookAppoinment = () => {
    return (
        <>
            <div className="medicalbookappoinment">
                <Container className="mt-4">
                    <Row>
                        <Col lg={8} className="my-4">
                            <img src={medicalbookappoinmentimg} />
                        </Col>
                        <Col lg={4} className="my-4">
                            <Form className="form ">
                                <h4 style={{ fontWeight: "600" }}>
                                    Find Top Talent in the Healthcare Industry
                                </h4>
                                <Form.Group
                                    className="mt-4"
                                    md="4"
                                    controlId="validationCustom01"
                                >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Full Name*"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    className="mt-4"
                                    md="4"
                                    controlId="validationCustom02"
                                >
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Your Company*"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    className="mt-4"
                                    md="4"
                                    controlId="validationCustom03"
                                >
                                    <Form.Label>Company Size</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter Company Size" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    className="mt-4"
                                    md="4"
                                    controlId="validationCustom04"
                                >
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control required type="email" placeholder="Email Id" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    className="mt-4"
                                    md="4"
                                    controlId="validationCustom05"
                                >
                                    <Form.Label>Your Phone</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter No" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    className="mt-4"
                                    md="4"
                                    controlId="validationCustom06"
                                >
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Message..." name='address' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <button className="btn btn-primary btn-rounded-pill col-12 mt-4">
                                    Send Message
                                </button>
                                <p className="text-center mt-2">
                                    By Submitting the form, you Agree to TTHC
                                </p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
export default MedicalBookAppoinment;