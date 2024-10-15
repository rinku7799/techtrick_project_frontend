import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form, Row, Col } from "react-bootstrap";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { RiTimeFill } from "react-icons/ri";

const SurgeryBookModel = ({ show, handleClose }) => {
  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setErrors({ ...errors, form: "Please fill out all required fields" });
    } else {
      alert("Details submitted successfully");
      setLocation("");
      setIsVerified(false);
      handleClose();
    }
  };

  const handleModalClose = () => {
    setLocation("");
    setIsVerified(false);
    setErrors({});
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleModalClose}>
        <Modal.Header closeButton className="text-center sky-background-color">
          <Modal.Title>Rent Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col lg={6}>
                  <div className="py-4 px-2 rounded-4 mt-3 lightgray-bg-color">
                    <div>Select a date</div>
                    <Row className="mt-2">
                      <Col lg={6} md={6} sm={12}>
                        <div className="border rounded-2 text-center" style={{ backgroundColor: "white" }}>
                          <SlCalender />
                          <p>Select Start Date</p>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div className="border rounded-2 text-center" style={{ backgroundColor: "white" }}>
                          <SlCalender />
                          <p>Select End Date</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="py-4 px-2 rounded-4 mt-3 lightgray-bg-color">
                    <div>Select a time</div>
                    <Row className="mt-2">
                      <Col lg={6} md={6} sm={12}>
                        <div className="border rounded-2 text-center" style={{ backgroundColor: "white" }}>
                          <IoMdTime />
                          <p>Select Start Time</p>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div className="border rounded-2 text-center" style={{ backgroundColor: "white" }}>
                          <RiTimeFill />
                          <p>Select End Time</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Form className="form py-4 px-3 rounded-3 mt-3 lightgray-bg-color">
                    <h4 style={{ fontWeight: "600" }}>Personal Details</h4>
                    <Form.Group className="mt-4" controlId="validationCustom11">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control required type="text" placeholder="Enter Full Name*" />
                      <Form.Control.Feedback type="invalid">Please enter your full name</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-4" controlId="validationCustom12">
                      <Form.Label>Contact No</Form.Label>
                      <Form.Control required type="text" placeholder="Enter Contact No*" />
                      <Form.Control.Feedback type="invalid">Please enter your contact number</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-4" controlId="validationCustom13">
                      <Form.Label>Email Id</Form.Label>
                      <Form.Control required type="email" placeholder="Email Id" />
                      <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mt-4" controlId="validationCustom14">
                      <Form.Label>Address</Form.Label>
                      <Form.Control required type="text" placeholder="Address" />
                      <Form.Control.Feedback type="invalid">Please enter your address</Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              {errors.form && <div className="text-danger">{errors.form}</div>}
              <Modal.Footer className="border-0">
                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SurgeryBookModel;
