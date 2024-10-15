import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BusinessSupport.css"
import security from '../../assets/Security-Services.png'
import security1 from "../../assets/Parking-Management.png"
import security2 from "../../assets/TRAVEL-NURSE-REDUCTION.png"
import security3 from "../../assets/Reception-Based-Security-Staff.png"
import security4 from "../../assets/pantry (1).png"
import security5 from "../../assets/Teacher-Staff.png"

const services = [
  { img: security, text: "Security Services" },
  { img: security1, text: "Parking Management" },
  { img: security2, text: "Nurse Staff" },
  { img: security3, text: "Reception Based Security Staff" },
  { img: security4, text: "Pantry Management" },
  { img: security5, text: "Teacher Staff" },
];

const BusinessSupport = () => {
  return (
    <div className="business-support-wrapper">
      <Container>
        <div className="row py-3">
          <h4>
            Following Are The Services Nano Facility Management Offers Under
            Business Support Services:
          </h4>
        </div>
      </Container>
      <div className="container">
        <Row xs={2} md={2} lg={3} xl={6}>
          {services.map((service, index) => (
            <Col key={index} className="d-flex justify-content-center align-items-center">
              <div className="border p-4 d-flex align-items-center flex-column card-div h-100 w-100">
                <img src={service.img} width={"65px"} alt={service.text} />
                <p className="mt-1 fw-bolder text-center">{service.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BusinessSupport;
