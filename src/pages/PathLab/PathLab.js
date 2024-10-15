import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import pathlab from "../../assets/Screenshot_4.png";
import pathlab1 from "../../assets/pathlab1.png";
import pathlab2 from "../../assets/pathlab2.png";
import pathlab3 from "../../assets/pathlab3.png";
import pathlab4 from "../../assets/pathlab4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import homeattend1 from "../../assets/homeattend1.png";
import homeattend2 from "../../assets/homeattend2.png";
import nursingservice3 from "../../assets/nursingservice3.png";
import { CiLocationOn } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './pathlab.css';
import Mobile from "../../component/mobile/mobile";

const PathLab = () => {
  const nursingServices = [
    {
      image: nursingservice3,
      name: "Tandel Clinic Laboratory",
      address:
        "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320",
    },
    {
      image: homeattend1,
      name: "Tandel Clinic Laboratory",
      address:
        "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320",
    },
    {
      image: homeattend2,
      name: "Tandel Clinic Laboratory",
      address:
        "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 698,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="pathlab" style={{ backgroundColor: "#F9F9F9" }}>
        <Container>
          <Breadcrumb
            breadcrumbTitle="Path Lab"
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
            ]}
          />
        </Container>
        <div>
          <img
            src={pathlab}
            style={{ objectFit: "contain" }}
            className="img-fluid w-100"
          />
        </div>
        <Container className="mt-4">
          <div>
            <p className="fs-3 fw-bolder">Full Lab Checkup</p>
            <p style={{ textAlign: "justify" }}>
              Anybody can catch a disease at any point of time without even
              knowing about it at the initial stage. Most of us may stay unaware
              of all those hidden injuries or infections that may end up turning
              serious and even incurable. In fact, there are diseases that may
              show symptoms only after reaching the final stage, when it's
              hardest to find a cure for it. A full body checkup can help you
              step into the path of recovery, so it is necessary to avail the
              facilities of full body checkup at home to avoid having a disease
              that has reached the final stage. A full body checkup price is
              truly reasonable in most of the cities these days, so find a
              service provider who provides the facility of full body checkup
              near you.
            </p>
          </div>
          <div>
            <p className="fs-3 fw-bolder">
              What are the benefits of body checkup?
            </p>
            <div>
              A full body checkup has numerous health benefits, such as:
            </div>
            <ul style={{ textAlign: "justify" }}>
              <li>
                It will help you to detect any minor to critical health
                concerns. It may help the medical experts decide on further
                medical actions to be taken.
              </li>
              <li>
                An annual full body checkup can help in the early diagnosis of a
                disease, and keep you informed about your health.
              </li>
              <li>
                It may help you fetch all the necessary information about the
                exact condition of your body organs, blood, tissue or any
                specific part that you wish to get examined.
              </li>
              <li>Save Up to Rs. 5000 Tax Under Section 80D.</li>
            </ul>
          </div>
          <div>
            <p className="fs-3 fw-bolder">
              When often should you go for a full body checkup?
            </p>
            <p style={{ textAlign: "justify" }}>
              How often you should go for a full body checkup depends on many
              factors including your age, health history, family’s health
              history, current health status, and lifestyle habits. However,
              most doctors prefer to go for a full body checkup once every three
              months.
            </p>
          </div>
        </Container>
      </div>
      <Container className="py-4">
        <div>
          <p className="fs-3 fw-bolder">Why Tech Tricks ?</p>
          <div className="row gap-4">
            <div
              className="col d-flex align-items-center shadow p-3 rounded-4"
              style={{ backgroundColor: "#F9F9F9" }}
            >
              <img src={pathlab1} width={"50px"} height={"50px"} alt="Lab"/>
              <p className="ms-3">NABL Accredited Fully Automated Labs</p>
            </div>
            <div
              className="col d-flex align-items-center shadow p-3 rounded-4"
             style={{ backgroundColor: "#F9F9F9" }}
            >
               <img src={pathlab2} width={"50px"} height={"50px"} alt="Lab" />
               <p className="ms-3">NABL Accredited Fully Automated Labs</p>
            </div>
            <div
              className="col d-flex align-items-center shadow p-3 rounded-4"
             style={{ backgroundColor: "#F9F9F9" }}
            >
              <img src={pathlab3} width={"50px"} height={"50px"} alt="Lab" />
              <p className="ms-3">NABL Accredited Fully Automated Labs</p>
            </div>
            <div
              className="col d-flex align-items-center shadow p-3 rounded-4"
             style={{ backgroundColor: "#F9F9F9" }}
            >
               <img src={pathlab4} width={"50px"} height={"50px"} alt="Lab" />
               <p className="ms-3">NABL Accredited Fully Automated Labs</p>
            </div>
          </div>
        </div>
      </Container>
      <div style={{ backgroundColor: "#F9F9F9" }} className="py-5 pathlab">
        <Container>
          <div className="mt-3">
            <p className="fs-3 fw-bolder">Lab Partners</p>
            <Slider {...settings}>
              {nursingServices.map((service, index) => (
                <div key={index} className="slick-slide p-2">
                  <div
                    className="card w-100 "
                    style={{
                      width: "21.5rem",
                      height: "18.5rem",
                      margin: "0px 0px",
                    }}
                  >
                    <img
                      src={service.image}
                      className="card-img-top w-100"
                      style={{
                        backgroundColor: "#D8E7FF",
                        height: "140px",
                        objectFit: "contain",
                      }}
                    />
                    <div className="card-body">
                      <span
                        className="card-text fw-bolder"
                        style={{ fontSize: "14px" }}
                      >
                        {service.name}
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
                      <Link to="/pathlab/labpartners/labcenterdetail">
                        {" "}
                        <button className="btn w-100 border-black">View</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="d-flex justify-content-center mt-5">
              <Link to="/pathlab/labpartners">
                <button className="btn btn-dark">
                  View More <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Mobile/>
    </>
  );
};
export default PathLab;
