import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import RequestCallbackForm from "./RequestCallbackform";
import DignosticCareimg from "../../assets/DignosticCareimg.png";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const DignosticCare =()=>{
    return(
        <>
          <div className="mb-5">
        <Breadcrumb
          breadcrumbTitle="Dignostic Care"
          breadcrumbNav={[
            {
              navText: "Home",
              path: "/",
            },
            {
              navText: "Elder Care Services",
              path: "/elder-care-services",
            },
          ]}
        />
        <HeroHomeAttendant img={DignosticCareimg} />
        <Container>
          <Row className="mt-5">
            <Col lg={8}>
              <p className="text-justify">
              We have a team of experienced phlebotomist who collect sample’s from patient’s Home. Once a patient books a test, the phlebotomist visit as per the agreed time sliot and collect the sample. Within 48 hours of collecting the sample, we send out acurate reports to patient’s via whatsaap or e-mail.
              </p>
              <p className="fs-4 fw-bolder">How does Tech Tricks help with Dignostic services ?</p>
              <div className="d-flex justify-content-between fw-semibold">
              <ul><li>VDRL</li></ul>
              <ul><li>ECG</li></ul>
              <ul> <li>TSH</li></ul>
              <ul><li>Uric acid test</li></ul>              
              <ul><li>Entire body checkup</li></ul>
              </div>
              <div className="d-flex fw-semibold">
              <ul>
              <li>RBS test</li>
              </ul>
              <ul className="ms-5"><li>Typhoid and urine culture test</li></ul>
              </div>
            </Col>
            <RequestCallbackForm />
          </Row>
        </Container>
      </div>
        </>
    )
}
export default DignosticCare;