import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Hero.css";

const HeroHomeAttendant = ({ sliderimage }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sliderimage.length === 0) {
      setLoading(false);
      return;
    }

    const imageLoaderPromises = sliderimage.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; 
      });
    });

    Promise.all(imageLoaderPromises).then(() => {
      setLoading(false);
    });
  }, [sliderimage]);

  return (
    <div className="Hero-wrapper">
      {loading ? (
        <Skeleton height={500} width={"100%"} />
      ) : (
        <Carousel>
          {Array.isArray(sliderimage) && sliderimage.length > 0 && 
            sliderimage.map((image, index) => (
              <Carousel.Item key={index} interval={2000}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </Carousel.Item>
            ))
          }
        </Carousel>
      )}
    </div>
  );
};

export default HeroHomeAttendant;
