import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import RequestCallbackForm from "./RequestCallbackform";
import ElderCareimg from "../../assets/eldercareimg.png";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const ElderCare = () => {
  return (
    <>
      <div className="mb-5">
        <Breadcrumb
          breadcrumbTitle="Elder Care"
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
        <HeroHomeAttendant img={ElderCareimg} />
        <Container>
          <Row className="mt-5">
            <Col lg={8}>
              <p className="fs-4 fw-bolder">What is Elder Care?</p>
              <p className="text-justify">
                A service that attends to the needs and requirements of the
                elderly is called senior care, sometimes referred to as
                eldercare. Eldercare services include assisted living, adult
                daycare, in-home care, and nursing care. A person's health
                problems and ailments may lead them to seek eldercare, even
                though age isn't a determining factor in this decision. A large
                number of elderly persons still reside with family members who
                are in charge of their care. However, in today's world, most
                family members are employed and unable to provide adequate care
                and attention to their ageing parents, necessitating the use of
                dependable and effective elder care programmes.
              </p>
              <p className="text-justify">
                Tech Tricks offers a comprehensive healthcare solution to meet
                your parents' needs. The care plan for each patient is tailored
                to their specific needs. We can also help you with doctor
                appointments, diagnostic services, trained attendants, nursing
                staff, nutrition, and physiotherapy through this plan. You can
                rest assured that a personal health professionals will be
                assigned to you who will ensure that all of your healthcare
                needs are met.
              </p>
            </Col>
            <RequestCallbackForm />
          </Row>
          <Row>
            <Col lg={12}>
              <p className="fs-4 fw-bolder">
                When do you need Caregiver services in your City
              </p>
              <ul className="text-justify">
                <p>
                  <li>
                    <span className="fw-bolder">Medical assessment:</span> A
                    complete lab test with home sample collection will round out
                    the patient's total check, quickly followed by a home visit
                    from a qualified doctor to assess the current situation.
                    Based on your reports and your Doctor's advice, you can
                    design a personalized treatment plan.
                  </li>
                </p>
                <p>
                  <li>
                    <span className="fw-bolder">Health Manager:</span>A trained
                    manager will be available 24 *7 to assist in coordinating
                    with the Doctor and attending to the patient's medical
                    needs.
                  </li>
                </p>
                <p>
                  <li>
                    <span className="fw-bolder">Doctor consultation:</span> It
                    Tech Tricks' physician monitors the patient's recovery on a
                    regular basis at their home.
                  </li>
                </p>
                <p>
                  <li>
                    <span className="fw-bolder">
                      Emergency care coordination:
                    </span>{" "}
                    It In the event of a medical emergency, we work closely with
                    hospitals and ambulance services. A 24-hour helpline is
                    available for family members to keep track of the situation.
                  </li>
                </p>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default ElderCare;
