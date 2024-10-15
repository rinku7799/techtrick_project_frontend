import Modal from 'react-bootstrap/Modal';
import { Button, Col, Form, Row, InputGroup, FormControl } from 'react-bootstrap';

const ApplyJobSeekersModel = ({ show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} className='applyjobseekersmodel'>
                <Modal.Header closeButton className="text-center py-1 sky-background-color">
                    <Modal.Title><span className="fs-5 fw-bolder">Apply Job Seekers</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="mt-3">
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput01">
                                    <Form.Label>Name<span className='text-danger'>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Full name"
                                        autoFocus
                                        className='p-2'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput02">
                                    <Form.Label>Phone Number<span className='text-danger'>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter phone number "
                                        className='p-2'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput03">
                                    <Form.Label>Email Id<span className='text-danger'>*</span></Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email "
                                        className='p-2'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput04">
                                    <Form.Label>Gender<span className='text-danger'>*</span></Form.Label>
                                    <Form.Select aria-label="Default select example" className='p-2'>
                                        <option>Please select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput05">
                                    <Form.Label>At/Plot no/House no<span className='text-danger'>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter no"
                                        className='p-2'
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput06">
                                    <Form.Label>Area<span className='text-danger'>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Area"
                                        className='p-2'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput07">
                                    <Form.Label>City<span className='text-danger'>*</span></Form.Label>
                                    <Form.Select aria-label="Default select example" className='p-2'>
                                        <option>Select</option>
                                        <option value="1">Surat</option>
                                        <option value="2">Baroda</option>
                                        <option value="3">Rajkot</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput08">
                                    <Form.Label>District<span className='text-danger'>*</span></Form.Label>
                                    <Form.Select aria-label="Default select example" className='p-2'>
                                        <option>select</option>
                                        <option value="Surat">Surat</option>
                                        <option value="Baroda">Baroda</option>
                                        <option value="Other">Other</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput09">
                                    <Form.Label>State<span className='text-danger'>*</span></Form.Label>
                                    <Form.Select aria-label="Default select example" className='p-2'>
                                        <option>select</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="UP">UP</option>
                                        <option value="Other">Other</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput10">
                                    <Form.Label>Pin code<span className='text-danger'>*</span></Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter"
                                        className='p-2'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="companyDocument">Upload Certificate<span className='text-danger'>*</span></Form.Label>
                                    <InputGroup>
                                        <FormControl
                                            type="text"
                                            placeholder="Choose file to upload"
                                            id="companyDocument"
                                            style={{ borderRight: "none" }}
                                            className="p-2"
                                        />
                                        <input
                                            id="companyDocumentFile"
                                            type="file"
                                            style={{ display: "none" }}

                                        />
                                        <label htmlFor="companyDocumentFile" className="input-group-text p-2" style={{ backgroundColor: "#fff" }}>
                                            <span className="border p-1 rounded-1" style={{ backgroundColor: "#EDEDED",fontSize:"12px"  }}>Browse files</span>
                                        </label>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="companyDocument">Upload Resume<span className='text-danger'>*</span></Form.Label>
                                    <InputGroup>
                                        <FormControl
                                            type="text"
                                            placeholder="Choose file to upload"
                                            id="companyDocument"
                                            style={{ borderRight: "none" }}
                                            className="p-2"
                                        />
                                        <input
                                            id="companyDocumentFile"
                                            type="file"
                                            style={{ display: "none" }}
                                        />
                                        <label htmlFor="companyDocumentFile" className="input-group-text p-2" style={{ backgroundColor: "#fff" }}>
                                            <span className="border p-1 rounded-1" style={{ backgroundColor: "#EDEDED" ,fontSize:"12px" }}>Browse files</span>
                                        </label>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                    <Modal.Footer className='border-0'>
                        <Button variant="primary" onClick={handleClose} className='px-5 p-2'>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default ApplyJobSeekersModel;