import MedicalTransportation from "../../component/MedicalTransportation/MedicalTransportation";
import ambulence1 from "../../assets/ambulence1.png";
import ambulence2 from "../../assets/ambulence2.png";
import { Col, Container, Row } from "react-bootstrap";
import MedicalTransportationimg1 from "../../assets/MedicalTransportationimg1.png";
import MedicalTransportationimg2 from "../../assets/MedicalTransportationimg2.png";
import MedicalTransportationimg3 from "../../assets/MedicalTransportationimg3.png";
import MedicalTransportationimg4 from "../../assets/MedicalTransportationimg4.png";
import MedicalTransportationimg5 from "../../assets/MedicalTransportationimg5.png";
import NursingService from "../../component/nursingService/nursingSerivec";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import MedicalTransportationServices from "./MedicalTransportationServices";


const MedicalTransportationPage = () => {

 
  return (
    <>
      <MedicalTransportation img1={ambulence1} img2={ambulence2} />
      <Container>
        <div className="mt-5">
          <Row>
            <Col lg={6}>
              <p className="fs-2 fw-bolder">Medical Transportation</p>
              <p>
                Medical transportation services are essential for ensuring
                patients can access healthcare facilities for non-emergency and
                emergency medical needs.
              </p>
              <p>
                Our 24/7 Assistance centre is a centralized emergency helpline
                for hospitals. This service allows hospitals to retain the same
                number across all of their service provider, ensuring that
                patients can easily access emergency care no matter where they
                are located. Our trained professionals can answer calls in under
                5 seconds, and we offer a call-back service for every missed
                call to ensure that patients can receive the help they need as
                soon as possible.
              </p>
            </Col>
            <Col lg={6}>
              <img
                src={MedicalTransportationimg1}
                className="w-100 img-fluid rounded-4"
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={6}>
              <img
                src={MedicalTransportationimg2}
                className="w-100 img-fluid rounded-5"
              />
            </Col>
            <Col lg={6}>
              <p className="fs-2 fw-bolder">Centralized Ambulance Management</p>
              <div className="text-justify">
                Our 24/7 Assistance centre is a centralized emergency helpline
                for hospitals. This service allows hospitals to retain the same
                number across all of their service provider, ensuring that
                patients can easily access emergency care no matter where they
                are located. Our trained professionals can answer calls in under
                5 seconds, and we offer a call-back service for every missed
                call to ensure that patients can receive the help they need as
                soon as possible.
              </div>
              <img
                src={MedicalTransportationimg3}
                width={"300px"}
                style={{ marginTop: "-50px" }}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <div className="sky-background-color text-center p-5 mt-3">
        <p className="fs-2 fw-bolder">Ambulance Owner Registration is open!</p>
        <p className="fs-5">
          Are you a Ambulance Owner and want to work with us? Download E
          Ambulance App from Play Store and register as Driver.
        </p>
      </div>
      <p className="fs-3 fw-bolder container mt-5">Meet Our Service Provider</p>
      <NursingService viewRoute="/medical-transportation-detail"/>

      <div className="mt-4 container">
        <Row className="mt-5">
          <Col lg={6}>
            <img
              src={MedicalTransportationimg4}
              className="w-100 img-fluid rounded-5"
            />
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <img src={MedicalTransportationimg5} width={"200px"} />
              </Col>
              <Col lg={8}>
                <p className="fs-2 fw-bolder mt-4">
                  Superior Quality Ambulance Service in Odisha
                </p>
              </Col>
            </Row>
            <p className="fs-4 fw-bolder text-primary ms-3">Our Specialties</p>
            <Row>
              <Col lg={5} className="ms-4">
                <p>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />{" "}
                  Quickest Service Time
                </p>
                <p>
                  <IoMdCheckmarkCircleOutline className="text-primary  me-1" />{" "}
                  Cheapest Pricing
                </p>
                <p>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />{" "}
                  24x7 Availability
                </p>
                <p>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />{" "}
                  Trained Friendly Staffs
                </p>
              </Col>
              <Col lg={5} className="ms-4">
                <p>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />{" "}
                  Quickest Service Time
                </p>
                <p>
                  <IoMdCheckmarkCircleOutline className="text-primary  me-1" />{" "}
                  Cheapest Pricing
                </p>
                <p>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />{" "}
                  24x7 Availability
                </p>
                <p>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />{" "}
                  Trained Friendly Staffs
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
     <MedicalTransportationServices/>
     <Container>
     <div className="py-5 text-justify">
        <p className="fs-3 fw-bolder">Why Choose Medical transportation Booking Services?</p>
        <p>Tech Tricks Medical Transportation Services is a notable Ambulance and private car Service in Bhubaneswar to transport patients quickly from home to hospital.</p>
        <p>Below are some key features you can get with our ambulance services in Bhubaneswar:</p>
        <p><span className="fw-bolder">24/7 Availability:</span>We provide 24/7 ambulance and private car service in Bhubaneswar to ensure your loved ones can get help when they need it most. In a medical emergency, every second is crucial that’s why we also offer Air Ambulance Service in Bhubaneswar.</p>
        <p><span className="fw-bolder">Fast Response:</span> We understand the importance of timely medical care and fast response time in medical emergencies. Tech Tricks App is the best way to book an ambulance or Private car service in Odisha within a few seconds.</p>
        <p><span className="fw-bolder">Expert Care:</span>Our ambulances are equipped with advanced medical instruments and medical professionals to provide expert care to the patients. Our medical teams are capable of handling a widerange of medical emergencies.</p>
        <p><span className="fw-bolder">Affordable Cost:</span>Our ambulance and Private Car services in Bhubaneswar are affordable compared to other private ambulance service providers. Our services don’t have any hidden money. You can rely on us and you will receive fair prices for ambulance services in Bhubaneswar, Odisha.</p>
        <p>Tech Tricks offers a variety of ambulances including BLS ambulance, ALS ambulance, Air Ambulance Services, and Dead Body Ambulance Services in Bhubaneswar. We offer ambulance services for non-emergency transport, emergency medical transport, inter-hospital transport, and neonatal and pediatric transport. Book an ambulance online with the Tech Tricks app or call the corporate office Bhubaneswar Medical Transportation number at +91-9861806040.</p>

        <p className="fs-3 fw-bolder">How to Book an Ambulance or Private Car in Bhubaneswar</p>
        <p>Tech Tricks is transforming the ambulance or private car booking process by providing an easy-touse app and website. You can now book an ambulance or private car with just a few clicks and rest assured that we will reach you quickly. Our platform also provides you with all the necessary information about our services and ensures a stress free experience.</p>
     </div>
     </Container>
   
    </>
  );
};
export default MedicalTransportationPage;
