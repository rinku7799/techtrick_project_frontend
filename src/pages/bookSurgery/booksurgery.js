import React, { useState } from "react";
import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import booksurgeryimg1 from "../../assets/booksurgeryimg1.png";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import surgeryicon2 from "../../assets/surgeryicon2.png";
import surgeryicon3 from "../../assets/surgeryicon3.png";
import surgeryicon4 from "../../assets/surgeryicon4.png";
import surgeryicon5 from "../../assets/surgeryicon5.png";
import surgeryicon6 from "../../assets/surgeryicon6.png";
import surgeryicon7 from "../../assets/surgeryicon7.png";
import surgeryicon8 from "../../assets/surgeryicon8.png";
import surgeryicon9 from "../../assets/surgeryicon9.png";
import surgeryicon10 from "../../assets/surgeryicon10.png";
import surgeryicon11 from "../../assets/surgeryicon11.png";
import surgeryicon12 from "../../assets/surgeryicon12.png";
import surgeryicon13 from "../../assets/surgeryicon13.png";
import surgeryicon14 from "../../assets/surgeryicon14.png";
import surgeryicon15 from "../../assets/surgeryicon15.png";
import surgeryicon16 from "../../assets/surgeryicon16.png";
import HospitalSlider from "../hospitalDetail/hospitalslider";
import BookTrick from "./booktricks";
import MedicalStaffSurgery from "./medicalstaffslider";
import { useNavigate } from "react-router-dom";
import "./booksurgery.css"; // Import CSS for styling
import Mobile from "../../component/mobile/mobile";

const BookSurgery = () => {
  const navigate = useNavigate();
  const [selectedLabel, setSelectedLabel] = useState(null);

  const surgeryData = [
    { imgSrc: surgeryicon2, label: "Piles" },
    { imgSrc: surgeryicon2, label: "Fistula" },
    { imgSrc: surgeryicon3, label: "Fissures" },
    { imgSrc: surgeryicon4, label: "Kidney Stones" },
    { imgSrc: surgeryicon5, label: "Hydrocele" },
    { imgSrc: surgeryicon6, label: "Gall Stones" },
    { imgSrc: surgeryicon7, label: "Lipoma" },
    { imgSrc: surgeryicon8, label: "Varicocele" },
    { imgSrc: surgeryicon9, label: "Varicose veins" },
    { imgSrc: surgeryicon10, label: "Appendicitis" },
    { imgSrc: surgeryicon11, label: "Gynaecomastia" },
    { imgSrc: surgeryicon12, label: "Hernia" },
    { imgSrc: surgeryicon13, label: "Arthplasty_thr" },
    { imgSrc: surgeryicon14, label: "Arthplasty_thr" },
    { imgSrc: surgeryicon15, label: "Cystoscopy" },
    { imgSrc: surgeryicon16, label: "Rhinoplasty" },
  ];

  const handleColClick = (label) => {
    setSelectedLabel(label);
    navigate(`/book-a-surgery/surgerydetail`, { state: { label } });
  };

  const rows = [];
  for (let i = 0; i < surgeryData.length; i += 4) {
    const cols = surgeryData.slice(i, i + 4).map((item, index) => (
      <Col
        key={index}
        lg={2}
        md={4}
        sm={6}
        xs={12}
        className="d-flex border p-3 align-items-center gy-3 colfocus rounded-3"
        onClick={() => handleColClick(item.label)}
      >
        <img src={item.imgSrc} className="colfocus-img" style={{ width: "35px" }} />
        <p className="ms-4 mb-0 colfocus-text">{item.label}</p>
      </Col>
    ));
    rows.push(
      <Row key={i} className="justify-content-center gap-3">
        {cols}
      </Row>
    );
  }
  

  return (
    <>
      <div className="booksurgery">
          <div style={{ backgroundColor: "#F9F9F9" }} className="pb-3">    
            <Breadcrumb
              breadcrumbTitle="Surgery"
              breadcrumbNav={[
                {
                  navText: "Home",
                  path: "/",
                },
              ]}
            />        
            <HeroHomeAttendant img={booksurgeryimg1} />
            <Container>
            <div>
              <p className="fs-3 fw-bolder text-center mt-4 text-dark">Book a Surgery</p>
              <div className="px-3">{rows}</div>
              <p className="fs-2 fw-bolder mt-3 text-dark">Hospital Appointment</p>
              <p className="text-dark">
                Enjoy smooth hospitalization and surgical planning, with our
                esteemed partner physicians & hospitals guaranteeing high-quality
                treatment customized to your requirements.
              </p>
              <MedicalStaffSurgery />
              <div>
                <p className="fs-2 fw-bolder mt-3 text-dark">
                  Industry Leading Hospital Partners
                </p>
                <HospitalSlider />
              </div>
            </div>
            </Container>
          </div>
      
      </div>
      <BookTrick />
      <Mobile/>
    </>
  );
};

export default BookSurgery;
