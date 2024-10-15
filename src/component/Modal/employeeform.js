import React, { useState } from 'react';
import { Col, Row, Form, Modal, Button } from 'react-bootstrap';

const EmployeeFormModel = ({ show, handleClose }) => {
    const [date, setDate] = useState('');

    const fields = [
        { id: 1, label: "Full Name", type: "text", placeholder: "Enter your full name here", required: true },
        { id: 2, label: "Company Name", type: "text", placeholder: "Enter company name here", required: true },
        { id: 3, label: "Your Position in the Company", type: "text", placeholder: "Enter your position in the company here", required: true },
        { id: 4, label: "Company Address", type: "text", placeholder: "Enter company address here", required: true },
        { id: 5, label: "City", type: "text", placeholder: "Enter city here", required: true },
        { id: 6, label: "State", type: "text", placeholder: "Please select state", required: true },
        { id: 7, label: "Zip Code", type: "text", placeholder: "Enter zip code here", required: true },
        { id: 8, label: "Phone Number", type: "text", placeholder: "Enter phone number here", required: true },
        { id: 9, label: "Email Id", type: "email", placeholder: "Enter email here", required: true },
        { id: 10, label: "Best Time to Call", type: "text", placeholder: "Please select", required: true },
        { id: 11, label: "Preferred Date", type: "date", placeholder: "Please select", required: false },
    ];

    const renderField = ({ id, label, type, placeholder, required }) => (
        <Col lg={4} key={id}>
            <Form.Group className="mb-3" controlId={`exampleForm.ControlInput${id}`}>
                <Form.Label>{label}{required && <span className='text-danger'>*</span>}</Form.Label>
                <Form.Control
                    type={type}
                    placeholder={placeholder}
                    className='p-2'
                    value={type === 'date' ? date : undefined}
                    onChange={type === 'date' ? (e) => setDate(e.target.value) : undefined}
                    style={type === 'date' && !date ? { color: 'gray' } : undefined}
                />
            </Form.Group>
        </Col>
    );

    return (
        <Modal show={show} onHide={handleClose} className="foremployeeform">
            <Modal.Header closeButton className='sky-background-color'>
                <Modal.Title className='text-center fw-bolder'>Employers Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        {fields.slice(0, 3).map(renderField)}
                    </Row>
                    <Row>
                        {fields.slice(3, 6).map(renderField)}
                    </Row>
                    <Row>
                        {fields.slice(6, 9).map(renderField)}
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>What Position(s) in Your Company Would You Like to Fill? Please Also Provide the Qualifications ans/ or the Number of Staff You Need<span className='text-danger'>*</span></Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='Enter position(s) in your company you like to fill here' />
                    </Form.Group>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3" controlId="formGroupContactPreference">
                                <Form.Label>How do You Prefer to be Contacted?<span className='text-danger'>*</span></Form.Label>
                                <Form.Select name='contactPreference' className='p-2'>
                                    <option value="">Please select</option>
                                    <option value="select1">select1</option>
                                    <option value="select2">select2</option>
                                    <option value="select3">select3</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        {fields.slice(9, 11).map(renderField)}
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                        <Form.Label>Comments</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='Enter comments here' />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-center border-0'>
                <Button variant="primary" onClick={handleClose} className='px-5 p-3'>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EmployeeFormModel;
