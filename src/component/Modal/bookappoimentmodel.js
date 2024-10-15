import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import favorite3 from '../../assets/favorite3.png'
import { LuDot } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { PiGraduationCap } from "react-icons/pi";
import { FaMoneyBill } from "react-icons/fa6";

const BookAppoinmentModel = ({ show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton className="text-center py-1 sky-background-color">
                    <Modal.Title><span className="fs-5">Book Your Consultation Now</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-wrap rounded-3 align-items-center sky-background-color">
                        <img src={favorite3} className="img-fluid rounded-start" alt="Doctor" style={{ objectFit: "cover", height: "130px", borderRadius: "10px 0 0 10px" }} />
                        <div className="ms-4 mt-3" style={{ fontSize: "12px" }}>
                            <span className="fw-bolder fs-6">Dr. Frances Sutton</span>
                            <div className="primary-color">Nursing Specialists <LuDot />12 Years Exp.</div>
                            <div className="d-flex">
                                <PiGraduationCap className="fs-5 me-3" />
                                <span>MBBS, DM, DNB (Cardiology).</span>
                            </div>
                            <div className="d-flex">
                                <FaMoneyBill className="fs-5 me-3" />
                                <span>₹ 800 at clinic</span>
                            </div>
                            <div className="d-flex">
                                <CiLocationOn className="fs-5 me-3" />
                                <p>Nidaan Hospital, Sector-1, Gurgaon</p>
                            </div>
                        </div>
                    </div>
                    <Form className="mt-3">
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Name*</Form.Label>
                            <Form.Control type="email" placeholder="Patient Name*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
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
    )
}
export default BookAppoinmentModel;