import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { IoIosCheckmark } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import BookingModal from "../Modal/BookingModal";
import FormBookAppointment from "../form/form";
import "./BookingAppointment.css";

const BookingAppointmentPhysiotherapy = ({ mode, facilities }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleBookNowClick = (price) => {
    setSelectedPrice(price);
    setShowModal(true);
  };
  if (!mode || !mode.childes || mode.childes.length === 0) {
    return null;
  }
  const modeData = mode?.childes || [];

  return (
    <div className="booking-appointment-physiothereapy-wrapper">
      <Container>
        <div className="row my-4">
          <h1 className="text-center">{mode.maintitle}</h1>
        </div>
      </Container>
      <Container>
        <div className="row g-4 justify-content-center">
          <div
            className={`col-12 ${
              facilities && facilities.length > 0 ? "col-lg-8" : "col-lg-12"
            }`}
          >
            <div className="row g-4">
              <div className="col-12">
                <Card className="card-1 text-center">{mode.title}</Card>
              </div>
              {modeData.map((element, index) => (
                <div className="col-12 col-sm-6" key={index}>
                  <Card className="card-2 card-group">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex gap-3 align-items-center">
                          <div className="text">{element.optiontitle}</div>
                          <div className="text">
                            <MdArrowForwardIos />
                          </div>
                        </div>
                        <div className="text-2">
                          {element.optionprice}/<span> session</span>
                        </div>
                      </div>
                      <div className="text-3 text-start mb-4">
                        {element.optiondescription}
                      </div>

                      {Array.isArray(element.optionoption) &&
                        element.optionoption.map((detail, idx) => (
                          <div
                            className="d-flex align-items-center gap-3 py-2"
                            key={idx}
                          >
                            <div>
                              <IoIosCheckmark className="icon" />
                            </div>
                            <div className="text-4">{detail}</div>
                          </div>
                        ))}
                    </div>
                    <div className="card-footer justify-content-center align-items-center text-center bg-transparent border-top-0 w-100">
                      <button
                        className="btn btn-outline-primary w-100 mt-3 margin"
                        onClick={() => handleBookNowClick(element.subsubtitle)}
                      >
                        Book Now
                      </button>
                    </div>
                  </Card>
                </div>
              ))}
              <BookingModal
                show={showModal}
                handleClose={handleModalClose}
                price={selectedPrice}
              />
            </div>
          </div>
          {facilities && facilities.length > 0 && (
            <FormBookAppointment
              toptext={"Book Attendant Services at Home With TTHC"}
              btntext={"Book an Appointment"}
              bgcolor={"#F0F0F0"}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default BookingAppointmentPhysiotherapy;
