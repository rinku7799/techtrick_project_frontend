import { Col, Container, Row, Form } from "react-bootstrap";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import magwheelchair1 from "../assets/Mag-Wheelchair.png";
import magwheelchair2 from "../assets/Mag-Wheelchair1.png";
import magwheelchair3 from "../assets/Mag-Wheelchair2.png";
import { FaWheelchair } from "react-icons/fa";
import { useState } from "react";
import DetailsAllEquipment from "../component/DetailsAllEquipment/DetailsAllEquipment";
import MagwheelChairModel from "../component/Modal/magwheelchairmodel";
import FormBookAppointment from "../component/form/form";

const MagWheelChair = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className="magwheelchair">
        <Breadcrumb
          breadcrumbTitle="Mag Wheelchair"
          breadcrumbNav={[
            {
              navText: "Home",
              path: "/",
            },
            {
              navText: "Hospital Staffing Services",
              path: "/hospitalstaffservice",
            },
            {
              navText: "Medical Equipment",
              path: "/medicalequipment",
            },
            {
              navText: "Detalis Equipment",
              path: "/details-equipment",
            },
          ]}
        />
      </Container>
      <div className="d-flex" style={{ marginTop: "70px" }}>
        <div style={{ flex: "1" }} className="me-2 sky-background-color">
          <img src={magwheelchair1} style={{ width: "100%", height: "auto" }} />
        </div>
        <div style={{ flex: "1" }} className="me-2 sky-background-color">
          <img src={magwheelchair2} style={{ width: "100%", height: "auto" }} />
        </div>
        <div style={{ flex: "1" }} className="me-2 sky-background-color">
          <img src={magwheelchair3} style={{ width: "100%", height: "auto" }} />
        </div>
        <div style={{ flex: "1" }} className="sky-background-color">
          <img src={magwheelchair1} style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
      <Container>
        <div className="row p-3">
          <div
            className="col-lg-2 col-md-4 col-sm-12 mb-3 bo
          "
          >
            <div
              className="border rounded-circle d-flex align-items-center justify-content-center"
              style={{
                height: "120px",
                width: "120px",
                backgroundColor: "#D8E7FF",
              }}
            >
              <img
                src={magwheelchair1}
                style={{ height: "100px", width: "100px" }}
                className="p-1"
                alt="Mag Wheelchair"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-8 col-sm-12 mb-3">
            <button className="btn btn-primary rounded-5 mt-3 mb-2">
              <FaWheelchair /> Mag Wheelchair
            </button>
            <p className="fs-3 fw-bolder">
              Lifestyle Big & Strong, Self-Propelled Wheelchair
            </p>
            <div>
              Price: ₹ 9,500
              <span className="primary-color ms-2">
                (Rent Price A Day: ₹ 1,200)
              </span>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mb-3">
            <div className="d-flex flex-column">
              <button
                className="btn border border-dark my-3"
                style={{ padding: "7px 0 7px 0" }}
                onClick={handleShow}
              >
                Rent Now
              </button>
              <button
                className="btn btn-primary"
                style={{ padding: "7px 0 7px 0" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div style={{ backgroundColor: "#F9F9F9" }}>
        <Container>
          <Row className="pt-5">
            <Col lg={8}>
              <div className="py-5 px-3" style={{ backgroundColor: "white" }}>
                <div className="fs-3 fw-bolder">Description</div>
                <progress value={25} className="w-100">
                  25%
                </progress>
                <p className="mt-3">
                  WIDE WHEELCHAIR CUSHION: Included 55cm/22” foam wheelchair
                  cushion to improve wheelchair comfort comfort and pressure
                  care needs.
                </p>
                <p>
                  ATTENTAND CROSBAR: Improved maneuverability of extra wide
                  bariatric chairs when being propelled by career staff.
                </p>
                <p>
                  SIDE FOLDING: Takes up very little space when not in use. Easy
                  and quick to unfold when needed. SEAT BELT: Lateral and
                  forward safety and stability. Keep you safe and in the seat
                  from sudden, stops, bumps and direction changes.
                </p>
                <p>
                  CALF REST: Keep your feet comfortably on the footrests but
                  gently supporting your calves in place. DUAL BREAKS: Attendant
                  and self-engaged wheel breaks are in place for any situation.
                  Both are able to lock in to place or use to progressively to
                  slow down.
                </p>
                <p>
                  PUNCTURE PROOF TIRES: No need to ever check is your wheels are
                  flat. Never worry of a puncture. LIGHTWEIGHT, ALUMINIUM FRAME:
                  Light and rigid frame, easy to transport, navigate and drive.
                  The best wheelchairs are after all are Aluminium
                </p>
                <p>
                  TGA REGISTRATION & CERTIFIED: Certified by TGA (Administration
                  of Therapeutic Goods Australia) and meets all Australian
                  standards for medical device. Peace of mind that you are
                  buying a quality, registered product.
                </p>
              </div>
            </Col>
            <FormBookAppointment
              toptext={" Request a Callback"}
              btntext={"Book an Appointment"}
              bgcolor={"#F0F0F0"}
            />
          </Row>
          <Row>
            <Col lg={8}>
              <div
                className=" mt-5 py-5 px-3"
                style={{ backgroundColor: "white" }}
              >
                <div className="fs-3 fw-bolder">Specification</div>
                <progress value={25} className="w-100">
                  25%
                </progress>
                <Row>
                  <Col lg={6} className="mt-2">
                    <ul>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Dimensions :-</span>
                        91.4*61*86.4
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Frame Material :-</span>{" "}
                        Cast Iron
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Weight Capacity :- </span>
                        100 kg
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">
                          Front Wheel Diameter :-
                        </span>{" "}
                        4 Inches
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">
                          Rear Wheel Diameter :-
                        </span>{" "}
                        4 Inches
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Charging Time :-</span> Not
                        Available
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Wheel Lock :-</span> Yes
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Arm Rest :-</span> Fixed
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Foot Rest :-</span> Foldable
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Cushion :-</span> Standard
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Seat Depth :-</span> 16
                        inches
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6} className="mt-2">
                    <ul>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Seat Width :-</span> 17.5
                        Inches
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Outer Width:-</span> 21.5
                        Inches
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">
                          Seat to Floor Height :-
                        </span>{" "}
                        19 inches
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Self Drive :-</span>No
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Brake Type :-</span> Not
                        Available
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Motor :- </span>Not
                        Available
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Battery :-</span> Not
                        Available
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Driving Range:-</span> Not
                        Available
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Max Speed :-</span> Not
                        Available
                      </li>
                      <li style={{ lineHeight: "2" }}>
                        <span className="fw-bolder">Foldable:-</span> Not
                        Available
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div className="details-all-equipment-wrapper">
            <Container>
              <h4 className="text-center">Similar Listing</h4>
              <DetailsAllEquipment />
            </Container>
          </div>
        </Container>
      </div>
      <MagwheelChairModel show={show} handleClose={handleClose} />
    </>
  );
};

export default MagWheelChair;
