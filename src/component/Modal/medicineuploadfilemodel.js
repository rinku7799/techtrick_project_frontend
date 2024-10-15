import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {
  Button,
  Col,
  Form,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const MedicineDeliveryUploadPrescriptionModel = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    category: "",
    issueDescription: "",
    fileName: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      fileName: file ? file.name : ""
    });
  };

  return (
    <Modal show={show} onHide={handleClose} className="applyjobseekersmodel">
      <Modal.Header closeButton className="text-center py-1 sky-background-color">
        <Modal.Title>
          <span className="fs-5 fw-bolder">Upload Prescription</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="mt-3">
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput01">
                <Form.Label>
                  Your name<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Full name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoFocus
                  className="p-3"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput02">
                <Form.Label>
                  Email Id<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-3"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput03">
                <Form.Label>
                  Phone Number<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="p-3"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput10">
                <Form.Label htmlFor="companyCertificate">
                Upload Prescription
                </Form.Label>
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="Choose file to upload"
                    value={formData.fileName}
                    readOnly
                    className="p-2"
                    style={{ borderRight: "none" }}
                  />
                  <input
                    id="companyCertificateFile"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="companyCertificateFile"
                    className="input-group-text"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <span
                      className="border p-2"
                      style={{ backgroundColor: "#EDEDED" }}
                    >
                      Browse files
                    </span>
                  </label>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput05">
                <Form.Label>
                Address<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="p-3"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput05">
                <Form.Label>
                Date and  Time<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="DD/MM/YYYY"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="p-3"
                />
              </Form.Group>
            </Col>  
          </Row>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                <Form.Label>
                Note<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description..."
                  name="issueDescription"
                  value={formData.issueDescription}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Modal.Footer className="border-0 d-flex justify-content-center  ">
          <Button
            variant="primary"
            onClick={handleClose}
            className="px-5 p-3"
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default MedicineDeliveryUploadPrescriptionModel;
