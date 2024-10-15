import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import homeimage1 from "..//assets/homepage1.png";
import homeimage2 from "..//assets/homepage2.png";
import homeimage3 from "..//assets/homepage3.png";
import ExploreServices from "../component/exploreService/exploreService";
import NursingService from "../component/nursingService/nursingSerivec";
import HospitalHome from "../component/hospitalHome/hospitalHome";
import MedicalTransportation from "../component/MedicalTransportation/MedicalTransportation";
import Testimonial from "../component/testimonial/testimonial";
import Experiences from "../component/Experiences/experiences";
import Question from "../component/Question/question";
import Mobile from "../component/mobile/mobile";
import backgroundimage from ".././assets/backgroundimage.jpg";
import home from ".././assets/home.png";
import { CiLocationOn } from "react-icons/ci";
import vector1 from "../assets/vector-6 1.png";
import vector2 from "../assets/vector-8 1.png";
import Select from "react-select";
import "./home.css";
import axios from "axios";
import { SERVICES_API } from "../config/constant";
import ComingSoonModel from "../component/Modal/ComingSoonModel";

const Home = () => {
  const [servicedata, setservicedata] = useState("");
  console.log("servicedata==>", servicedata);

  useEffect(() => {
    const servicesData = async () => {
      try {
        const response = await axios.post(SERVICES_API);
        // console.log("servicehomepage==>", response.data);
        setservicedata(response.data.DATA);
      } catch (err) {
        console.log("error fetching the data", err);
      }
    };

    servicesData();
  }, []);

  const options = [
    { value: "nursing", label: "Nursing Services" },
    { value: "hospital", label: "Hospital Appointments" },
    { value: "medicine", label: "Medicine Delivery" },
    { value: "test", label: "Path Lab Test" },
    { value: "transportation", label: "Medical Transportation" },
    { value: "equipment", label: "Medical Equipment" },
  ];

  return (
    <>
      <div className="background-image-wrapper pt-5">
        <img
          src={backgroundimage}
          className="background-image bodrer"
          alt="Background"
        />
        <img src={home} className="background-image bodrer" alt="Background" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 setform">
              <p className="fs-5">Discover medical service around you!</p>
              <div className="box2-head">
                <span className="fw-bolder" style={{ fontSize: "50px" }}>
                  Let’s find an amazing
                </span>
                <h1 className="fw-bolder" style={{ fontSize: "50px" }}>
                  service for you
                </h1>
              </div>
              <svg
                width="207"
                height="28"
                viewBox="0 0 207 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_270_7045)">
                  <path
                    d="M2.36001 19.8857C3.05164 19.5151 3.46663 19.2679 4.01992 18.8972C4.57323 18.6501 4.9882 18.4029 5.54151 18.1559C6.50979 17.6616 7.61639 17.1672 8.58467 16.6729C10.6595 15.6844 12.7344 14.943 14.6709 14.0781C18.8208 12.4717 22.9705 11.1124 27.2585 9.87676C35.6964 7.52896 44.4109 5.67544 52.9871 4.43977C61.84 3.20409 70.5544 2.46268 79.2689 2.21554C87.9835 1.84484 96.698 1.96841 105.412 2.46268C107.626 2.58625 109.701 2.70982 111.914 2.83338C114.127 2.95695 116.202 3.08052 118.415 3.32765C122.703 3.82193 126.991 4.19263 131.279 4.81047L137.78 5.67544L144.144 6.66399C148.432 7.28183 152.581 8.1468 156.869 9.01179C173.745 12.3481 190.344 16.7965 206.667 21.8628C190.068 17.538 173.331 13.8309 156.316 11.3596C152.028 10.7417 147.879 10.1239 143.591 9.62963L137.227 8.88821L130.864 8.39395C126.576 8.02324 122.288 7.77611 118 7.52896C115.925 7.4054 113.712 7.4054 111.637 7.28183C109.562 7.15827 107.349 7.15827 105.274 7.15827C88.2601 7.03469 71.1077 8.39395 54.6471 11.6067C46.3475 13.2131 38.3247 15.3137 30.4401 17.9087C26.5669 19.2679 22.6939 20.7508 18.9591 22.3571C17.1608 23.2221 15.2243 24.0871 13.5644 24.952C12.7344 25.4463 11.7661 25.8171 10.9362 26.3113C10.5212 26.5584 10.1062 26.8056 9.69127 27.0527C9.27629 27.2999 8.86131 27.5469 8.58467 27.6705C6.23313 29.2769 2.91332 28.9063 1.11509 26.8056C-0.683141 24.7049 -0.268165 21.7393 2.08337 20.1329C2.22169 20.0093 2.22169 20.0093 2.36001 19.8857Z"
                    fill="#1463F3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_270_7045">
                    <rect
                      width="206.667"
                      height="26.6667"
                      fill="white"
                      transform="translate(0 0.666504)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <input
                  type="text"
                  className="w-100 p-3 ps-4 border mt-3"
                  placeholder="What are you looking for?"
                  style={{ borderRadius: "30px" }}
                />
              </div>
              <div className="row mt-4">
                <div className="col-lg-6 col-md-6 mb-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control p-3 ps-4 border location"
                      placeholder="Surat, Gujarat, India"
                      style={{
                        borderRadius: "30px 0 0 30px",
                        borderRight: "none",
                      }}
                    />
                    <span
                      className="input-group-text w-25 justify-content-end"
                      id="basic-addon2"
                      style={{
                        borderRadius: "0 30px 30px 0",
                        borderLeft: "none",
                        backgroundColor: "white",
                      }}
                    >
                      <CiLocationOn
                        style={{ fontSize: "30px" }}
                        className="primary-color"
                      />
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-3">
                  <Select
                    className="w-100 border"
                    styles={{ borderRadius: "30px" }}
                    options={options}
                    placeholder={"Select Category"}
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                  />
                </div>
              </div>
              <div className="mt-3">
                <button
                  className="btn border w-100 btn-primary p-3"
                  style={{ borderRadius: "30px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <FaSearch className="me-1 fs-5" />
                  Search
                </button>

                <ComingSoonModel modalId="exampleModal" />
              </div>
            </div>
            <div className="col-md-6 setimage">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={homeimage2}
                    className="img-fluid"
                    style={{
                      borderRadius: "200px",
                      height: "420px",
                      border: "5px solid white",
                      objectFit: "cover",
                    }}
                    data-aos="zoom-in"
                  />
                </div>
                <div className="col-md-6 position-relative">
                  <div className="vector-1">
                    <img src={vector1} />
                  </div>
                  <img
                    src={homeimage1}
                    className="img-fluid position-relative  ms-5"
                    style={{
                      width: "85%",
                      height: "45%",
                      borderRadius: "20px",
                      border: "5px solid white",
                      objectFit: "cover",
                    }}
                    data-aos="zoom-in"
                  />
                  <div className="vector-2">
                    <img src={vector2} />
                  </div>
                  <img
                    src={homeimage3}
                    className="img-fluid position-relative rounded-circle mt-4"
                    style={{
                      width: "240px",
                      height: "240px",
                      border: "5px solid white",
                      objectFit: "cover",
                    }}
                    data-aos="zoom-in"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExploreServices servicedata={servicedata} />
      <div style={{ marginTop: "100px" }}>
        <NursingService
          toptext={"NURSING SERVICE"}
          middletext={"Find Service Provider"}
          lasttext={
            "Explore some of the best tips from around the city from our partners and friends."
          }
          viewRoute="/nurselist"
        />
      </div>
      <div
        className="border bg-dark d-flex justify-content-center align-items-center"
        style={{ height: "270px", marginTop: "100px" }}
      >
        <div className="container text-white">
          <div className="row">
            <div className="col-lg-6">
              <p style={{ fontSize: "30px" }}>
                Trusted by over 22,000+ clients worldwide
              </p>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="d-flex flex-row align-items-center">
                <p className="h1">15k</p>
                <p className="ms-2 mt-2">Total Verified Listings</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="d-flex flex-row align-items-center">
                <p className="h1">40k</p>
                <p className="ms-2 mt-2">Our Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="d-flex flex-row align-items-center">
                <p className="h1">5.6k</p>
                <p className="ms-2 mt-2">Places In The World</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HospitalHome />
      <div style={{ marginTop: "100px" }}>
        <MedicalTransportation />
      </div>
      <Testimonial />
      <Experiences />
      <Question />
      <Mobile />
    </>
  );
};

export default Home;
