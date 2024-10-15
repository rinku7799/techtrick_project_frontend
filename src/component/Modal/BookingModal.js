import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Card, Button, Row, Col } from "react-bootstrap";
import modal1 from "../../assets/modal1.png";
import physiotherapist from "../../assets/Best-available-physiotherapist.png";
import MonthPickerModal from "./MonthPickerModal";
import { FaRegCalendarMinus } from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import { MdOutlineModeEdit } from "react-icons/md";
import "./Modal.css";
import { FORM_APPOINTMENT_API } from "../../config/constant";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const BookingModal = ({ show, handleClose, price }) => {
  const { register, handleSubmit } = useForm();
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [formData, setFormData] = useState(null);
  console.log("formdtaaaaa:::", formData);

  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  console.log("selectedTime", selectedTime);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateList, setDateList] = useState([]);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [loading, setLoading] = useState(false);

  const secondModalData = [
    {
      id: 1,
      image: require("../../assets/Patient-safety-and-quality.png"),
      name: "Patient safety and quality",
    },
    {
      id: 2,
      image: require("../../assets/Easy-and-quick-refunds.png"),
      name: "Easy and quick refunds",
    },
    {
      id: 3,
      image: require("../../assets/Hassle-free-rescheduling.png"),
      name: "Hassle free rescheduling",
    },
  ];
  const generateDateList = () => {
    const today = new Date();
    const dateList = [];
    for (let i = 0; i < 4; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      dateList.push(date);
    }
    setDateList(dateList);
  };

  useState(() => {
    generateDateList();
  }, []);

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setFormData({
      ...formData,
      time: time,
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(new Date(date));
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handleProceed = async () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time.");
      return;
    }
    try {
      const response = await axios.post(FORM_APPOINTMENT_API, {
        name: formData.name,
        mobile_number: formData.mobile,
        address: formData.address,
        date: selectedDate.toISOString().split("T")[0],
        time: selectedTime,
      });
      console.log("Booking response:", response.data);
      setShowThirdModal(true);
      setShowSecondModal(false);
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  const handleMonthPicker = () => {
    setShowMonthPicker(true);
  };

  useEffect(() => {
    console.log("SELECTED TIME+====>", formData);
  }, [formData]);

  const renderDateCards = () => {
    return dateList
      .map((date, index) => {
        let dayText;
        if (index === 0) {
          dayText = "Today";
        } else if (index === 1) {
          dayText = "Tomorrow";
        } else {
          dayText = date.toLocaleString("default", { weekday: "long" });
        }
        return (
          <div className="col-12 col-sm-6 col-md-6">
            <Card
              key={index}
              className={`mb-2 ${
                selectedDate.getDate() === date.getDate()
                  ? "bg-primary text-white"
                  : ""
              }`}
              onClick={() => handleDateChange(date)}
            >
              <Card.Body>
                <div className="date-top text-center">
                  <div className="month">
                    {date.toLocaleString("default", { month: "long" })}
                    {date.getDate()}
                  </div>
                  <div>{dayText}</div>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })
      .concat(
        <div className="col-12 col-sm-6 col-md-6">
          <Card key="month-picker" className="mb-2" onClick={handleMonthPicker}>
            <Card.Body className="">
              <div className="date-top text-center">
                <div>
                  <FaRegCalendarMinus />
                </div>
                <div className="month">Pick a Date</div>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
  };
  const renderTimeCards = () => {
    const timeSlots = getTimeSlots();
    return timeSlots.map((timeSlot, index) => (
      <div className="col-6 col-sm-6 col-md-6" key={index}>
        <Card
          className={`mb-2 ${
            selectedTime === timeSlot ? "bg-primary text-white" : ""
          }`}
          onClick={() => handleTimeChange(timeSlot)}
        >
          <Card.Body className="time-text text-center">{timeSlot}</Card.Body>
        </Card>
      </div>
    ));
  };

  const getTimeSlots = () => {
    const startTime = 8;
    const endTime = 22;
    const timeSlots = [];
    for (let i = startTime; i <= endTime; i++) {
      const hour = i % 12 === 0 ? 12 : i % 12;
      const period = i < 12 ? "AM" : "PM";
      timeSlots.push(`${hour}:00 ${period}`);
    }
    return timeSlots;
  };
  const initialValues = {
    name: "",
    mobile: "",
    address: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .matches(/^[A-Za-z]+$/, "Please enter only alphabetic characters"),
    mobile: Yup.string()
      .required("Mobile number is required")
      .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
    address: Yup.string().required("Address is required"),
  });

  const onSubmit = async (data) => {
    setFormData({
      ...formData,
      name: data.name,
      mobile: data.mobile,
      address: data.address,
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
    });
    handleClose();
    setShowSecondModal(true);
  };

  const handlePayment = () => {
    setShowThirdModal(false);
    window.location.reload();
  };

  return (
    <>
      {/* first Modal */}
      <Modal
        className="validation-modal"
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <img className="img-modal" src={modal1} alt="Modal" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>Book an online consult with our physiotherapist for only</h3>
            <span>{price}</span>
          </div>
          {formData ? (
            <div>
              <h5>Appointment Details</h5>
              <p>Name: {formData.name}</p>
              <p>Mobile Number: {formData.mobile_number}</p>
              <p>Address: {formData.address}</p>
              <p>Date: {formData.date}</p>
              <p>Time: {formData.time}</p>
            </div>
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <Form>
                  <div className="mb-2">
                    <label htmlFor="name">Name</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Patient Name*"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="mobile">Mobile No</label>
                    <Field
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number*"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="address">Address</label>
                    <Field
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-rounded-pill col-12 mt-4"
                    type="submit"
                  >
                    Continue
                  </button>
                </Form>
              )}
            </Formik>
          )}
          <div className="text-center mt-1">
            By submitting the form, you agree to TTHC
          </div>
        </Modal.Body>
      </Modal>
      {/* Second Modal */}
      <Modal
        className="data-and-time-modal"
        show={showSecondModal}
        onHide={() => setShowSecondModal(false)}
        centered
      >
        <Modal.Header className="header-color p-1" closeButton>
          <Modal.Title className="text-center">
            <div className="text-header">Choose Slot</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {/* <h3>Select Date and Time</h3> */}
            <Card className="card-2 mb-3">
              <h5>Select Date</h5>
              <Row xs={1} md={2} lg={5} xl={5}>
                {renderDateCards()}
              </Row>
            </Card>

            <Card className="card-2">
              <h5>Select Time</h5>
              <p>Session duration will be between 30-45 mins</p>
              <Row xs={1} md={2} lg={5} xl={5}>
                {renderTimeCards()}
              </Row>
            </Card>

            <div className="col-12">
              <div className="row justify-content-evenly text-center mt-3">
                {secondModalData.map((element, index) => (
                  <div className="col-4 col-sm-4">
                    <img src={element?.image} />
                    <p>{element?.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={handleProceed}
              className=" col-12 btn btn-primary mt-4"
            >
              Continue
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Third Modal */}
      <Modal
        className="Payment-modal"
        show={showThirdModal}
        onHide={() => setShowThirdModal(false)}
        centered
      >
        <Modal.Header className="header-color p-1" closeButton>
          <Modal.Title className="text-center">
            <div className="text-header">Review and pay</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div>
                <Card className="card-3">
                  <h4>Online session with</h4>
                  <div className="d-flex gap-2">
                    <div>
                      <img className="image" src={physiotherapist} />
                    </div>
                    <div className="p-1">
                      <h5>Best available physiotherapist</h5>
                      <p>
                        Based on patient’s care needs, we’ll assign the best
                        physiotherapist.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-12 rounded mt-3 back-color">
                <div className="d-flex p-2 gap-5 justify-content-evenly align-items-center">
                  <div className="d-flex gap-2 align-items-center">
                    <div>
                      <LuClock4 style={{ fontSize: "small" }} />
                    </div>
                    <div className="text-smal">
                      {selectedDate.getDate()}
                      {selectedDate.toLocaleString("default", {
                        month: "short",
                      })}
                      ,{daysOfWeek[selectedDate.getDay()]}-{selectedTime}
                    </div>
                  </div>
                  <div
                    className="btn btn-outline-primary bg-white d-flex align-items-center p-1"
                    style={{ color: "black" }}
                  >
                    <div>
                      <MdOutlineModeEdit />
                    </div>
                    <div className="text-smal">change</div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row justify-content-evenly text-center mt-3">
                  {secondModalData.map((element, index) => (
                    <div className="col-4 col-sm-4">
                      <img src={element?.image} />
                      <p>{element?.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <Card className="card-4">
                <div className="row mb-2">
                  <div className="col-12 text-bold">Booking for</div>
                </div>
                <div className="row mb-1">
                  <div className="col-6 text-bold">Name</div>
                  <div className="col-6 text-lights">{formData?.name}</div>
                </div>
                <div className="row mb-1">
                  <div className="col-6 text-bold">Mobile no</div>
                  <div className="col-6 text-lights">{formData?.mobile}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-6 text-bold">City</div>
                  <div className="col-6 text-lights">{formData?.address}</div>
                </div>

                <div className="row mb-2">
                  <div className="col-12 text-bold">Payment summary</div>
                </div>
                <div className="row mb-1">
                  <div className="col-6 text-bold">Session fee</div>
                  <div className="col-6 text-lights">₹ 249</div>
                </div>
                <div className="row ">
                  <div className="col-6 text-bold">Tax (GST 0%)</div>
                  <div className="col-6 text-lights">₹ 0</div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-6 text-bold">Total</div>
                  <div className="col-6 text-lights">₹ 249</div>
                </div>
              </Card>
            </div>
            <div className="col-12 btn btn-primary" onClick={handlePayment}>
              Pay Now
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Month Picker Modal */}
      <MonthPickerModal
        show={showMonthPicker}
        handleClose={() => setShowMonthPicker(false)}
        handleDateChange={handleDateChange}
      />
    </>
  );
};

export default BookingModal;
