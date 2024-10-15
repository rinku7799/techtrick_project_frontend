import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import hospitalImage from "../../assets/hospital.jpg";
import { LuDot } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { PiGraduationCap } from "react-icons/pi";
import { FaMoneyBill } from "react-icons/fa6";

const HospitalAppoinmentModel = ({ show, handleClose }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="text-center py-1 sky-background-color">
                    <Modal.Title>
                        <span className="fs-5">Book Your Hospital Now</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="sky-background-color d-flex flex-wrap rounded-3 align-items-center h-100 w-100">
                        <img
                            src={hospitalImage}
                            className="img-fluid rounded-start"
                            alt="Hospital"
                            style={{ width: "150px", height: "140px", objectFit: "cover", borderRadius: "10px 0 0 10px" }}
                        />
                        <div className="ms-4 mt-3" style={{ fontSize: "12px" }}>
                            <span className="fw-bolder fs-5">Kiran Hospital Multi Super Specialist</span>
                            <div className="primary-color">Hospital Specialists<LuDot />12 Years Exp.</div>
                            <div className="d-flex">
                                <PiGraduationCap className="fs-5 me-3" />
                                <span>SAMAST PATIDAR AAROGYA TRUST is a “NOT FOR PROFIT” Organization.</span>
                            </div>
                            <div className="d-flex">
                                <FaMoneyBill className="fs-5 me-3" />
                                <span><span className='fw-bold me-1'>10</span> Bed's</span>
                            </div>
                            <div className="d-flex">
                                <CiLocationOn className="fs-5 me-3" />
                                <p>Nidaan Hospital, Sector-1, Gurgaon</p>
                            </div>
                        </div>
                    </div>
                    <Form className="mt-3">
                        <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label>Name*</Form.Label>
                            <Form.Control type="text" placeholder="Patient Name*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupMobileNumber">
                            <Form.Label>Mobile Number*</Form.Label>
                            <Form.Control type="text" placeholder="Mobile Number*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupCity">
                            <Form.Label>City*</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Select City*</option>
                                <option value="1">Surat</option>
                                <option value="2">Baroda</option>
                                <option value="3">Rajkot</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupDisease">
                            <Form.Label>Disease*</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Select Disease*</option>
                                <option value="1">Hepatitis</option>
                                <option value="2">Malaria</option>
                                <option value="3">Amoebiasis</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    <Button variant="primary" onClick={handleClose} className="w-100">
                        Book Appointment
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default HospitalAppoinmentModel;
