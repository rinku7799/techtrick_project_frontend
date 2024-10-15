import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import pilessurgery from "../../assets/pilessurgery.png";
import MedicalStaffSurgery from "./medicalstaffslider";
import HospitalSlider from "../hospitalDetail/hospitalslider";
import { Container } from "react-bootstrap";
import BookTrick from "./booktricks";
import { Row, Col } from "react-bootstrap";
import pilessurgeryicon1 from '../../assets/pilessurgeryicon1.png'
import pilessurgeryicon2 from '../../assets/pilessurgeryicon2.png'
import pilessurgeryicon3 from '../../assets/pilessurgeryicon3.png'
import pilessurgeryicon4 from '../../assets/pilessurgeryicon4.png'
import pilessurgeryicon5 from '../../assets/pilessurgeryicon5.png'
import pilessurgeryicon6 from '../../assets/pilessurgeryicon6.png'
import Mobile from "../../component/mobile/mobile";

const SurgeryDetail = () => {
    const benefitsData = [
        {
          imgSrc: pilessurgeryicon1,
          title: "USFDA-Approved",
        },
        {
          imgSrc: pilessurgeryicon2,
          title: "24hr Stay",
        },
        {
          imgSrc: pilessurgeryicon3,
          title: "Cab Services",
        },
        {
          imgSrc: pilessurgeryicon4,
          title: "Advance Technology",
        },
        {
          imgSrc: pilessurgeryicon5,
          title: "Less Cut Less Pain",
        },
        {
          imgSrc: pilessurgeryicon6,
          title: "Quick Discharge",
        },
      ];
    
  return (
    <>
      <div className="pilessurgery">
        <div className="container">
          <Breadcrumb
            breadcrumbTitle="Piles Surgery"
            breadcrumbNav={[
              {
                navText: "Home",
                path: "/",
              },
              {
                navText: "Surgery",
                path: "/book-a-surgery",
              },
            ]}
          />
        </div>
        <HeroHomeAttendant img={pilessurgery} />
        <div style={{ backgroundColor: "#F9F9F9" }}>
          <Container>
            <div className="pt-5">
              <p className="fs-2 fw-bolder">Piles Surgery </p>
              <p>
                Enjoy smooth hospitalization and surgical planning, with our
                esteemed partner physicians & hospitals guaranteeing
                high-quality treatment customized to your requirements
                high-quality treatment customized to your requirements.
              </p>
            </div>
         
          <Row className="justify-content-center mt-3">
          {benefitsData.map((benefit, index) => (
            <Col
              key={index}
              xl={2}
              lg={4}
              md={6}
              sm={8}
              xs={10}
              className="mb-4"
            >
              <div
                className="text-center p-3 h-100 d-flex justify-content-center flex-column align-items-center rounded-4"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",backgroundColor:"white" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-2 rounded-4"
                  style={{
                    height: "70px",
                    width: "70px",
                    backgroundColor: "#F9F9F9",
                  }}
                >
                  <img src={benefit.imgSrc} width="40px" alt="Icon" />
                </div>
                <div className="fw-bolder mb-2 fs-15">{benefit.title}</div>
              </div>
            </Col>
          ))}
        </Row>
        </Container>
          <MedicalStaffSurgery />
          <Container>
            <p className="fw-bold fs-2">Industry Leading Hospital Partners</p>
            <HospitalSlider />
          </Container>
        </div>
        <BookTrick />
        <Mobile/>
      </div>
    </>
  );
};
export default SurgeryDetail;
