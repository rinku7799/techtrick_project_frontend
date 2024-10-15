import React from 'react';
import Modal from "react-bootstrap/Modal";
import {
  Col,
  Row
} from "react-bootstrap";
import medicaltranfermodelicon1 from '../../assets/medicaltranfermodelicon1.png'
import medicaltranfermodelicon2 from '../../assets/medicaltranfermodelicon2.png'


const MedicalTranferModel = ({ show, handleClose }) => {

  const validprescription = [
    { icon: medicaltranfermodelicon1, text: "Emergency Kit" },
    { icon: medicaltranfermodelicon2, text: "Oxygen Cylinder" }
  ];

  return (
    <Modal show={show} onHide={handleClose} className="applyjobseekersmodel">
      <Modal.Header closeButton className="text-center py-1 sky-background-color">
        <Modal.Title>
          <span className="fs-5 fw-bolder">Patient Transfer</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <p className='fs-5'>Medical First Responder (MFR) ambulances are the first responders to any medical emergency. They are equipped with basic medical equipments and trained medical personnel to stabilize patients until more advanced care arrives.</p>
            <Row>
              {validprescription.map((item, index) => (
                <Col lg={6} key={index} className="my-3">
                  <div className="d-flex align-items-center p-3 lightgraydark-bg-color rounded-4 shadow">
                    <div
                      className="p-3 rounded-3"
                      style={{ backgroundColor: "white" }}
                    >
                      <img src={item.icon} width={"30px"} alt="icon" />
                    </div>
                    <p className="fw-bolder text-center m-0 ms-4">
                      {item.text}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
      </Modal.Body>
    </Modal>
  );
};

export default MedicalTranferModel;
