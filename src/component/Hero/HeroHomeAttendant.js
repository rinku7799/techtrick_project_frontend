import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "./Hero.css";

const HeroHomeAttendant = ({ img }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = img;
    imageLoader.onload = () => {
      setLoading(false);
    };
  }, [img]);

  return (
    <div className="Hero-wrapper">
      {loading ? (
        <Skeleton height={500} width={"100%"} />
      ) : (
        <Carousel>
          <Carousel.Item interval={2000}>
            <img src={img} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src={img} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
};

export default HeroHomeAttendant;
