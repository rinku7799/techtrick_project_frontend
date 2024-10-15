import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import RequestCallbackForm from "./RequestCallbackform";
import NursingCareimg from "../../assets/NursingCareimg.png";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const NursingCare = () => {
  return (
    <>
      <div className="mb-5">
        <Breadcrumb
          breadcrumbTitle="Nursing Care"
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
        <HeroHomeAttendant img={NursingCareimg} />
        <Container>
          <Row className="mt-5">
            <Col lg={8}>
              <p className="text-justify">
                We understand that nothing is better than being in the comfort
                of home, surrounded by family and friends. We can be there, when
                you can’t, to help your aging parents and other elderly family
                members live their golden years at home.
              </p>
              <p className="fs-4 fw-bolder">What is Home Nursing Care?</p>
              <p className="text-justify">
                Home nursing care refers to a variety of medical procedures that
                can be performed in the comfort of your own home. Home nursing
                services are usually less expensive and just as effective as
                those provided in nursing homes or hospitals. Nursing services
                provide personalized care in the comfort of your own home,
                similar to what you'd get in a hospital. They are far more
                sympathetic to the patient, integrating with the patient and
                family and forming an emotional bond with both.
                Physiotherapists, occupational therapists, and trained nurses
                will be on hand to provide nursing care, among other things. As
                a result, you will not have to worry about the quality of care
                provided by the home nurse.
              </p>
            </Col>
            <RequestCallbackForm />
          </Row>
          <Row>
            <Col lg={12}>
              <p className="fs-4 fw-bolder">
                When do you need Caregiver services in your City
              </p>
              <p>
                The primary goal of a home nursing service is to treat a
                patient's injury or illness at home. The following are some of
                the services provided by home nursing:
              </p>
              <ul className="text-justify">
                <li>Surgical wound care.</li>
                <li>Patient and caregiver education. </li>
                <li>Fluctuating health status. Nutrition therapy.</li>
                <li>Injections.</li>
                <li>Tracking serious illness.</li>
                <li>Rehabilitation therapies</li>
                <li>
                  Post-surgical care Feeding, breathing, pain management, and
                  fluid management are all included in post-surgical care. Our
                  nurses will provide care in the privacy of your own home,
                  allowing you to recover faster.
                </li>
                <li>
                  Vaccination Qualified nurses administer vaccines such as
                  pneumonia, hepatitis, typhoid, and others at home
                </li>
                <li>
                  Wound dressing Our highly trained nurses treat a wide range of
                  wounds, including infected wounds, pressure sores, and
                  post-surgical wounds, as well as provide appropriate wound
                  care to help patients recover faster.
                </li>
                <li>
                  Urinary catheterization care Our trained nurses can assist you
                  with bladder cleaning, catheter insertion, and catheter
                  removal in the comfort of your own home.
                </li>
                <li>
                Injection Avoid the inconvenience of going to the hospital and spending a long time there for something as simple as an IV infusion. Contact us to have a nurse come to your home and administer the IV infusion or any other injections that may be required. 
                </li>
                <li>
                Oxygen administration: Trauma, shock, shortness of breath, pulmonary disease, bleeding, and other chronic and acute conditions all necessitate oxygen administration.
                </li>
              </ul>
              <div>
                <p className="fs-4 fw-bolder">
                What are the benifits of Home Nursing Services
                </p>
                <p>
                In-home nursing care has numerous advantages. Nursing care is not only more convenient thanbeing admitted to a nursing home or hospital, but it also aids in the faster recovery of patients. It hasbeen proven that people recover more quickly from their ailments or illnesses when surrounded bytheir loved ones.
                </p>
                <ul>
                  <li>Support in nutrition and diet. </li>
                  <li>Support the patient in your absence. </li>
                  <li>Skilled nursing care in the comfort of your home. </li>
                  <li>Managing chronic health conditions to avoid unnecessary hospitalization. </li>
                  <li>Medication management. </li>
                  <li>One–on–one focus and support. </li>
                  <li>Following a hospital stay for injury or illness, recovery care is provided at home</li>
                  <li>Better health outcomes</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default NursingCare;
