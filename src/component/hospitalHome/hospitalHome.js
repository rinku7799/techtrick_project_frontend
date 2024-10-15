import React, { useState } from "react";
import hospitalImage from "../../assets/hospital.jpg";
import { FaBedPulse, FaHeart } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";
import { TbBed } from "react-icons/tb";
import { Link } from "react-router-dom";
import ComingSoonModel from "../Modal/ComingSoonModel";

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
];

const HospitalHome = () => {
  const [likedHospitals, setLikedHospitals] = useState([]);

  const toggleLike = (index) => {
    if (likedHospitals.includes(index)) {
      setLikedHospitals(likedHospitals.filter((item) => item !== index));
    } else {
      setLikedHospitals([...likedHospitals, index]);
    }
  };
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="text-center">
        <span className="primary-color">HOSPITALS</span>
        <h2>Find Hospitals Near You</h2>
        <p>
          Explore some of the best tips from around the city from our partners
          and friends.
        </p>
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
                    color: likedHospitals.includes(index) ? "#D7D7D7" : "red",
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
                    // data-aos="zoom-in"
                  />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">{hospital.name}</h5>
                    <div className="d-flex mt-3">
                      <PiMedalLight style={{ fontSize: "40px" }} />
                      <p className="card-text ms-2">{hospital.description}</p>
                    </div>
                    <div className="d-flex mt-2">
                      <TbBed style={{ fontSize: "25px" }} />
                      <p className="card-text ms-2">{hospital.beds}</p>
                    </div>
                    <div className="d-flex mt-2">
                      <CiLocationOn style={{ fontSize: "35px" }} />
                      <p className="card-text ms-2">{hospital.address}</p>
                    </div>
                    <button
                      className="btn w-100 btn-primary mt-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Book Appointment
                    </button>
                    <ComingSoonModel modalId="exampleModal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Link to="/hospital-detail" style={{ textDecoration: "none" }}>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-dark rounded-0 px-4 py-2">
            View All Hospitals <FaArrowRight className="mb-1" />
          </button>
        </div>
      </Link> */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-dark rounded-0 px-4 py-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          View All Hospitals <FaArrowRight className="mb-1" />
        </button>
      </div>
    </div>
  );
};

export default HospitalHome;
