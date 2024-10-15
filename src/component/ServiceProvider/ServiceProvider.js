import React from "react";
import { Card, Container } from "react-bootstrap";
import nursingservice1 from "../../assets/nursingservice1.png";
import nursingservice2 from "../../assets/nursingservice2.png";
import nursingservice3 from "../../assets/nursingservice3.png";
import { CiLocationOn } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServiceProvider.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceProvider = () => {
  const ServiceProviderData = [
    {
      image: nursingservice1,
      name: "Apple Hospitals and Research Institute LTD",
      address:
        "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320",
    },
    {
      image: nursingservice2,
      name: "Apple Hospitals and Research Institute LTD",
      address:
        "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320",
    },
    {
      image: nursingservice3,
      name: "Apple Hospitals and Research Institute LTD",
      address:
        "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320",
    },
  ];

  const settings = {
    // dots: false,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 698,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="service-provider-wrapper">
      <Container>
        <div className="row text-start">
          <h4>Meet Our Service Provider</h4>
        </div>
      </Container>
      <Container>
        <div className="col-12">
          <div className="service-provider-slider">
            <Slider {...settings}>
              {ServiceProviderData.map((element, index) => (
                <Card className="card">
                  <div className="img-wrap">
                    <img src={element?.image} />
                  </div>
                  <div className="card-body">
                    <div className="row text-start">
                      <p>{element?.name}</p>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex gap-3 text-start">
                        <div>
                          <CiLocationOn className="icons" />
                        </div>
                        <div style={{fontSize:"13px"}}>{element?.address}</div>
                      </div>
                    </div>
                    <Link to="/nurselist"><div className="col-12 btn border-black mt-2">View</div></Link>
                  </div>
                </Card>
              ))}
            </Slider>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <Link to="/homeattend">
            <button className="btn btn-dark rounded-0">
              View More <FaArrowRight />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ServiceProvider;
