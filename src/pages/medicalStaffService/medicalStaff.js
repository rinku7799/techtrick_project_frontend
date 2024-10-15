import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import Mobile from "../../component/mobile/mobile";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import medicalstaffingservive from "../../assets/medicalstaffingservive.png";
import MedicalBookAppoinment from "../../component/BookingAppointment/medicalStaffingService";
import { Col, Container, Row } from "react-bootstrap";
import ClientAndEmployees from "../../component/ClientandEmployee/clientAndEmployee";
import ProfessionalTeam from "../../component/professinalTeam/professionalTeam";
import clientandemployees from "../../assets/clientandemployees.png";
import professionalteam1 from "../../assets/professionalteam1.png";
import professionalteam2 from "../../assets/professionalteam2.png";
import professionalteam3 from "../../assets/professionalteam3.png";
import nurse1 from "../../assets/nurse1.png";
import professinalteaminner from "../../assets/professionalteaminner.png";
import subinnerimg1 from "../../assets/subinner1.png";

const MedicalStaffingService = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Medical Staffing Services"
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
      <HeroHomeAttendant img={medicalstaffingservive} />
      <MedicalBookAppoinment />
      <Container className="mt-4">
        <Row>
          <Col lg={12}>
            <p className="fw-bolder" style={{ fontSize: "30px" }}>
              Are you looking for work? Are you an employer? We are ready to
              work for you!
            </p>
            <p>
              Being an employer in the healthcare industry requires a high level
              of attention to detail and experience. Your medical team has the
              responsibility of saving your patients' lives, so it is important
              that you select the best candidates for your workforce. Permit us
              to assist you in this regard! Our recruiters specialize in
              screening, sourcing, and hiring sought-after healthcare
              professionals. Enlist your business with us today, and let’s talk
              about your staffing goals!
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className=" fw-bolder" style={{ fontSize: "30px" }}>
          Committed to Providing Unparalleled Service to Both Our Clients and
          Employees
        </p>
      </Container>
      <ClientAndEmployees
        img={clientandemployees}
        topheading={"Why Work with Us?"}
        contain={
          "As a highly responsible healthcare staffing and placement company, Specialty is aware that every client has unique demands. With a focus on direct hire, contract, and temporary healthcare employment, we offer a network of more than 200,000 healthcare professionals. In the healthcare staffing industry, Specialty Medical Staffing has over three years of experience. While we offer a variety of medical specialties, nurse staffing, pharmacy staffing, and other allied health staffing are our areas of expertise."
        }
        buttonname={"Request Staffing"}
      />
      <div>
        <Container>
          <div>
            <p className="fs-2 fw-bolder mt-5">
              We can staff the following professionals for your team:
            </p>
          </div>
        </Container>
      </div>
      <ProfessionalTeam
        data={[
          {
            id: 1,
            img: professionalteam1,
            innerImg: subinnerimg1,
            text: "Registered Nurse",
            navigate: "/registerednursefile",
          },
          {
            id: 2,
            img: professionalteam2,
            innerImg: nurse1,
            text: "Licensed Vocational Nurse",
            navigate: "/licensedvocationalnurse",
          },
          {
            id: 3,
            img: professionalteam3,
            innerImg: professinalteaminner,
            text: "Certified Nursing Assistant",
            navigate: "/certifiednursingassistant",
          },
        ]}
      />
      <Mobile />
    </>
  );
};
export default MedicalStaffingService;
