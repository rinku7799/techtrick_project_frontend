import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { FaHeart, FaMoneyBill, FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import medals from "../../assets/medal-details-equipment.png";
import "./DetailsAllEquipment.css";
import { Link } from "react-router-dom";

const DetailsAllEquipment = () => {
  const DetailsAllEquipmentData = [
    {
      id: 1,
      img: require("../../assets/Mag-Wheelchair.png"),
      name: "Mag Wheelchair",
      medal: "Arrex, Ezlife, Karma, Medemove",
      price: "₹ 3650",
    },
    {
      id: 2,
      img: require("../../assets/Hospital-Cot–Icu-5-Function.png"),
    //   name: "Hospital Cot – Icu 5 Function Mot...",
      name: "Hospital Cot – Icu 5 Function",
      medal: "Arrex, Shambho life solution",
      price: "₹ 1,56,000 ",
    },
    {
      id: 3,
      img: require("../../assets/ICU-5-function-bed.png"),
      name: "ICU 5 function bed",
      medal: "Arrex, Hightech, Surgix",
      price: "₹ 1,85,000 ",
    },
    {
      id: 4,
      img: require("../../assets/Icu-5-Function–Manual.png"),
      name: "Icu 5 Function – Manual",
      medal: "Arrex, Hightech, Surgix",
      price: "₹ 82,500 ",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
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

//   const [openIndex, setOpenIndex] = useState([]);

//   const handleToggle = (index) => {
//     if (openIndex.includes(index)) {
//         setOpenIndex(openIndex.filter((item) => item !== index));
//     } else {
//         setOpenIndex([...openIndex, index]);
//     }
//   };

const [likedHospitals, setLikedHospitals] = useState([]);

    const toggleLike = (index) => {
        if (likedHospitals.includes(index)) {
            setLikedHospitals(likedHospitals.filter((item) => item !== index));
        } else {
            setLikedHospitals([...likedHospitals, index]);
        }
    };

  
  return (
   
        <div className="col-12">
          <div className="details-all-equipment-slider">
            <Slider {...settings}>
              {DetailsAllEquipmentData.map((element, index) => (
                <Card>
                  <div className="img-wrap">
                    <img src={element?.img} />
                  </div>
                  <div
                    className="position-absolute top-0 end-0 mt-2 me-2"
                    // onClick={() => handleToggle(index)}
                    onClick={() => toggleLike(index)}
                    style={{
                      backgroundColor: "white",
                      width: "30px",
                      height: "30px",
                      borderRadius: "5px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    {/* {openIndex === index ? (
                      <FaHeart style={{ color: "red" }} />
                    ) : (
                      <FaRegHeart />
                    )} */}
                     <FaHeart style={{ fontSize: "17px", color: likedHospitals.includes(index) ?  "red" : "#D7D7D7", zIndex: 1}}/>
                  </div>
                  <div className="card-body">
                    <div className="row mb-3 name">
                      <div>{element?.name}</div>
                    </div>
                    <div className="row mb-1">
                      <div className="d-flex gap-3 align-items-center">
                        <div>
                          <img src={medals} />
                        </div>
                        <div className="medal">{element?.medal}</div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="d-flex gap-3 align-items-center">
                        <div>
                          <FaMoneyBill />
                        </div>
                        <div className="price">{element?.price}</div>
                      </div>
                    </div>
                   <Link to="/magwheel-chair"> <div className="btn btn-outline-dark w-100 mb-2">View</div></Link>
                    <div className="btn btn-primary w-100">Book Now</div>
                  </div>
                </Card>
              ))}
            </Slider>
          </div>
        </div>
  );
};

export default DetailsAllEquipment;
