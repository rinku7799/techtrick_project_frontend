import Modal from "react-bootstrap/Modal";
import { Button, Form, Row, Col } from "react-bootstrap";
import medicalservice6 from "../../assets/medicalservice6.png";
import { LuDot } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { PiGraduationCap } from "react-icons/pi";
import { FaMoneyBill } from "react-icons/fa6";

const MedicalDetailModel = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          className="text-center py-1 sky-background-color"
        >
          <Modal.Title>
            <span className="fs-5">Book Your Ambulance</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-wrap rounded-3 align-items-center sky-background-color">
            <img
              src={medicalservice6}
              className="img-fluid rounded-start"
              alt="Doctor"
              style={{
                objectFit: "cover",
                height: "130px",
                borderRadius: "10px 0 0 10px",
              }}
            />
            <div className="ms-4 mt-3" style={{ fontSize: "12px" }}>
              <span className="fw-bolder fs-6">
                Shree Kruppa Ambulance Service
              </span>
              <div className="primary-color">
                Full AC, Emergency Kit, Oxygen Cylinder
              </div>
              <div className="d-flex">
                <FaMoneyBill className="fs-5 me-3" />
                <span>₹ 80  (Per km)</span>
              </div>
              <div className="d-flex">
                <CiLocationOn className="fs-5 me-3" />
                <p>Nidaan Hospital , Sector-1 , Surat, Gujarat</p>
              </div>
            </div>
          </div>
          <Form className="mt-3">
            <Row>
              <Col lg={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput01"
                >
                  <Form.Label>
                    Your name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Full name"
                    name="name"
                    autoFocus
                    className="p-2"
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput02"
                >
                  <Form.Label>
                    Email Id<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    className="p-2"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput03"
                >
                  <Form.Label>
                    Phone Number<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    name="phoneNumber"
                    className="p-2"
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput04"
                >
                  <Form.Label>
                    Date and Time<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="DD/MM/YYYY"
                    name="subject"
                    className="p-2"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput05"
                >
                  <Form.Label>
                    Address<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    name="category"
                    className="p-2"
                  />
                </Form.Group>
              </Col>
              <Col lg={6}></Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea2"
                >
                  <Form.Label>
                    Note<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Description..."
                    name="issueDescription"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <div className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleClose}>
           Submit
          </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default MedicalDetailModel;
