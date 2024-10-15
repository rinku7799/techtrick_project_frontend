import React from "react";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import HeroHomeAttendant from "../component/Hero/HeroHomeAttendant";
import medicalEquipmentHeroImg from "../assets/medical-equipment-hero-img.png";
import { Container } from "react-bootstrap";
import Mobile from "../component/mobile/mobile";
import EquipmentAllType from "../component/EquipmentAllType/EquipmentAllType";

const MedicalEquipment = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Medical Equipment"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
          {
            navText: "Hospital Staffing Services",
            path: "/hospitalstaffservice",
          },
        ]}
      />
      <HeroHomeAttendant img={medicalEquipmentHeroImg} />
      <div className="medical-equipment-text">
        <Container>
          <div className="row">
            <h4>Medical Equipment for Home Care</h4>
            <p>
              Getting medical equipment on rent or purchase at your doorstep has
              never been this convenient. During difficult phases of life, you
              or your loved one might need to rely on various medical equipment
              to get back to normal life. Tech Tricks offers a wide range of
              medical equipment for rent or purchase making healthcare more
              accessible and affordable for you.
            </p>
          </div>
        </Container>
        <Container>
          <div className="row">
            <h4>How Can we Help</h4>
            <p>
              If you need any medical equipment for rent, get it from Tech
              Tricks. Check our exhaustive medical equipment catalogue and rent
              your required one online, via email or over a phone call. Your
              equipment will be delivered at your doorstep
            </p>
          </div>
        </Container>
      </div>
      <EquipmentAllType/>
      <Mobile/>
    </>
  );
};

export default MedicalEquipment;
