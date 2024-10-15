import hospitalImage from "../../assets/hospital.jpg";
import { CiLocationOn } from "react-icons/ci";
import { PiMedalLight } from "react-icons/pi";
import { TbBed } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const HospitalSlider = () => {

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

  const toggleLike = (index) => {
    if (likedHospitals.includes(index)) {
      setLikedHospitals(likedHospitals.filter((item) => item !== index));
    } else {
      setLikedHospitals([...likedHospitals, index]);
    }
  };
  const [likedHospitals, setLikedHospitals] = useState([]);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <>
      <div className="row">
        <div className="medical-staff-slider">
          <Slider {...settings} className="p-0">
            {hospitals.map((hospital, index) => (
              <div className="col-md-6 col-sm-12 mb-3" key={index}>
                <div
                  className="card position-relative h-100"
                  style={{ width: "100%" }}
                >
                  <div
                    className="position-absolute top-0 start-0 mt-2 ms-2"
                    onClick={() => toggleLike(index)}
                    style={{
                      border: "1px solid #D7D7D7",
                      backgroundColor: "white",
                      width: "30px",
                      height: "30px",
                      borderRadius: "5px",
                    }}
                  >
                    <FaHeart
                      style={{
                        fontSize: "17px",
                        color: likedHospitals.includes(index)
                          ? "#D7D7D7"
                          : "red",
                        zIndex: 1,
                        marginLeft: "6px",
                      }}
                    />
                  </div>
                  <div className="row g-0">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <img
                        src={hospitalImage}
                        className="img-fluid rounded-start w-100 h-100"
                        alt="hospital"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                      <div className="card-body">
                        <h5 className="card-title fw-bolder">
                          {hospital.name}
                        </h5>
                        <div className="d-flex mt-3">
                          <PiMedalLight style={{ fontSize: "40px" }} />
                          <p className="card-text ms-2">
                            {hospital.description}
                          </p>
                        </div>
                        <div className="d-flex mt-2">
                          <TbBed style={{ fontSize: "25px" }} />
                          <p className="card-text ms-2">{hospital.beds}</p>
                        </div>
                        <div className="d-flex mt-2">
                          <CiLocationOn style={{ fontSize: "35px" }} />
                          <p className="card-text ms-2">{hospital.address}</p>
                        </div>
                        <button
                          className="btn w-100 btn-primary mt-4"
                          onClick={handleShow}
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HospitalSlider;
