import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import nursingservice1 from "../../assets/nursingservice1.png";
import nursingservice2 from "../../assets/nursingservice2.png";
import nursingservice3 from "../../assets/nursingservice3.png";
import { CiLocationOn } from "react-icons/ci";
import "./nursingSerivec.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { SERVICE_VENDOR_API } from "../../config/constant";
import ComingSoonModel from "../Modal/ComingSoonModel";

const NursingService = ({ toptext, middletext, lasttext, viewRoute }) => {
  // const nursingServices = [
  //     {
  //         image: nursingservice1,
  //         name: "Apple Hospitals and Research Institute LTD",
  //         address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
  //     },
  //     {
  //         image: nursingservice2,
  //         name: "Apple Hospitals and Research Institute LTD",
  //         address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
  //     },
  //     {
  //         image: nursingservice3,
  //         name: "Apple Hospitals and Research Institute LTD",
  //         address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
  //     }
  // ];

  const [nursingServices, setNursingServices] = useState([]);

  useEffect(() => {
    const fetchNursingServices = async () => {
      try {
        const response = await axios.get(SERVICE_VENDOR_API);
        setNursingServices(response.data.DATA);
      } catch (error) {
        console.error("Error fetching nursing services:", error);
      }
    };

    fetchNursingServices();
  }, []);

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

  const navigate = useNavigate();
  const handleViewClick = (service) => {
    navigate(viewRoute, { state: { service } });
  };

  return (
    <div className="container nursingSerivec">
      <div className="text-center">
        <span className="primary-color">{toptext}</span>
        <h2>{middletext}</h2>
        <p>{lasttext}</p>
      </div>
      <div className="mt-3">
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
                  style={{ backgroundColor: "#D8E7FF", height: "140px",objectFit:"contain" }}
                />
                <div className="card-body">
                  <span
                    className="card-text fw-bolder"
                    style={{ fontSize: "14px" }}
                  >
                    {service.vendor_name}
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
                  <button
                    className="btn w-100 border-black"
                    // onClick={() => handleViewClick(service)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="d-flex justify-content-center mt-5">
          {/* <Link to="/homeattend">
            {" "}
            <button className="btn btn-dark">
              View More <FaArrowRight />
            </button>
          </Link> */}
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            View More <FaArrowRight />
          </button>
          <ComingSoonModel modalId="exampleModal" />
        </div>
      </div>
    </div>
  );
};

export default NursingService;
