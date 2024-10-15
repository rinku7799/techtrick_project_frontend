import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import "./VendorService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CiLocationOn } from "react-icons/ci";
import ComingSoonModel from "../Modal/ComingSoonModel";
import { Container } from "react-bootstrap";

const VendorService = ({ vendors }) => {
  const vendorData = vendors?.childes || [];

  // Adjust settings when only 1 vendor is available
  const sliderSettings = {
    dots: vendorData.length > 1, // show dots only if there are multiple vendors
    infinite: vendorData.length > 1, // disable infinite scrolling if there's only 1 vendor
    speed: 500,
    slidesToShow: vendorData.length > 1 ? 3 : 1, // Show 3 items for multiple vendors, 1 for a single vendor
    slidesToScroll: 1,
    prevArrow:
      vendorData.length > 1 ? <FontAwesomeIcon icon={faAngleLeft} /> : null,
    nextArrow:
      vendorData.length > 1 ? <FontAwesomeIcon icon={faAngleRight} /> : null,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: vendorData.length > 1,
          dots: vendorData.length > 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: vendorData.length > 1,
          dots: vendorData.length > 1,
        },
      },
      {
        breakpoint: 698,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: vendorData.length > 1,
          dots: vendorData.length > 1,
        },
      },
    ],
  };

  return (
    <div className="nursingService" style={{backgroundColor:"#F9F9F9"}}>
      <Container>
      <div className="row text-start mb-4">
          <h4>Meet Our Service Provider</h4>
        </div>
      <div className="mt-3">
        <Slider {...sliderSettings}>
          {vendorData.map((service, index) => (
            <div key={index} className="slick-slide p-2">
              <div
                className="card w-100"
                style={{
                  width: "21.5rem",
                  height: "18.5rem",
                  margin: "0px 0px",
                }}
              >
                <img
                  src={service.image}
                  className="card-img-top w-100"
                  style={{ backgroundColor: "#D8E7FF", height: "140px",objectFit:"contain" }}
                />
                <div className="card-body">
                  <span
                    className="card-text fw-bolder"
                    style={{ fontSize: "14px" }}
                  >
                    {service.vendor_name}
                  </span>
                  <div className="d-flex">
                    <CiLocationOn className="fs-2 mt-1" />
                    <p
                      className="mt-2"
                      style={{ fontSize: "12px", marginLeft: "10px" }}
                    >
                      {service.address}
                    </p>
                  </div>
                  <button
                    className="btn w-100 border-black"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="d-flex justify-content-center mt-5">
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            View More <FaArrowRight />
          </button>
          <ComingSoonModel modalId="exampleModal" />
        </div>
      </div>
      </Container>
    </div>
  );
};

export default VendorService;
