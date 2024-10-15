import React, { useState } from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import medicalservice1 from "../../assets/medicalservice1.png";
import medicalservice2 from "../../assets/medicalservice2.png";
import medicalservice3 from "../../assets/medicalservice3.png";
import medicalservice4 from "../../assets/medicalservice4.png";
import medicalservice5 from "../../assets/medicalservice5.png";
import medicalservice6 from "../../assets/medicalservice6.png";
import medicalservice7 from "../../assets/medicalservice7.png";
import MedicalTranferModel from "./medicaltranfermodel";

const MedicalTransportationServices = () => {
  const medicineData = [
    {
      id: 1,
      image: medicalservice1,
      name: "Patient Transfer",
    },
    {
      id: 2,
      image: medicalservice2,
      name: "Basic Life Support (BLS)",
    },
    {
      id: 3,
      image: medicalservice3,
      name: "Advance Life Support (BLS)",
    },
    {
      id: 4,
      image: medicalservice4,
      name: "Dead Body Transportation",
    },
    {
      id: 5,
      image: medicalservice5,
      name: "Patient Transfer with AC",
    },
    {
      id: 6,
      image: medicalservice4,
      name: "Private Car with AC",
    },
    {
      id: 7,
      image: medicalservice6,
      name: "Medical first Responser",
    },
    {
      id: 8,
      image: medicalservice7,
      name: "Air Ambulance",
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Row className="g-3 mt-4">
          <p className="fs-3 fw-bolder">Patient Transfer</p>
          {medicineData.map((hospital) => (
            <Col key={hospital.id} xl={3} lg={6} md={12} sm={12}>
              <Card
                style={{ width: "100%", height: "auto" }}
                className="rounded-3"
              >
                <Card.Img
                  variant="top"
                  src={hospital.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bolder">{hospital.name}</Card.Title>
                  <button
                    className="btn w-100 border my-2 border-dark"
                    style={{ fontSize: "13px" }}
                    onClick={handleShow}
                  >
                    View
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <MedicalTranferModel show={show} handleClose={handleClose} />
    </>
  );
};

export default MedicalTransportationServices;
