import React from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import "./MedicalTransportation.css";
import ComingSoonModel from "../Modal/ComingSoonModel";

const MedicalTransportation = ({ img1, img2 }) => {
  return (
    <>
      <div className="bg-dark p-3">
        <div className="container text-white">
          <p>TRANSPORTATION</p>
          <div className="row">
            <div className="col-md-6">
              <div>
                <h1>Medical Transportation Vehicle Service</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="container">
              <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-12" style={{ borderRadius: "90px" }}>
                  <div className="form" style={{ borderRadius: "90px" }}>
                    <FaSearch className="search fs-4 text-light" />
                    <input
                      type="text"
                      className="form-control form-input px-4 text-light colorwhite"
                      style={{
                        borderRadius: "90px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid white",
                      }}
                      placeholder="Where to?"
                    />
                    <span className="left-pan fs-4 text-light">
                      {" "}
                      <FaCalendarAlt />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-between">
          {img1 && (
            <div className="col-2 d-flex align-items-center justify-content-center">
              <img
                src={img1}
                className="img-fluid ambulanceimg"
                style={{ transform: "scaleX(-1)" }}
                alt="Ambulance 1"
              />
            </div>
          )}
          <div
            className={`col-md-${
              img1 && img2 ? "6" : img1 || img2 ? "8" : "12"
            } text-center`}
          >
            <div className="fs-3">Choose your vehicle</div>
            <button
              className="btn btn-light mx-2 fw-semibold my-3"
              style={{ padding: "12px 35px 12px 35px" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Private Vehicle
            </button>
            <button
              className="btn btn-light mx-2 px-5 fw-semibold"
              style={{ padding: "12px 35px 12px 35px" }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Ambulance
            </button>
            <ComingSoonModel modalId="exampleModal" />
          </div>
          {img2 && (
            <div className="col-2 d-flex align-items-center justify-content-center">
              <img
                src={img2}
                className="img-fluid ambulanceimg"
                alt="Ambulance 2"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MedicalTransportation;
