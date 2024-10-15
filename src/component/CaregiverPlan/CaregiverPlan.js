import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./CaregiverPlan.css";
import { IoIosArrowForward } from "react-icons/io";
import BookingModal from "../Modal/BookingModal"


const CaregiverPlan = ({ plan }) => {
  const [showModal, setShowModal] = useState(false);  // Move hooks outside of conditional logic
  const [selectedPrice, setSelectedPrice] = useState("");

  if (!plan || !plan.childes || plan.childes.length === 0) {
    return null;
  }

  const caregiverPlanData = plan?.childes || [];

  const handleBookNowClick = (price) => {
    setSelectedPrice(price);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="caregiver-plan-wrapper CaregiverPlanmain">
      <div className="row g-4 justify-content-center">
        <div className="col-lg-3 col-12 text-start">
          <h4>{plan?.title}</h4>
        </div>
        {caregiverPlanData.map((element, index) => (
          <div className="col-lg-4 col-12 text-start" key={index}>
            <Card
              className="card"
              onClick={() => handleBookNowClick(element.subsubtitle)}
            >
              <h2 className="hover-effect">
                {element?.subtitle} <IoIosArrowForward />
              </h2>
              <p>{element?.description}</p>
            </Card>
          </div>
        ))}
      </div>
      {/* Make sure BookingModal is defined or imported */}
      <BookingModal
        show={showModal}
        handleClose={handleModalClose}
        price={selectedPrice}
      />
    </div>
  );
};

export default CaregiverPlan;
