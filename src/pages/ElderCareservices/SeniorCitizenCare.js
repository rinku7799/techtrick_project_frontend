import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import RequestCallbackForm from "./RequestCallbackform";
import seniourcitizenimg from "../../assets/seniourcitizenimg.png";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const SeniorCitizenCare = () => {
  return (
    <>
      <div className="mb-5">
        <Breadcrumb
          breadcrumbTitle="Senior Citizen Care"
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
        <HeroHomeAttendant img={seniourcitizenimg} />
        <Container>
          <Row className="mt-5">
            <Col lg={8}>
              <p>
                Tech Tricks with its large team of specialist, Doctors, Home
                Nurses, Health Professionals, Pathlab, Ambulance, Private
                transportation and Pharmacy Centers, as partners ensure smooth
                and quality senior Home healthcare services activities such as ,
                Medical transportation, help with paper works and discharge
                formalities are also taken care of to make the process easier.
              </p>
              <p className="fs-4 fw-bolder">What is Caregiver Services?</p>
              <p className="text-justify">
                A caregiver service can provide comprehensive support in the
                comfort of your own home. Caregivers, also known as skilled
                attendants, assist a person in need with their daily activities.
                They can help with personal hygiene, mobility, eating, and light
                housework. They are taught how to keep track of a patient's
                overall health by regularly monitoring vital signs such as
                heartbeat and blood pressure. They are taught how to keep track of a patient's
                overall health by regularly monitoring vital signs such as
                heartbeat and blood pressure.
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
                The following are some of the services that home doctors provide
              </p>
              <ul className="text-justify">
                <li>
                  <span className="fw-bolder">Elder Care:</span>We provide the
                  care and compassion that your elderly loved one deserves if
                  they require assistance with daily activities.
                </li>
                <li>
                  <span className="fw-bolder">
                    Health and Lifestyle Management:
                  </span>{" "}
                  Suppose you have a loved one who needs help getting around or
                  who needs to be checked on a regular basis. In that case, a
                  professional attendant is exactly what you require at home.
                </li>
                <li>
                  <span className="fw-bolder">Postoperative Support:</span> It
                  can be difficult for a family to care for someone who has
                  recently had surgery. By monitoring the patient's vital signs
                  and providing support, a qualified in-home attendant can make
                  things easier for the family.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <p className="fs-4 fw-bolder">
                How does Tech Tricks Helps with Care giver Services
              </p>
              <p>
                In the comfort of your own home, our trend attendants provide
                care to those in need. Grooming, feeding, mobility, oral
                medication, vitals monitoring, and various other tasks could all
                be assisted by them.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default SeniorCitizenCare;
