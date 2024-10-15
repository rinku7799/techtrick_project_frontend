import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import medicinedelivery1 from "../../assets/medicinedelivery1.png";
import medicinedeliveryicon1 from "../../assets/medicinedeliveryicon1.png";
import medicinedeliveryicon2 from "../../assets/medicinedeliveryicon2.png";
import medicinedeliveryicon3 from "../../assets/medicinedeliveryicon3.png";
import medicinedeliveryicon4 from "../../assets/medicinedeliveryicon4.png";
import medicine from "../../assets/medicine1.png";
import { BsFillCloudUploadFill } from "react-icons/bs";
import MedicineDeliveryUploadPrescriptionModel from "../../component/Modal/medicineuploadfilemodel";
import { useState } from "react";
import TopSellingMedicine from "./topsellingmedicine";
import medicinetrickicon1 from "../../assets/medicinetrickicon1.png";
import medicinetrickicon2 from "../../assets/medicinetrickicon2.png";
import medicinetrickicon3 from "../../assets/medicinetrickicon3.png";
import medicinetrickicon4 from "../../assets/medicinetrickicon4.png";
import Mobile from "../../component/mobile/mobile";

import './MedicineDelivery.css';

const MedicineDelivery = () => {
  const validprescription = [
    { icon: medicinedeliveryicon1, text: "Prescription Date" },
    { icon: medicinedeliveryicon2, text: "Doctor Details" },
    { icon: medicinedeliveryicon3, text: "Patient Details" },
    { icon: medicinedeliveryicon4, text: "Medicine Details" },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const benefitsData = [
    {
      imgSrc: medicinetrickicon1,
      title: "Rapid 12-Hour Delivery",
      description: "promptly at your door for your medical requirements.",
    },
    {
      imgSrc: medicinetrickicon2,
      title: "Assured Best Prices for All",
      description: "Best price guarantee & savings on every medicine.",
    },
    {
      imgSrc: medicinetrickicon3,
      title: "Free Doorstep Delivery",
      description:
        "Zero-Cost doorstep delivery, medicines delivered free, directly to you.",
    },
    {
      imgSrc: medicinetrickicon4,
      title: "Dedicated Customer Service",
      description: "Our support team is available 24*7 for assistance.",
    },
  ];
  return (
    <>
      <div className="medicinedelivery1">
        <Breadcrumb
          breadcrumbTitle="Medicine Delivery"
          breadcrumbNav={[
            {
              navText: "Home",
              path: "/",
            },
          ]}
        />
        <HeroHomeAttendant img={medicinedelivery1} />
        <div className="lightgraydark-bg-color">
          <Container className="py-5">
            <Row className="mb-3">
              <Col md={10} className="my-2">
                <Form.Control type="text" placeholder="Search Medicines" />
              </Col>
              <Col md={2} className="my-2">
                <Button variant="primary" className="w-100">
                  Search
                </Button>
              </Col>
            </Row>
            <p>
              With our online doctor consultation, you may receive professional
              medical advice right at your door, ensuring fast and easily
              accessible healthcare help.
            </p>
            <p className="fs-3 fw-bolder">Medicine Deliver</p>
            <p>
              Medicine delivery services provide a convenient way for
              individuals to receive their prescription and over-the-counter
              medications directly at their homes. This service is particularly
              beneficial for those who have difficulty visiting a pharmacy due
              to mobility issues, chronic conditions, or busy schedules.
            </p>
          </Container>
        </div>
        <div className="p-3">
          <Container>
            <p className="fs-3 fw-bolder">What is a valid Prescription?</p>
            <Row>
              {validprescription.map((item, index) => (
                <Col lg={3} key={index} className="my-3">
                  <div className="d-flex align-items-center p-3 lightgraydark-bg-color rounded-4 shadow">
                    <div
                      className="p-3 rounded-3"
                      style={{ backgroundColor: "white" }}
                    >
                      <img src={item.icon} width={"30px"} alt="icon" />
                    </div>
                    <p className="fw-bolder text-center m-0 ms-4">
                      {item.text}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <div className="lightgraydark-bg-color py-5">
        <div>
            <Container>
                <Row className="flex-lg-row">
                    <Col lg={6} className="my-4">
                        <div className="border sky-background-color rounded-4 shadow d-flex p-3 h-100 prescription">
                            <img src={medicine} width={"240px"} className="img-fluid me-3" />
                            <div>
                                <p className="fs-5 fw-bolder text-center mt-3">
                                    Not able to understand your prescription?
                                </p>
                                <p className="text-center">We are here to help you</p>
                                <button
                                    className="btn w-100 p-2"
                                    style={{
                                        border: "2px dashed black",
                                        backgroundColor: "white",
                                    }}
                                    onClick={handleShow}
                                >
                                    <BsFillCloudUploadFill className="fs-20" />
                                    <span className="ms-2 fw-bolder">
                                        Upload Prescription
                                    </span>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="my-4">
                        <div className="border sky-background-color rounded-4 shadow p-3 h-100">
                            <p className="fs-5 fw-bolder mt-3">
                                Don't have a prescription?
                            </p>
                            <p>
                                Please call us or book an appointment with our doctors.
                            </p>
                            <div className="d-flex justify-content-around mt-5 gap-3 prescription">
                                <Button className="btn-primary px-4 w-100">
                                    +91-9861806040
                                </Button>
                                <Button className="btn-primary px-4 w-100">
                                    Book an Appointment
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
          <TopSellingMedicine />
        </div>
        <div className="container py-4">
          <p className="fs-2 fw-bolder mt-3">Why Choose Tech Tricks?</p>
          <Row className="justify-content-center mt-3">
            {benefitsData.map((benefit, index) => (
              <Col
                key={index}
                xl={3}
                lg={4}
                md={6}
                sm={8}
                xs={10}
                className="mb-4"
              >
                <div
                  className="text-center p-3 h-100 d-flex justify-content-center flex-column align-items-center rounded-4 lightgraydark-bg-color"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mb-2 rounded-4"
                    style={{
                      height: "70px",
                      width: "70px",
                      backgroundColor: "white",
                    }}
                  >
                    <img src={benefit.imgSrc} width="40px" alt="Icon" />
                  </div>
                  <div className="fw-bolder mb-2 fs-15">{benefit.title}</div>
                  <div className="fs-15">{benefit.description}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Mobile />

      <MedicineDeliveryUploadPrescriptionModel
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};
export default MedicineDelivery;
