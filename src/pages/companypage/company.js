import { Col, Container, Row, Card, Button } from "react-bootstrap";
import company from "../../assets/companynew1.png";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import "./company.css";
import company1 from "../../assets/company1.png";
import OurLeadership from "../../component/OurLeadership/OurLeadership";
import OurSupportedPartnes from "../../component/OurLeadership/OurSupportedPartnes";
import company12 from "../../assets/company12.png";
import Mobile from "../../component/mobile/mobile";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";

const CompanyPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false))
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Company"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />
      <div className="company" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="company" style={{ backgroundColor: "#F9F9F9" }}>
          <div className="image-text-container w-100 h-100">
            {loading ? (
              <>
                <Skeleton height={300} width="100%" />
                <Skeleton count={3} style={{ marginTop: "1rem" }} />
                <Skeleton
                  width={120}
                  height={40}
                  style={{ marginTop: "1rem" }}
                />
              </>
            ) : (
              <>
                <img
                  src={company}
                  className="company-image img-fluid"
                  alt="Company"
                />
                <div className="text-overlay">
                  <p className="fs-4 fw-bolder text2">
                    In-Person Healthcare for Your Team
                  </p>
                  <p>
                    One Membership for Doctor, Medicine, Tests and Health
                    Insurance
                  </p>
                  <button className="btn btn-primary rounded-5 px-5 py-2 getquote">
                    Get Quote
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <Container>
          <div className="mt-5 ourcompany">
            <p className="fs-4 fw-bolder">Our Company</p>
            <p style={{ textAlign: "justify" }}>
              We started Tech Tricks in 2021 as a collective of people
              determined to transform healthcare. Our driving principle was
              this: no family should have to choose between quality healthcare
              and financial stability.
            </p>
            <p style={{ textAlign: "justify" }}>
              Due to changes in the family structure — from the multi-generation
              family under one roof, to the nuclear family — many of us are
              facing challenges in caring for our elderly parents. This
              challenge increases if the children live in one part of the world,
              and the parents in another. Distance can make it difficult to
              assess a parent’s needs and get them the care they deserve.Over
              the years, we have created a healthcare service at home and some
              product which can be any person’s first point of contact for their
              illness or worry. Our members can experience this care as often as
              they like without financial strain. This, we believe, can change
              the course of a person’s health and the experience of healthcare
              for everyone. Then we started Tech Tricks Healthcare Service is
              committed to helping you care for the health and well- being of
              your loved ones. We understand that nothing is better than being
              in the comfort of home, surrounded by family and friends. We can
              be there, when you can’t, to help your aging parents and other
              elderly family members live their golden years at home. We provide
              health Care at Home. It has a team of well-trained nurses and more
              supportive staffs to take care of Old aged, sick, bedridden
              patients, pregnant women and new born babies.
            </p>
          </div>
        </Container>
        <div className="OurVision mt-5">
          <Container>
            <div className="caregiver">
              <Row className="row-equal-height d-flex justify-content-between gy-4">
                <Col lg={5} className="col-equal-height">
                  <Card className="card rounded-4">
                    <img
                      src={company1}
                      alt="Company Vision"
                      className="w-100 h-100 rounded-4"
                      style={{ objectFit: "cover" }}
                    />
                  </Card>
                </Col>
                <Col lg={5} className="col-equal-height d-flex flex-column">
                  <Card className="card card-content rounded-4 p-4">
                    <p className="fs-3 fw-bolder">Our Vision</p>
                    <p className="fs-6" style={{ textAlign: "justify" }}>
                      We intend to be the most trusted home healthcare partner
                      to our clients and deliver people-centric, high quality
                      patient care to them in the comfort of their homes.
                    </p>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Container>
          <div className="mt-5 ourcompany">
            <p className="fs-4 fw-bolder">Our Mission</p>
            <p style={{ textAlign: "justify" }}>
              Tech Tricks Health Care will provide to its customers empathetic
              and unsurpassed quality of healthcare that will be backed by a
              highly trained, dedicated, people centric and process driven team
              of care givers and management professionals Our goal is to deliver
              quality of care in a courteous, respectful & compassionate manner.
              We hope you will allow us to care for you and strive to be the
              first & best choice for your family healthcare. We are delivers
              quality care with compassion. We bring world class medical Home
              care into our patients’ home. Our aims to provide medical services
              at door steps to make primary Homecare not only more accessible,
              but also more affordable and accountable to our patient’s needs.
            </p>
          </div>
        </Container>
        <OurLeadership />
        <OurSupportedPartnes />
        <div style={{ padding: "50px 0px", backgroundColor: "white" }}>
          <Container className="setupspace">
            <div>
              <Row className="gy-3">
                <Col lg={4}>
                  <p className="fs-4 fw-bolder">Join Us</p>
                  <p style={{ textAlign: "justify" }}>
                    We believe accessible high quality healthcare will be built
                    by a team of diverse problem-solvers from healthcare,
                    design, technology, and business from across the world.
                  </p>
                  <Button className="btn btn-primary p-3 px-4">
                    See Opportunities
                  </Button>
                </Col>
                <Col lg={2}></Col>
                <Col lg={6}>
                  <img
                    src={company12}
                    className="w-100 rounded-3 boxshadow"
                    style={{
                      objectFit: "cover",
                      height: "300px",
                      border: "7px solid white",
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <Mobile />
    </>
  );
};

export default CompanyPage;
