import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Mobile from "../../component/mobile/mobile";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { FaLocationCrosshairs, FaMoneyBill } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import nursingservice1 from "../../assets/nursingservice1.png";
import labcenter1 from "../../assets/labcenter1.png";
import labcenter2 from "../../assets/labcenter2.png";
import labcenter3 from "../../assets/labcenter3.png";
import labcenter4 from "../../assets/labcenter4.png";
import "./nurselist.css";
import { Link } from "react-router-dom";
import BookYourLabModel from "../../component/Modal/BookYourLabmodel";
import FormBookAppointment from "../../component/form/form";

const LabCenterDetailPage = () => {
  const hospitalsData = [
    {
      id: 1,
      image: labcenter1,
      name: "Liver Test Function Test from Thyrocare",
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 2,
      image: labcenter2,
      name: "CBC / Hemogram Test from Thyrocare",
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 3,
      image: labcenter3,
      name: "Liver Test Function Test from Thyrocare",
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 4,
      image: labcenter4,
      name: "CBC / Hemogram Test from Thyrocare",
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 5,
      image: labcenter1,
      name: "Liver Test Function Test from Thyrocare",
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 6,
      image: labcenter2,
      name: "CBC / Hemogram Test from Thyrocare",
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 7,
      image: labcenter3,
      name: "Liver Test Function Test from Thyrocare",
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 8,
      image: labcenter4,
      name: "CBC / Hemogram Test from Thyrocare",
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ backgroundColor: "#F9F9F9" }}>
       
          <Breadcrumb
            breadcrumbTitle="Lab Partners detail"
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
              {
                navText: "Path Lab",
                path: "/homeattend",
              },
              {
                navText: "Lab Partners",
                path: "/pathlab/labpartners",
              },
            ]}
          />
           <Container className="mb-5 pt-4">
          <Row style={{ rowGap: "10px" }} className="pt-5">
            <Col lg={2} md={12} className="p-0">
              <Form.Control
                type="text"
                className="w-100 border p-2"
                placeholder="Enter city"
              />
            </Col>
            <Col lg={3} md={12}>
              <div
                className="row border rounded-2 p-1 mx-0"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div className="col-md-12" style={{ borderRadius: "90px" }}>
                  <div className="row">
                    <div className="col-6 p-0">
                      <input
                        type="text"
                        className="border-0 w-100"
                        placeholder="Enter locality"
                      />
                    </div>
                    <div className="col-6 text-end">
                      <span className="left-pan fs-5">
                        <FaLocationCrosshairs style={{ color: "#6C6A6A" }} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} md={12} py={2}>
              <Form.Control
                type="text"
                className="w-100 border p-2"
                placeholder="Search Lab"
                style={{ backgroundColor: "#FFFFFF" }}
              />
            </Col>
            <Col lg={2} md={12} py={2} className="p-0">
              <Button variant="primary" className="w-100 p-2">
                Search
              </Button>
            </Col>
          </Row>

          <Row className="mt-4 shadow p-4 mb-5">
            <Col lg={2} className="d-flex justify-content-center">
              <div
                className="d-flex align-items-center"
                style={{
                  backgroundColor: "#D8E7FF",
                  borderRadius: "50%",
                  width: "130px",
                  height: "130px",
                }}
              >
                <img src={nursingservice1} width={"120px"} height={"100px"} />
              </div>
            </Col>
            <Col lg={10}>
              <div>
                <p className="fw-bolder fs-4 ms-3">
                  Shree Hari Pathology Laboratory
                </p>
                <p className="text-primary">
                  <CiLocationOn className="fs-5 me-2" />
                  110, Shreeji Complex, Near Hira Baug Circle Varachha Road,
                  Surat - 395006
                </p>
                <p className="ms-3" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  egestas id gravida. Libero convallis diam vulputate et
                  volutpat risus amet dolor. Blandit urna sagittis, nibh at
                  vitae nunc. Magnis fringilla of bibendum dictumst lorem non
                  placerat eu et velit. In diam imperdiet imperdiet seeed tortor
                  main suspendisse. consectetur adipiscing elit egestas id
                  gravida. Libero convallis diam vulputate et volutpat risus
                  amet dolor. Blandit urna sagittis, nibh at vitae nunc.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={8} lg={8} md={6} sm={6} xs={12}>
              <Row className="g-3">
                {hospitalsData.map((hospital) => (
                  <Col key={hospital.id} xl={4} lg={6} md={12} sm={12}>
                    <Card
                      style={{ width: "100%", height: "100%" }}
                      className="rounded-3"
                    >
                      <Card.Img
                        variant="top"
                        src={hospital.image}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <Card.Body>
                        <p className="fs-6 fw-bolder m-0">{hospital.name}</p>
                        <div className="d-flex mt-2">
                          <FaMoneyBill
                            className="me-3"
                            style={{ fontSize: "19px" }}
                          />
                          <div style={{ fontSize: "15px" }}>
                            <span className="fw-bolder">{hospital.price}</span>
                          </div>
                        </div>
                  
                        <button
                          className="btn w-100 border my-2 fs-13"
                           onClick={handleShow}
                        >
                          View
                        </button>
                        <button
                          className="btn btn-primary w-100 border fs-13"
                        >
                          Add to Cart
                        </button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            {/* <Col lg={4} md={6} sm={6}>
              <Form className="form rounded-3 ">
                <h4 style={{ fontWeight: "600" }}>Request a Callback</h4>
                <Form.Group
                  className="mt-4"
                  md="4"
                  controlId="validationCustom01"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Patient Name*"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mt-4"
                  md="4"
                  controlId="validationCustom02"
                >
                  <Form.Label>Mobile No</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Mobile Number*"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mt-4"
                  md="4"
                  controlId="validationCustom03"
                >
                  <Form.Label>Email Id</Form.Label>
                  <Form.Control required type="text" placeholder="Email Id" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mt-4"
                  md="4"
                  controlId="validationCustom04"
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control required type="text" placeholder="Address" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mt-4"
                  md="4"
                  controlId="validationCustom05"
                >
                  <Form.Label>Service Required</Form.Label>
                  <Form.Control required type="text" placeholder="Service" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Button className="btn btn-primary btn-rounded-pill col-12 mt-4">
                  Submit
                </Button>
                <p className="text-center mt-2">
                  By Submitting the form, you Agree to TTHC
                </p>
              </Form>
            </Col> */}
            <FormBookAppointment toptext={"Request a Callback"} btntext={"Submit"} bgcolor={"#F0F0F0"}/>
          </Row>
          <div className="d-flex justify-content-center mt-5">
            <Button className="btn btn-dark rounded-0 px-3">
              View More <FaArrowRight />
            </Button>
          </div>
        </Container>
        <Mobile />
      </div>

      <BookYourLabModel show={show} handleClose={handleClose} />
    </>
  );
};
export default LabCenterDetailPage;
