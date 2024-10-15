import React, { useState } from "react";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { Button, Col, Form, InputGroup, Row, Dropdown } from "react-bootstrap";
import { IoFilter } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Mobile from "../../component/mobile/mobile";
import { Link } from "react-router-dom";
import hospitalImage from "../../assets/hospital.jpg";
import { FaHeart } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { PiMedalLight } from "react-icons/pi";
import { TbBed } from "react-icons/tb";
import "./hospitalDeatil.css";
import HospitalAppoinmentModel from "../../component/Modal/hospitalbookAppoinment";

const HospitalDeatil = () => {
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
  ];
  const [selectedCategories, setSelectedCategories] = useState([]);
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
  const [likedHospitals, setLikedHospitals] = useState([]);

  const toggleLike = (index) => {
    if (likedHospitals.includes(index)) {
      setLikedHospitals(likedHospitals.filter((item) => item !== index));
    } else {
      setLikedHospitals([...likedHospitals, index]);
    }
  };
  const hospitals = [
    {
      name: "Kiran Hospital Multi Super Specialist",
      description:
        "SAMAST PATIDAR AAROGYA TRUST is a “NOT FOR PROFIT” Organization.",
      beds: "10 Bed’s",
      address: "Nr Sumul Dairy, Katargam, Surat-395004, Gujarat, India.",
    },
    {
      name: "Kiran Hospital Multi Super Specialist",
      description:
        "SAMAST PATIDAR AAROGYA TRUST is a “NOT FOR PROFIT” Organization.",
      beds: "10 Bed’s",
      address: "Nr Sumul Dairy, Katargam, Surat-395004, Gujarat, India.",
    },
    {
      name: "Kiran Hospital Multi Super Specialist",
      description:
        "SAMAST PATIDAR AAROGYA TRUST is a “NOT FOR PROFIT” Organization.",
      beds: "10 Bed’s",
      address: "Nr Sumul Dairy, Katargam, Surat-395004, Gujarat, India.",
    },
    {
      name: "Kiran Hospital Multi Super Specialist",
      description:
        "SAMAST PATIDAR AAROGYA TRUST is a “NOT FOR PROFIT” Organization.",
      beds: "10 Bed’s",
      address: "Nr Sumul Dairy, Katargam, Surat-395004, Gujarat, India.",
    },
    {
      name: "Kiran Hospital Multi Super Specialist",
      description:
        "SAMAST PATIDAR AAROGYA TRUST is a “NOT FOR PROFIT” Organization.",
      beds: "10 Bed’s",
      address: "Nr Sumul Dairy, Katargam, Surat-395004, Gujarat, India.",
    },
    {
      name: "Kiran Hospital Multi Super Specialist",
      description:
        "SAMAST PATIDAR AAROGYA TRUST is a “NOT FOR PROFIT” Organization.",
      beds: "10 Bed’s",
      address: "Nr Sumul Dairy, Katargam, Surat-395004, Gujarat, India.",
    },
    {
      name: "Kiran Hospital Multi Super Specialist",
      description:
        "SAMAST PATIDAR AAROGYA TRUST is a “NOT FOR PROFIT” Organization.",
      beds: "10 Bed’s",
      address: "Nr Sumul Dairy, Katargam, Surat-395004, Gujarat, India.",
    },
    {
      name: "Kiran Hospital Multi Super Specialist",
      description:
        "SAMAST PATIDAR AAROGYA TRUST is a “NOT FOR PROFIT” Organization.",
      beds: "10 Bed’s",
      address: "Nr Sumul Dairy, Katargam, Surat-395004, Gujarat, India.",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ backgroundColor: "#F9F9F9" }}>
        <div className="container hospitaldetail pb-5">
          <Breadcrumb
            breadcrumbTitle="Hospitals"
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
            ]}
          />
          <div className="pt-5 ">
            <div className="fw-bold fs-5">40+ Hospital</div>
            <div className="p-3 mt-2" style={{ backgroundColor: "#EDEDED" }}>
              <Row>
                <Col className="col-12">
                  <IoFilter /> Filter
                </Col>
              </Row>
              <Row>
                {filters.map((filter, index) => (
                  <Col
                    lg={6}
                    md={6}
                    className="service"
                    key={index}
                    style={{
                      borderLeft:
                        filter.label === "Select Services"
                          ? "2px solid #BCBCBC"
                          : "none",
                    }}
                  >
                    <Dropdown
                      className="rounded-2 d-flex justify-content-between align-items-center"
                      style={{ backgroundColor: "white" }}
                    >
                      <span className="ps-2">{filter.label}</span>
                      <Dropdown.Toggle
                        as={Button}
                        variant="light"
                        style={{ backgroundColor: "white" }}
                      >
                        <FaAngleDown style={{ color: "#6C6A6A" }} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="w-100 p-3">
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
            <div className="row mt-5">
              {hospitals.map((hospital, index) => (
                <div className="col-md-6 col-sm-12 mb-3" key={index}>
                  <div
                    className="card position-relative h-100"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="position-absolute top-0 start-0 mt-2 ms-2"
                      onClick={() => toggleLike(index)}
                      style={{
                        border: "1px solid #D7D7D7",
                        backgroundColor: "white",
                        width: "30px",
                        height: "30px",
                        borderRadius: "5px",
                      }}
                    >
                      <FaHeart
                        style={{
                          fontSize: "17px",
                          color: likedHospitals.includes(index)
                            ? "#D7D7D7"
                            : "red",
                          zIndex: 1,
                          marginLeft: "6px",
                        }}
                      />
                    </div>
                    <div className="row g-0">
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <img
                          src={hospitalImage}
                          className="img-fluid rounded-start w-100 h-100"
                          alt="hospital"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="card-body">
                          <h5 className="card-title fw-bolder">
                            {hospital.name}
                          </h5>
                          <div className="d-flex mt-3">
                            <PiMedalLight style={{ fontSize: "40px" }} />
                            <p className="card-text ms-2">
                              {hospital.description}
                            </p>
                          </div>
                          <div className="d-flex mt-2">
                            <TbBed style={{ fontSize: "25px" }} />
                            <p className="card-text ms-2">{hospital.beds}</p>
                          </div>
                          <Link to="/hospital-location"style={{textDecoration:"none", color:"black"}}>
                            <div className="d-flex mt-2">
                              <CiLocationOn style={{ fontSize: "35px" }} />
                              <p className="card-text ms-2">
                                {hospital.address}
                              </p>
                            </div>
                          </Link>
                          <button
                            className="btn w-100 btn-primary mt-4"
                            onClick={handleShow}
                          >
                            Book Appointment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="*" style={{ textDecoration: "none" }}>
              <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-dark rounded-0 px-3 py-2">
                  View More <FaArrowRight className="mb-1" />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <HospitalAppoinmentModel show={show} handleClose={handleClose} />
      <Mobile />
    </>
  );
};
export default HospitalDeatil;
