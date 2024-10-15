import React from "react";
import { Container } from "react-bootstrap";
import "./BookingAppointment.css";
import FormBookAppointment from "../form/form";

const BookingAppointment = ({ facilities }) => {
  const childes = facilities?.childes || [];

  if (!facilities || !facilities.childes || facilities.childes.length === 0) {
    return null; 
  }

  return (
    <div className="booking-appointment-wrapper">
      <Container>
        <div className="row text-center my-4">
          <h1>{facilities?.title}</h1> 
        </div>
      </Container>

      <Container>
        <div className="row justify-content-center gy-4">
          <div className="col-12 col-lg-8">
            <div className="row g-2 gx-4">
              {childes.map((item, index) => (
                <div className="col-12 col-sm-4" key={index}>
                  <div className="box mb-4 text-center">
                    <img src={item.image} alt={item.title} className="facility-icon" width={"50px"}/>
                    <div className="text-sm">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 text-start">
              <h3>{facilities?.subtitle}</h3> 
              <p className="mt-4">{facilities?.description}</p> 
            </div>
          </div>
          <FormBookAppointment
            toptext={"Book Attendant Services at Home With TTHC"}
            btntext={"Book an Appointment"}
            bgcolor={"#F0F0F0"}
          />
        </div>
      </Container>
    </div>
  );
};

export default BookingAppointment;
