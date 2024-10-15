import React, { useState } from "react";
import { Card, Container, Form, Modal, Button } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import {
  FaArrowRight,
  FaHeart,
  FaMoneyBill,
  FaRegHeart,
} from "react-icons/fa6";
import { PiGraduationCap } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import MedicalStaffSurgetyModel from "./medicalstaffmodel";


const MedicalStaffSurgery = () => {
  const MedicalStaffData = [
    {
      id: 1,
      image: require("../../assets/doctor1.png"),
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      year: 12,
      address: "Gurgaon, Delhi",
    },
    {
      id: 2,
      image: require("../../assets/doctor2.png"),
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      year: 12,
      address: "Gurgaon, Delhi",
    },
    {
      id: 3,
      image: require("../../assets/doctor3.png"),
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      year: 12,
      address: "Gurgaon, Delhi",
    },
    {
      id: 4,
      image: require("../../assets/doctor4.png"),
      name: "Dr. Frances Sutton",
      specialists: "Nursing Specialists",
      year: 12,
      address: "Gurgaon, Delhi",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 698,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Container className="p-0">
        <p className="fs-2 fw-bolder text-dark">Top-Rated Physicians for Care</p>
          <div className="col-12">
            <div className="medical-staff-slider">
              <Slider {...settings}>
                {MedicalStaffData.map((element, index) => (
                  <Card>
                    <div className="img-wrap">
                      <img src={element?.image} className="object-fit-cover" />
                    </div>
                    <div
                      className="position-absolute top-0 end-0 mt-2 me-2"
                      onClick={() => handleToggle(index)}
                      style={{
                        backgroundColor: "white",
                        width: "30px",
                        height: "30px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                      }}
                    >
                      {openIndex === index ? (
                        <FaHeart style={{ color: "red" }} />
                      ) : (
                        <FaRegHeart />
                      )}
                    </div>
                    <div className="card-body">
                      <div className="row mb-1 ms-1 text-1">
                        {element?.name}
                      </div>
                      <div className="row mb-1 ms-1 text-2">
                        {element?.specialists} .{element?.year} Years Exp.
                      </div>
                      <div className="row mb-2">
                        <div
                          className="col-12 d-flex gap-3 text-start"
                          style={{ fontSize: "13px" }}
                        >
                          <div>
                            <CiLocationOn  style={{fontSize:"20px"}}/>
                          </div>
                          <div>{element?.address}</div>
                        </div>
                      </div>
                      <Link to="/detailpage">
                        <div className="col-12 btn border-black mb-2">View</div>
                      </Link>
                      <button
                        className="col-12 btn btn-primary"
                        onClick={handleShow}
                      >
                        Book Appointment
                      </button>
                    </div>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link to="/medicalstaff">
              <button className="btn btn-dark rounded-0">
                View More <FaArrowRight />
              </button>
            </Link>
          </div>
        </Container>
      <MedicalStaffSurgetyModel show={show} handleClose={handleClose}/>
    </>
  );
};

export default MedicalStaffSurgery;
