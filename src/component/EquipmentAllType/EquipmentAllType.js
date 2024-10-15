import React from "react";
import { Card, Container } from "react-bootstrap";
import "./EquipmentAllType.css"
import { useNavigate } from "react-router-dom";

const EquipmentAllType = () => {
  const EquipmentAllTypeData = [
    {
      id: 1,
      img: require("../../assets/Geriatric-and-Mobility-Care-Equipment.png"),
      name: "Geriatric and Mobility Care Equipment",
    },
    {
      id: 2,
      img: require("../../assets/Sleep-Therapy-Equipment.png"),
      name: "Sleep Therapy Equipment",
    },
    {
      id: 3,
      img: require("../../assets/Mother-and-Baby-Care-Equipment.png"),
      name: "Mother and Baby Care Equipment",
    },
    {
      id: 4,
      img: require("../../assets/Orthopedic-and-Physiotherapy-Care.png"),
      name: "Orthopedic and Physiotherapy Care",
    },
    {
      id: 5,
      img: require("../../assets/Cardiac-Care1.png"),
      name: "Cardiac Care",
    },
    {
      id: 6,
      img: require("../../assets/Respiratory-care.png"),
      name: "Respiratory care",
    },
  ];

  const navigate = useNavigate()

  const handleNavigate = () =>{
    navigate("/details-equipment")
  }

  return (
    <div className="equipment-all-type-wrapper">
      <Container>
        <div className="row mb-4">
          <h4>Medical Equipment</h4>
        </div>
      </Container>
      <Container>
        <div className="row g-4">
          {EquipmentAllTypeData.map((element, index) => (
            <div className="col-12 col-sm-6 col-lg-4">
              <Card>
                <div className="img-wrap text-center">
                  <img src={element?.img}/>
                </div>
                <div className="card-body">
                  <h5 className="mb-4">{element?.name}</h5>
                  <div className="btn btn-outline-dark w-100" onClick={handleNavigate}>View</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        {/* <div className='row'></div> */}
      </Container>
    </div>
  );
};

export default EquipmentAllType;
