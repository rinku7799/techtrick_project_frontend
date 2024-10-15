import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import RequestCallbackForm from "./RequestCallbackform";
import elderphysiotheraphyimg from "../../assets/elderphysiotheraphyimg.png";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const ElderPhysiotherapy = () => {
  return (
    <>
      <div className="mb-5">
        <Breadcrumb
          breadcrumbTitle="Physiotherapy"
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
        <HeroHomeAttendant img={elderphysiotheraphyimg} />
        <Container>
          <Row className="mt-5">
            <Col lg={8}>
              <p className="text-justify">
                We provide you with a specialist in physiotherapy services in
                addressing your needs at Home. You can intimate us from the web
                portal or application for physiotherapy service and get all the
                medical facility at Home.
              </p>
              <p className="fs-4 fw-bolder">What is Physiotheraphy?</p>
              <p className="text-justify">
                A physiotherapist is a primary healthcare provider who helps
                patients maintain, regain, and improve their functional mobility
                and strength through kinesiology (biomechanics), electrotherapy,
                exercise therapy, and manual therapy. Patients with injuries and
                disabilities such as neck pain, knee pain, back pain, and
                ligament problems can benefit from the services of
                physiotherapists. Physiotherapists can treat patients at home,
                treating both acute and chronic conditions. Paralysis, Cerebral
                Palsy, Parkinson's disease, Multiple Sclerosis, and stroke are
                all conditions that can benefit from physiotherapy.
              </p>
            </Col>
            <RequestCallbackForm />
          </Row>
          <Row>
            <Col lg={12}>
              <p className="fs-4 fw-bolder">
                When do you need Caregiver services in your City
              </p>
              <p className="text-justify">
                Knee, back, and joint problems are becoming more common in
                modern life. It's best to see if a specific pain goes away after
                a certain amount of time or occurs after a specific movement. To
                get a proper diagnosis, you can use our home physiotherapy
                service. Physiotherapy can treat a wide range of medical
                conditions, including cardiovascular, neurological,
                neuromusculoskeletal, and respiratory issues.
              </p>
              <ul className="text-justify">
                <p>
                  <li>
                    <span className="fw-bolder">
                      Neuromusculoskeletal issues:
                    </span>
                    This includes back pain, knee pain, arthritis, sports
                    injuries, and whiplash-related disorders.
                  </li>
                </p>
                <p>
                  <li>
                    <span className="fw-bolder">Paralysis:</span>Regular
                    physiotherapy sessions will help to improve muscle tone,
                    allowing the paralyzed patient to move around.
                  </li>
                </p>
                <p>
                  <li>
                    <span className="fw-bolder">Parkinson's disease:</span>{" "}
                    Parkinson's disease is a life-threatening neurological
                    condition. The patient can regain mobility and function with
                    the help of physiotherapy
                  </li>
                </p>
                <p>
                  <li>
                    <span className="fw-bolder">Post heart attack:</span>
                    Following a heart attack, physiotherapy can help lower blood
                    pressure and heart rate both at rest and during exercise
                  </li>
                </p>
                <p>
                  <li>
                    <span className="fw-bolder">Back pain:</span>
                    Back pain can be caused by sedentary behaviour, poor
                    posture, or frequent travel. You don't have to suffer
                    through the discomfort or limitations any longer. Allow a
                    skilled and welltrained physiotherapist to relieve your pain
                    in the privacy of your own home.
                  </li>
                </p>
                <p>
                  <li>
                    <span className="fw-bolder">
                      Chronic Obstructive Pulmonary Disease:
                    </span>
                    Physiotherapy can help patients with the chronic obstructive
                    pulmonary disease when used as part of a multidisciplinary
                    recovery programmed.
                  </li>
                </p>
                <p>
                  <li>
                    <span className="fw-bolder">Asthma:</span>
                    Physiotherapy can help with respiratory muscle training,
                    which can help with asthma symptoms and improve a person's
                    breathing and physical abilities.
                  </li>
                </p>
                <p>
                  <li>
                    <span className="fw-bolder">Respiratory:</span>
                    Physiotherapy is widely used to treat respiratory problems
                    like COPD, asthma, and cystic fibrosiss.
                  </li>
                </p>
                <p>
                  <li>
                    <span className="fw-bolder">Post Surgical rehab:</span>
                    At-home physiotherapy can help you get back to normal faster
                    if you've recently had major surgery. You can regain your
                    mobility with our expert in-home physiotherapy treatment.
                  </li>
                </p>
              </ul>
              <div>
                <p className="fs-4 fw-bolder">
                  What are the benifits of Physiotheraphy?
                </p>
                <p>
                  Over time, physiotherapy has been shown to help patients
                  regain their health and improve their physical ability,
                  function, and movement. Our physiotherapists will come to you
                  and perform physiotherapy at your home in order to improve
                  your experience. Receiving physiotherapy at home has several
                  advantages
                </p>
                <ul>
                    <li>Provides Personalized service</li>
                    <li>Convenience</li>
                    <li>Cost-effective</li>              
                    <li>Mobility is unaffected</li>
                    <li>Increases the speed of the healing process</li>
                    <li>Improved time management</li>
                    <li>Supervision and support from family members</li>
                </ul>
                <p>You can forget about your physiotherapy treatment worries and hassles with our dependable home physiotherapy services.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default ElderPhysiotherapy;
