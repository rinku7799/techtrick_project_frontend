import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import "./exploreService.css";

const ExploreServices = ({ servicedata }) => {
  const navigate = useNavigate();

  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,  
    variableWidth: true, 
    className: "center",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => <ul style={{ margin: "0px" }}> {dots} </ul>,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  const handleCardClick = (id, serviceName, subservices) => {
    if (!isDragging) {
      const kebabCaseStr = serviceName
        .toLowerCase()
        .replace(/-/g, "~")
        .replace(/\s+/g, "-");
      if (subservices.length > 0) {
        navigate(`/${kebabCaseStr}`, { state: { serviceName, id } });
      } else {
        navigate(`/${kebabCaseStr}`, { state: { serviceName } });
      }
    }
  };
  if (!Array.isArray(servicedata) || servicedata.length === 0) {
    return null; 
  }
  return (
    <Container className="exploreService mt-5">
      <div className="text-center mb-4">
        <span className="primary-color">CATEGORIES</span>
        <h2>Explore Services</h2>
        <p>
          Explore some of the best tips from around the city from our partners
          and friends.
        </p>
      </div>
      <Slider {...settings}>
        {Array.isArray(servicedata) &&
          servicedata.map((item, index) => (
            <div className="card-container mt-3" key={index}>
              <Card
                className="card"
                onMouseDown={() => setIsDragging(false)}
                onMouseMove={() => setIsDragging(true)}
                onMouseUp={() =>
                  handleCardClick(item.id, item.service_name, item?.subservices)
                }
              >
                <Card.Img
                  variant="top"
                  src={item.service_image}
                  className="card-img h-100"
                  style={{ objectFit: "cover" }}
                  alt={item.service_name}
                />
                <Card.Img
                  variant="top"
                  src={item.logo}
                  className="inner-img"
                  alt={`${item.service_name} logo`}
                />
                <Card.Title className="inner-text">
                  {item.service_name}
                </Card.Title>
                <Card.Text className="inner-text1">{item.listing}</Card.Text>
              </Card>
            </div>
          ))}
      </Slider>
    </Container>
  );
};

export default ExploreServices;
