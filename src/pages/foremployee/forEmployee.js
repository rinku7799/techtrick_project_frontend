import Mobile from "../../component/mobile/mobile";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import EmployeeFormModel from "../../component/Modal/employeeform";
import './forEmploye.css';

const ForEmployee = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="foremployee">
        <Container>
        <Breadcrumb
          breadcrumbTitle="For Employers"
          breadcrumbNav={[
            {
              navText: "Home",
              path: "/",
            },
            {
              navText: "Hospital Staffing Services",
              path: "/hospitalstaffservice",
            },
            {
              navText: "Medical Staffing Services",
              path: "/registerednurse",
            },
            {
              navText: "Certified Nursing Assistant",
              path: "/hospitalstaffservice",
            },
          ]}
        />
        </Container>
        <Container style={{ marginTop: "70px" }}>
          <Row
            className="d-flex justify-content-center text-center p-4 rounded-4 border"
            style={{ backgroundColor: "#F0F0F0" }}
          >
            <Col lg={12}>
              <p className="fs-3 fw-bolder">Tech Tricks Healthcare Pvt.Ltd</p>
              <p className="fs-4 fw-bolder">
                OCAC Tower, Acharya Vihar,2nd Floor, Unit No:212,Bhubaneswar
              </p>
              <button
                className="btn fw-semibold mx-4 py-3 px-5 shadow my-3 sky-background-color"
              >
                Contact: +91-9861806040
              </button>
              <button
                className="btn  fw-semibold mx-4 py-3 px-5 shadow my-3 sky-background-color"
              >
                {" "}
                Email: info@techtricks.in
              </button>
              <button
                className="btn  fw-semibold  mx-4 py-3 px-5 shadow my-3 sky-background-color"
              >
                Website: www.techtricks.in
              </button>
            </Col>
            <Col>
              <button
                className="btn btn-primary mt-4 px-5 p-2"
                onClick={handleShow}
              >
                Employers Apply Now
              </button>
            </Col>
          </Row>
          <Row className="mt-4 mb-4">
            <Col lg={12} style={{ textAlign: "justify" }}>
              <p className=" fw-bolder" style={{fontSize:"30px"}}>For Employers</p>
              <p>
                We are our clients' long-term partners, and we have a
                straightforward philosophy. We promise to always operate with
                commitment, honesty, and integrity. We prioritize our clients'
                needs and are confident that doing so will lead to a fruitful
                working relationship for many years to come.
              </p>
              <p className="fw-bolder" style={{fontSize:"30px"}}>
                We provide quality results quickly
              </p>
              <p>
                We recognize that, in order to prevent understaffed healthcare
                teams, you must promptly fill open roles, whether they are
                temporary or permanent.
              </p>
              <p>
                <span className="fw-bolder">
                  Our team is highly specialized -
                </span>
                Our recruiters and staffing specialists bring over 3+ years of
                experience in placing highly qualified pharmacists, nurses and
                other allied healthcare professionals.{" "}
              </p>
              <p>
                <span className="fw-bolder">Our Network is extensive -</span>
                With over 500+ clinicians in our network nationwide, we have the
                ability to find candidates that most employers don’t have access
                to.
              </p>
              <p>
                <span className="fw-bolder">Cost effective solutions -</span> We
                understand that every hospital, pharmacy or healthcare
                institution has a budget they work within. It is our promise to
                always be honest and fair to the clients we serve.
              </p>
            </Col>
          </Row>
        </Container>
        <div style={{ backgroundColor: "#F0F0F0" }}>
          <Container>
            <Row className="p-5" style={{ textAlign: "justify" }}>
              <Col lg={6} className="mb-5 d-flex flex-column">
                <p className="fs-4 fw-bolder mt-3">Our Scope of Services</p>
                <Card
                  className="border shadow rounded-4 flex-fill d-flex flex-column"
                  style={{ backgroundColor: "white" }}
                >
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fs-5 fw-bolder">
                      Temporary Staffing
                    </Card.Title>
                    <ul>
                      <li>Covering for vacations, sick calls, LOA etc.</li>
                    </ul>
                    <Card.Title className="fs-5 fw-bolder">
                      Direct Hire / Permanent Placement
                    </Card.Title>
                    <ul>
                      <li>
                        Utilize our expert recruiters and unlimited resources to
                        find you the perfect candidate. We guarantee all
                        placements to ensure we find you the right fit every
                        time.
                      </li>
                    </ul>
                    <Card.Title className="fs-5 fw-bolder">
                      Temp-to-Hire
                    </Card.Title>
                    <ul>
                      <li>
                        Try a candidate out for 3 months and then make the
                        decision to hire without a fee.
                      </li>
                    </ul>
                    <Card.Title className="fs-5 fw-bolder">
                      Travel or Contract
                    </Card.Title>
                    <ul>
                      <li>
                        Book a candidate for 13+ weeks to work an assigned
                        schedule.
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-5 d-flex flex-column">
                <p className="fs-4 fw-bolder mt-3">
                  Our Promise to our Clients
                </p>
                <Card
                  className="border shadow rounded-4 flex-fill d-flex flex-column w-100 "
                  style={{ backgroundColor: "white" }}
                >
                  <Card.Body>
                    <ul>
                      <li className="mb-4">
                        Access to the most complete, diverse network of
                        qualified local clinicians
                      </li>
                      <li className="mb-4">
                        The Healthcare Industry’s most comprehensive screening
                        and selection process
                      </li>
                      <li className="mb-4">
                        A Partnership committed to quality care
                      </li>
                      <li className="mb-4">
                        Experienced and dedicated support team, available 24/7
                      </li>
                      <li className="mb-4">
                        Strategic, value-based solution to most staffing needs
                      </li>
                      <li className="mb-4">
                        Customized programs built to address your specific needs
                      </li>
                      <li className="mb-4">
                        Strategic, value-based solution to most staffing needs
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Mobile />

        <EmployeeFormModel show={show} handleClose={handleClose} />
      </div>
    </>
  );
};

export default ForEmployee;
