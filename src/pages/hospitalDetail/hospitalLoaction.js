import { Container, Row, Col } from "react-bootstrap";
import Mobile from "../../component/mobile/mobile";
import { useState } from "react";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import hospitallocation1 from "../../assets/hospitallocation1.png";
import hospitallocation2 from "../../assets/hospitallocation2.png";
import hospitallocation3 from "../../assets/hospitallocation3.png";
import hospitallocation4 from "../../assets/hospitallocation4.png";
import hospitalImage from "../../assets/hospital.jpg";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt, FaRegHeart, FaUserNurse } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuCheckCircle } from "react-icons/lu";
import GoogleMapReact from "google-map-react";
import { TbBed } from "react-icons/tb";
import FormBookAppointment from "../../component/form/form";
import HospitalSlider from "./hospitalslider";
import HospitalAppoinmentModel from "../../component/Modal/hospitalbookAppoinment";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const HospitalLocationPage = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };


  const doctorSkills = [
    "Capacity for improvement",
    "Operational Improvement",
    "Quantitative reasoning",
    "Patient confidentiality",
    "Stress management",
    "Case Management",
    "Disease prevention",
    "Intake Processing",
    "Scientific inquiry",
    "Critical care",
    "Patient Care",
  ];
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
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div style={{ backgroundColor: "#F9F9F9" }}>
        <Container className="detail mb-3 py-4">
          <Breadcrumb
            breadcrumbTitle="Hospitals Details"
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
              {
                navText: "Hospitals",
                path: "/hospital-detail",
              },
            ]}
          />
        </Container>
        <Row className="detail1">
          <Col xl={3} lg={6} md={6} sm={12} className="p-0 m-0">
            <img
              src={hospitallocation1}
              alt="detail1"
              className="img-fluid h-100 object-fit-cover"
            />
          </Col>
          <Col xl={3} lg={6} md={6} sm={12} className="p-0 m-0">
            <img
              src={hospitallocation2}
              alt="detail2"
              className="img-fluid h-100 object-fit-cover"
            />
          </Col>
          <Col xl={3} lg={6} md={6} sm={12} className="p-0 m-0">
            <img
              src={hospitallocation3}
              alt="detail3"
              className="img-fluid h-100 object-fit-cover"
            />
          </Col>
          <Col xl={3} lg={6} md={6} sm={12} className="p-0 m-0">
            <img
              src={hospitallocation4}
              alt="detail4"
              className="img-fluid h-100 object-fit-cover"
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "white" }}>
          <div className="container">
            <Row className="p-4 mb-5">
              <Col lg={2}>
                <div className="my-2">
                  <img
                    src={hospitalImage}
                    style={{
                      borderRadius: "50%",
                      width: "130px",
                      height: "130px",
                      border: "2px solid #EDEDED",
                    }}
                    className="sky-background-color"
                  />
                </div>
              </Col>
              <Col lg={7}>
                <div className="my-2">
                  <button className="btn border rounded-5 py-2 px-3 btn-primary">
                    <FaUserNurse className="me-2" />
                    Hospital Specialists
                  </button>
                  <h3 className="fw-bolder fs-4 mt-1">
                    Kiran Hospital Multi Super Specialist
                  </h3>
                  <div className="d-flex  flex-column flex-md-row">
                    <span style={{ fontSize: "15px" }} className="me-2">
                      <TbBed className="primary-color me-2 fs-22"/>
                      10 Bed’s
                    </span>
                    <span style={{ fontSize: "15px" }}  className="me-2">
                      <FaCalendarAlt className="primary-color me-1 fs-16" />
                      Sunday - Friday: 9am - 5pm.
                    </span>
                    <span style={{ fontSize: "15px" }}>
                      <CiLocationOn className="primary-color me-1 fs-20"/>
                      Nidaan Hospital , Sector-1 , Gurgaon
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="d-flex align-items-center justify-content-end">
                <div className="d-flex">
                    <div className="me-2">
                    <button className="btn btn-primary px-4">Book Now</button>
                    </div>
                  <div className="border border-secondary px-2 py-1 rounded-2 me-2">
                    <FaRegHeart />
                  </div>
                  <div className="border border-secondary px-2 py-1 rounded-2">
                    <IoShareSocialOutline />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Container >
          <Row className="gy-4">
            <Col xl={8} lg={8} md={6} sm={6} xs={12}>
              <Row className="progressbar">
                <Col lg={12}>
                  <div
                    className="p-4 rounded-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <p className="fw-bolder fs-5 mb-0">Description</p>
                    <progress value={25} className="w-100">
                      25%
                    </progress>
                    <p style={{ textAlign: "justify" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      egestas id gravida. Libero convallis diam vulputate et
                      volutpat risus amet dolor. Blandit urna sagittis, nibh at
                      vitae nunc. Magnis fringilla of bibendum dictumst lorem
                      non placerat eu et velit. In diam imperdiet imperdiet
                      seeed tortor main suspendisse. Integer habitasse purus
                      aliquam auctor eu, ipsum. A montes, egestas nulla nunc
                      orci auctor. Venenatis fames there are many. Integer
                      habitasse purus aliquam auctor eu, ipsum. A montes,
                      egestas nulla nunc orci auctor. Venenatis fames there are
                      many.
                    </p>
                  </div>
                  <div
                    className="mt-4 p-4 rounded-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <p className="fw-bolder fs-5 mb-0">Hospital Service</p>
                    <progress value={25} className="w-100">
                      25%
                    </progress>
                    <Row>
                      {doctorSkills.map((skill, index) => (
                        <Col
                          key={index}
                          xs={12}
                          sm={12}
                          lg={4}
                          className="mt-2"
                        >
                          <div>
                            <LuCheckCircle className="primary-color me-2" />
                            {skill}
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                  <div
                    className="mt-4 p-4 rounded-3"
                    style={{ backgroundColor: "white" }}
                  >
                    <p className="fw-bolder fs-5 mb-0">Map View</p>
                    <progress value={25} className="w-100">
                      25%
                    </progress>
                    <div
                      style={{
                        height: "100vh",
                        width: "100%",
                        marginTop: "20px",
                      }}
                    >
                      <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                      >
                        <AnyReactComponent
                          lat={59.955413}
                          lng={30.337844}
                          text="My Marker"
                        />
                      </GoogleMapReact>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
              <FormBookAppointment toptext={"Request a Callback"} bgcolor={"#F0F0F0"} btntext={"Submit"}/>
          </Row>
          <div className="p-3 text-center fs-5 fw-bold mt-5" style={{backgroundColor:"white"}}>Similar Listing</div>
                 
            <HospitalSlider/>

        </Container>

        <Mobile />
      </div>
      <HospitalAppoinmentModel show={show} handleClose={handleClose} />
    </>
  );
};

export default HospitalLocationPage;
