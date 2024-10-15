import Modal from "react-bootstrap/Modal";
import {
  Button,
  Col,
  Form,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import lab1 from "../../assets/lab1.png";
import { CiLocationOn } from "react-icons/ci";
import { PiTestTubeFill } from "react-icons/pi";
import { TbMicroscope } from "react-icons/tb";
import "./Modal.css";
import labmodel1 from "../../assets/labmodel1.png";
import labmodel2 from "../../assets/labmodel2.png";
import labmodel3 from "../../assets/labmodel3.png";
import labmodel4 from "../../assets/labmodel4.png";

const BookYourLabModel = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="bookyourlabmodel">
        <Modal.Header
          closeButton
          className="text-center py-1 sky-background-color"
        >
          <Modal.Title>
            <span className="fs-5 fw-bolder">Book Your Lab</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex flex-column flex-md-row rounded-3 lightgray-bg-color">
            <Col md={4} className="p-0">
              <img
                src={lab1}
                className="img-fluid rounded-start"
                alt="Doctor"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </Col>
            <Col md={8} className="p-3" style={{ fontSize: "12px" }}>
              <div className="d-flex justify-content-between pe-2">
                <span className="fw-bolder fs-6">Liver Function Test</span>
                <span className="fw-bolder fs-6 primary-color">$800</span>
              </div>
              <div className="primary-color">Surat, Gujarat</div>
              <div className="d-flex">
                <PiTestTubeFill className="fs-5 me-3" />
                <span className="fw-semibold">Test:</span> Pathology
              </div>
              <div className="d-flex">
                <TbMicroscope className="fs-5 me-3" />
                <span className="fw-semibold">Lab Name: </span>Hari Pathology Laboratory
              </div>
              <div className="d-flex">
                <CiLocationOn className="fs-5 me-3" />
                <p>Nidaan Hospital, Sector-1, Gurgaon</p>
              </div>
              <p className="w-100">
                <span className="fw-semibold">Test Display Name:</span> Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit egestas id gravida.
              </p>
            </Col>
          </Row>

          <Row className="py-4">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <div className="border rounded-3 d-flex p-2" style={{ backgroundColor: "#D8E7FF" }}>
                <div style={{ backgroundColor: "white", padding: "10px" }} className="rounded-3">
                  <img src={labmodel1} height={"30px"} width={"30px"} />
                </div>
                <div className="ms-2">
                  <div>Reports</div>
                  <div style={{ color: "#525252" }}>Get it on same day</div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="border rounded-3 d-flex p-2" style={{ backgroundColor: "#D8E7FF" }}>
                <div style={{ backgroundColor: "white", padding: "10px" }} className="rounded-3">
                  <img src={labmodel2} height={"30px"} width={"30px"} />
                </div>
                <div className="ms-2">
                  <div>Home Test</div>
                  <div style={{ color: "#525252" }}>Get home test at home</div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="py-2">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <div className="border rounded-3 d-flex p-2" style={{ backgroundColor: "#D8E7FF" }}>
                <div style={{ backgroundColor: "white", padding: "10px" }} className="rounded-3">
                  <img src={labmodel3} height={"30px"} width={"30px"} />
                </div>
                <div className="ms-2">
                  <div>Fasting</div>
                  <div style={{ color: "#525252" }}>Get it on same day</div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="border rounded-3 d-flex p-2" style={{ backgroundColor: "#D8E7FF" }}>
                <div style={{ backgroundColor: "white", padding: "10px" }} className="rounded-3">
                  <img src={labmodel4} height={"30px"} width={"30px"} />
                </div>
                <div className="ms-2">
                  <div>Offers & Discount</div>
                  <div style={{ color: "#525252" }}>Get affordable discount</div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="text-center py-4">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <button onClick={handleClose} className="btn border w-100">
                Add to Cart
              </button>
            </Col>
            <Col xs={12} md={6}>
              <button onClick={handleClose} className="btn btn-primary w-100">
                Book Now
              </button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookYourLabModel;
