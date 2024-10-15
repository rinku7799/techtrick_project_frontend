import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import Mobile from "../../component/mobile/mobile";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
  Dropdown,
} from "react-bootstrap";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { FaLocationCrosshairs, FaMoneyBill } from "react-icons/fa6";
import { FaArrowRight, FaSearch, FaUserNurse } from "react-icons/fa";
import { PiGraduationCap, PiRows } from "react-icons/pi";
import { IoFilter } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import nursingservice1 from "../../assets/nursingservice1.png";
import favorite1 from "../../assets/favorite1.png";
import favorite2 from "../../assets/favorite2.png";
import favorite3 from "../../assets/favorite3.png";
import favorite4 from "../../assets/favorite4.png";
import { LuDot } from "react-icons/lu";
import Modal from "react-bootstrap/Modal";
import "./nurselist.css";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import FormBookAppointment from "../../component/form/form";

const MedicalStaffList = () => {
  const hospitalsData = [
    {
      id: 1,
      image: favorite1,
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      yearsExp: 12,
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 2,
      image: favorite2,
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      yearsExp: 12,
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 3,
      image: favorite3,
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      yearsExp: 12,
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 4,
      image: favorite4,
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      yearsExp: 12,
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 5,
      image: favorite2,
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      yearsExp: 12,
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 6,
      image: favorite4,
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      yearsExp: 12,
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 7,
      image: favorite1,
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      yearsExp: 12,
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 8,
      image: favorite3,
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      yearsExp: 12,
      degree: "MBBS, DM, DNB (Cardiology).",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dropdownMenuWidth, setDropdownMenuWidth] = useState("");
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((category) => category !== value)
      );
    }
  };
  const filters = [
    {
      label: "Locality",
      options: [
        "Udhna",
        "Mahuva",
        "Varachha",
        "Amroli",
        "Tadwadi",
        "Katargam",
        "Ghod Dod Road",
      ],
    },
    { label: "Availability", options: ["12 hours", "10 hours"] },
    {
      label: "Price",
      options: ["₹0 to ₹500", "₹500 to ₹700", "₹700 to ₹1000", "₹1000+"],
    },
    { label: "Gender", options: ["Any Gender", "Male", "Female"] },
    { label: "Qualification", options: ["(10th) ", "(12th) ", "Graduate"] },
    {
      label: "Experience",
      options: ["Fresher", "1 Year", "2 Year’s", "3-5 Year’s", "5-10 Year’s"],
    },
    {
      label: "Select Services",
      options: [
        "Home Attendant",
        "Medical Attendant",
        "ICU Care at Hone",
        "Physiotherapy",
        "Emergency Nursing Care",
      ],
    },
  ];
  useEffect(() => {
    const width = dropdownMenuWidthHandler();
    setDropdownMenuWidth(width);
  }, [filters]);

  const dropdownMenuWidthHandler = () => {
    switch (filters.label) {
      case "Locality":
        return "400px";
      default:
        return "300px";
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container className="nurselist mt-4 mb-5">
        <Row style={{ rowGap: "10px" }}>
          <Col lg={2} md={12}>
            <Form.Control
              type="text"
              className="w-100 border p-2"
              placeholder="Enter city"
            />
          </Col>
          <Col lg={3} md={12}>
            <div className="row border rounded-2 p-1 mx-0">
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
              placeholder="Specialty/Symptom/Treatment/Doctors/Clinic"
            />
          </Col>
          <Col lg={2} md={12} py={2}>
            <Button variant="primary" className="w-100 p-2">
              Search
            </Button>
          </Col>
        </Row>
        <Breadcrumb
          breadcrumbTitle="Best Nursing Specialists"
          breadcrumbNav={[
            {
              navText: "Home",
              path: "/",
            },
            {
              navText: "Nursing Service",
              path: "/nursingSubcategory",
            },
            {
              navText: "Home Attend",
              path: "/homeattend",
            },
          ]}
        />
        <div className="mt-4 py-4">
          <div className="fw-bold fs-5">65+ Best Nursing Specialists</div>
          <div className="p-3 px-4 mt-2" style={{ backgroundColor: "#EDEDED" }}>
            <Row>
              <Col className="col-10 text-start p-0">
                <IoFilter /> Filter
              </Col>
              <Col className="col-2 text-center">
                <FaUserNurse /> Services
              </Col>
            </Row>
            <Row xl={7} lg={7} md={7} className="gap-2 mt-3">
              {filters.map((filter, index) => (
                <Col className="service m-0 p-0" key={index}>
                  <Dropdown
                    className="rounded-2 d-flex justify-content-between align-items-center"
                    style={{ backgroundColor: "white" }}
                  >
                    <span className="ps-2" style={{ fontSize: "15px" }}>
                      {filter.label}
                    </span>
                    <Dropdown.Toggle
                      as={Button}
                      variant="light"
                      style={{ backgroundColor: "white" }}
                    >
                      <FaAngleDown style={{ color: "#6C6A6A" }} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className=" p-3"
                      style={{ width: dropdownMenuWidth }}
                    >
                      {filter.label === "Locality" && (
                        <InputGroup
                          className="w-100 border rounded-2"
                          style={{ backgroundColor: "#F1F1F1" }}
                        >
                          <Button
                            className="border-0"
                            style={{
                              borderRight: "none",
                              backgroundColor: "#F1F1F1",
                            }}
                          >
                            <FaSearch className="text-dark" />
                          </Button>
                          <Form.Control
                            type="text"
                            className="border-0 p-"
                            placeholder="Search locality"
                            style={{
                              borderLeft: "none",
                              backgroundColor: "#F1F1F1",
                            }}
                          />
                        </InputGroup>
                      )}
                      <div className="checkboxes" id="Categories">
                        <div className="inner-wrap dropdown-item">
                          {filter.options.map((option, index) => (
                            <Form.Check
                              type="checkbox"
                              value={option}
                              className="ckkBox val"
                              defaultChecked={index === 0}
                              onChange={handleCheckboxChange}
                              label={option}
                              key={index}
                            />
                          ))}
                        </div>
                      </div>
                      <Row className="mt-2">
                        <Col>
                          <Button className="btn border btn-light w-100">
                            Clear All
                          </Button>
                        </Col>
                        <Col>
                          <Button className="btn btn-primary w-100">
                            Apply
                          </Button>
                        </Col>
                      </Row>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <Row>
          <Col xl={8} lg={8} md={6} sm={6} xs={12}>
            <Row className="g-3">
              {hospitalsData.map((hospital) => (
                <Col key={hospital.id} xl={4} lg={6} md={12} sm={12}>
                  <Card
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-3"
                  >
                    <Card.Img
                      variant="top"
                      src={hospital.image}
                      style={{ height: "200px" }}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bolder">
                        {hospital.name}
                      </Card.Title>
                      <div className="d-flex">
                        <Card.Subtitle
                          className="mb-2 text-primary"
                          style={{ fontSize: "12px" }}
                        >
                          {hospital.specialists}
                        </Card.Subtitle>
                        <LuDot
                          className="text-primary"
                          style={{ fontSize: "15px" }}
                        />
                        <Card.Subtitle
                          className="mb-2 text-primary"
                          style={{ fontSize: "12px" }}
                        >
                          {hospital.yearsExp} Years Exp.
                        </Card.Subtitle>
                      </div>
                      <div className="d-flex mt-1">
                        <PiGraduationCap className="fs-6 me-3" />
                        <Card.Text style={{ fontSize: "11px" }}>
                          {hospital.degree}
                        </Card.Text>
                      </div>

                      <div className="d-flex mt-1">
                        <FaMoneyBill className="fs-6 me-3" />
                        <Card.Text style={{ fontSize: "12px" }}>
                          <span className="fw-bolder">{hospital.price}</span>at
                          clinic
                        </Card.Text>
                      </div>
                      <div className="d-flex mt-1">
                        <CiLocationOn className="fs-5 me-3" />
                        <Card.Text style={{ fontSize: "12px" }}>
                          {hospital.address}
                        </Card.Text>
                      </div>
                      <Link to="/detailpage">
                        <button
                          className="btn w-100 border my-2"
                          style={{ fontSize: "13px" }}
                        >
                          View
                        </button>
                      </Link>
                      <button
                        className="btn btn-primary w-100 border"
                        style={{ fontSize: "13px" }}
                        onClick={handleShow}
                      >
                        Book Appointment
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
      <Footer />
      {/* ..............................model..................................... */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="sky-background-color"> 
          <Modal.Title>
            <span style={{ textAlign: "center" }}>
              Book Your Consultation Now
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="d-flex flex-wrap rounded-3 align-items-center sky-background-color"
          >
            <img
              src={favorite3}
              className="img-fluid rounded-start"
              alt="Doctor"
              style={{
                objectFit: "cover",
                height: "130px",
                borderRadius: "10px 0 0 10px",
              }}
            />
            <div className="ms-4 mt-3" style={{ fontSize: "12px" }}>
              <span className="fw-bolder fs-6">Dr. Frances Sutton</span>
              <div className="text-primary">
                Nursing Specialists <LuDot />
                12 Years Exp.
              </div>
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
                <option disabled>Select City*</option>
                <option value="1">Surat</option>
                <option value="2">Baroda</option>
                <option value="3">Rajkot</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupDisease">
              <Form.Label>Disease*</Form.Label>
              <Form.Select aria-label="Default select example">
                <option disabled>Select Disease*</option>
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
    </div>
  );
};

export default MedicalStaffList;
