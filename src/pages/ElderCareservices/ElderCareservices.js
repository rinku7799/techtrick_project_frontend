import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import eldercareservices1 from "../../assets/eldercareservices1.png";
import eldercareservices2 from "../../assets/eldercareservices2.png";
import eldercareservices3 from "../../assets/eldercareservices3.png";
import eldercareservices4 from "../../assets/eldercareservices4.png";
import eldercareservices5 from "../../assets/eldercareservices5.png";
import eldercareservices6 from "../../assets/eldercareservices6.png";
import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import "./ElderCareservices.css";
import { Row, Col, Container } from "react-bootstrap";
import OurEldercareServices from "./OurEldercareServices";
import Mobile from "../../component/mobile/mobile";
import eldercareserviceshelp1 from "../../assets/eldercareserviceshelp1.png";
import eldercareserviceshelp2 from "../../assets/eldercareserviceshelp2.png";
import eldercareserviceshelp3 from "../../assets/eldercareserviceshelp3.png";
import eldercareserviceshelp4 from "../../assets/eldercareserviceshelp4.png";
import eldercareserviceshelp5 from "../../assets/eldercareserviceshelp5.png";
import eldercareserviceshelp6 from "../../assets/eldercareserviceshelp6.png";

const ElderCareServices = () => {
  return (
    <>
        <Breadcrumb
          breadcrumbTitle="Elder Care Services"
          breadcrumbNav={[
            {
              navText: "Home",
              path: "/",
            },
          ]}
        />
      <div className="eldercareservices">
        <HeroHomeAttendant img={eldercareservices1} />
        <Container className="mt-5 mb-5 p-3">
          <div>
            <p className="fs-4 fw-bolder">
              We Create A Nation Of Difference in Bhubaneshwar
            </p>
            <img
              src={eldercareservices2}
              height={"350px"}
              className="w-100 rounded-3 object-fit-cover"
            />
            <p className="fw-bolder fs-5 mt-3">
              Senior Home Health Care Services In Bhubaneshwar
            </p>
            <p>
              We know it’s difficult to rest easily when you’re far away from
              your parents and constantly worried about their wellbeing. We
              built Tech Tricks to keep them and you at ease: offering
              best-in-class medical support and an entire community’s worth of
              joy; a pillar your parents and you can lean on anytime. So, the
              next time you call them, you can skip the “are you taking care of
              your health?” and instead say
            </p>
          </div>
          <div>
            <p className="text-center fs-3 fw-semibold">“Khulke Jiyo!"</p>
            <Row className="d-flex align-items-center">
              <Col lg={6}>
                <p className="fs-5 fw-medium">Care Story... </p>
                <p className="fw-semibold">Care with Tech Tricks :</p>
                <p className="text-justify">
                  Due to changes in the family structure - from the
                  multigeneration family under one roof, to the nuclear family -
                  many of us are facing challenges in caring for our elderly
                  parents. This challenge increases if the children live in one
                  part of the world, and the parents in another. Distance can
                  make it difficult to assess a parent’s needs and get them the
                  care they deserve. Staying far away from your parents for work
                  or study is not easy. You realize that your parents are
                  getting old and they need someone by their side to manage with
                  everyday mundane tasks. You may often wish that there was
                  someone you can trust to fill in your shoes and personally
                  take care of your parents’ needs.You may often wish that there
                  was someone you can trust to fill in your shoes and personally
                  take care of your parents’ needs.
                </p>
              </Col>
              <Col lg={6}>
                <img
                  src={eldercareservices3}
                  className="w-100 img-fluid object-fit-cover rounded-3 h-100"
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col lg={6}>
                <img
                  src={eldercareservices4}
                  className="w-100 img-fluid object-fit-cover rounded-3 h-100"
                />
              </Col>
              <Col lg={6}>
                <p className="fw-semibold fs-5">
                  Birth of Tech Tricks Elder Care :
                </p>
                <p className="text-justify">
                  You will never forget your early years and the comfort of your
                  parents' house. There are lots of loving, caring, and
                  protective recollections from our early years that come to
                  mind.
                </p>
                <p className="text-justify">
                  For your parents, we want to reproduce the feeling of comfort,
                  security, and affection. We recognize that it is difficult to
                  live apart from your parents for unavoidable reasons. The
                  physical distance between you and your parents creates worry,
                  stress and fear. You often wonder how you can provide for your
                  parents' needs despite being far away from them. For many
                  people, old age can be a difficult period. needs despite being
                  far away from them. For many people, old age can be a
                  difficult period.of loving, caring, and protective
                  recollections from our early years that come to protective
                  recollections from our early years that come to mind.
                </p>
              </Col>
            </Row>
            <p className="text-justify">
              When it comes to handling routine, daily responsibilities like
              paying bills, taking medication on time, going to the doctor, or
              even housework, your parents need someone to support them.
              Consider a scenario in which someone covered for you and your
              parents' every need. We at Tech Tricks are committed to providing
              a loving, healthy, and caring environment for the elderly, and we
              have built our solutions with their everyday practical problems in
              mind.
            </p>
            <Row className="mt-5">
              <Col lg={6}>
                <p className="fs-5 fw-medium">We Care :</p>
                <p className="text-justify">
                  Our mission is to help people who feel worried, stressed, sad
                  and fearful that they cannot look after their parents due to
                  physical distance. Tech Tricks aims to be the support system
                  for all ageing parents who live by themselves. We assist the
                  elderly in health, emergency, and daily care. The organisation
                  provides physical and emotional care for senior citizens and
                  work towards engaging them in social gatherings.We assist the
                  elderly in health, emergency, and daily care. The organisation
                  provides physical and emotional care for senior citizens and
                  work in social gatherings.
                </p>
              </Col>
              <Col lg={6}>
                <img
                  src={eldercareservices5}
                  className="w-100 img-fluid object-fit-cover rounded-3 h-100"
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col lg={6}>
                <img
                  src={eldercareservices6}
                  className="w-100 img-fluid object-fit-cover rounded-3 h-100"
                />
              </Col>
              <Col lg={6}>
                <p className="fs-5 fw-medium">Our Care Givers :</p>
                <p className="text-justify">
                  At Tech Tricks, we are reliable and acknowledge that
                  everyone's requirements are unique, so our services are highly
                  customized. Our team of highly qualified caretakers looks
                  after your parents in Odisha. They work round the clock to
                  meet all of your requirements and thus are more concerned.They
                  work round the clock to meet all of your requirements and thus
                  are more concerned.They work round the clock to meet all of
                  your requirements and thus are more concerned.
                </p>
              </Col>
            </Row>
          </div>
          <OurEldercareServices />
          <div>
            <p className="fs-4 fw-bolder">How we Help</p>
            <div>
              <Row>
                <Col lg={2} md={4} sm={6} xs={6} className="mb-4">
                  <div className="sky-background-color p-3 d-flex flex-column justify-content-center align-items-center rounded-3">
                    <img
                      src={eldercareserviceshelp1}
                      style={{ width: "80px" }}
                    />
                    <button className="btn btn-primary w-100 fs-13 mt-4">
                      Home Healthcare
                    </button>
                  </div>
                </Col>
                <Col lg={2} md={4} sm={6} xs={6} className="mb-4">
                  <div className="sky-background-color p-3 d-flex flex-column justify-content-center align-items-center rounded-3">
                    <img
                      src={eldercareserviceshelp2}
                      style={{ width: "80px" }}
                    />
                    <button className="btn btn-primary w-100 fs-13 mt-4">
                      Tele Consultation
                    </button>
                  </div>
                </Col>
                <Col lg={2} md={4} sm={6} xs={6} className="mb-4">
                  <div className="sky-background-color p-3 d-flex flex-column justify-content-center align-items-center rounded-3">
                    <img
                      src={eldercareserviceshelp3}
                      style={{ width: "80px" }}
                    />
                    <button className="btn btn-primary w-100 fs-13 mt-4">
                      Lab Diagnostic
                    </button>
                  </div>
                </Col>
                <Col lg={2} md={4} sm={6} xs={6} className="mb-4">
                  <div className="sky-background-color p-3 d-flex flex-column justify-content-center align-items-center rounded-3">
                    <img
                      src={eldercareserviceshelp4}
                      style={{ width: "80px" }}
                    />
                    <button className="btn btn-primary w-100 fs-13 mt-4">
                      Convenience
                    </button>
                  </div>
                </Col>
                <Col lg={2} md={4} sm={6} xs={6} className="mb-4">
                  <div className="sky-background-color p-3 d-flex flex-column justify-content-center align-items-center rounded-3">
                    <img
                      src={eldercareserviceshelp5}
                      style={{ width: "80px" }}
                    />
                    <button className="btn btn-primary w-100 fs-13 mt-4">
                      Health Support
                    </button>
                  </div>
                </Col>
                <Col lg={2} md={4} sm={6} xs={6} className="mb-4">
                  <div className="sky-background-color p-3 d-flex flex-column justify-content-center align-items-center rounded-3">
                    <img
                      src={eldercareserviceshelp6}
                      style={{ width: "80px" }}
                    />
                    <button className="btn btn-primary w-100 fs-13 mt-4">
                      Home Services
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <Mobile />
      </div>
    </>
  );
};
export default ElderCareServices;
