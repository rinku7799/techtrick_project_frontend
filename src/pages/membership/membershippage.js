import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import membership from "../../assets/membership.png";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./membershippage.css";
import membershipicon1 from "../../assets/membershipicon1.png";
import membershipicon2 from "../../assets/membershipicon2.png";
import membershipicon3 from "../../assets/membershipicon3.png";
import membershipicon4 from "../../assets/membershipicon4.png";
import membershipicon5 from "../../assets/membershipicon5.png";
import Mobile from "../../component/mobile/mobile";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MemberShipPage = () => {
  const primeMembershipData = [
    {
      icon: membershipicon1,
      title: "24*7 Coordination",
      description:
        "Get 24/7 emergency support with ambulance coordination and oncall doctor assistance and Nursing Support.",
    },
    {
      icon: membershipicon2,
      title: "Online Consultation",
      description:
        "Get immediate medical support with our emergency doctor on call on a pay-per use basis.",
    },
    {
      icon: membershipicon3,
      title: "Ambulance Service",
      description:
        "Get ambulance evacuation services within the city limit on a pay-per use basis.",
    },
    {
      icon: membershipicon4,
      title: "Nursing Service",
      description:
        "Get Nursing services within the city limit on a pay-per use basis.",
    },
    {
      icon: membershipicon5,
      title: "Help Desk",
      description:
        "With our helpdesk, you can book a doctor’s appointment, order medicines, lab tests and more.",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(1); // State to track selected plan, defaulting to 1

  const forindividual = [
    {
      id: 1,
      title: "Prime Membership",
      description: "Perfect for individuals looking for community support.",
      price: "₹499/- Year Person",
      features: [
        "Access to online consultation",
        "Exclusive Value added Service",
        "24*7 Emergency Support care",
        "Emergency Doctor-on-call",
        "4 times Vital checkup Free",
        "Nursing Service 10% discount",
        "Any Medical Transportation 10% discount",
        "+3 Additional Service free",
      ],
    },
    {
      id: 2,
      title: "Gold Membership",
      description:
        "Designed for individuals who need assistance with chronic pain management & Social Support.",
      price: "₹59,999/- Year Person",
      features: [
        "Access to online consultation",
        "Exclusive Value added Service",
        "24*7 Emergency Support care",
        "Emergency Doctor-on-call",
        "4 times Vital checkup Free",
        "Nursing Service 10% discount",
        "Any Medical Transportation 10% discount",
        "+8 Additional Service free",
      ],
    },
    {
      id: 3,
      title: "Diamond Membership",
      description:
        "Tailored for individual health conditions and in need for constant medical monitoring.",
      price: "₹119,999/- Year Person",
      features: [
        "Access to online consultation",
        "Exclusive Value added Service",
        "24*7 Emergency Support care",
        "Emergency Doctor-on-call",
        "4 times Vital checkup Free",
        "Nursing Service 10% discount",
        "Any Medical Transportation 10% discount",
        "+20 Additional Service free",
      ],
    },
  ];
  const forcouple = [
    {
      id: 1,
      title: "Gold Membership",
      description: "Perfect for individuals looking for community support.",
      price: "₹1099/- Year Person",
      features: [
        "Access to online consultation",
        "Exclusive Value added Service",
        "24*7 Emergency Support care",
        "Emergency Doctor-on-call",
        "4 times Vital checkup Free",
        "Nursing Service 10% discount",
        "Any Medical Transportation 10% discount",
        "+3 Additional Service free",
      ],
    },
    {
      id: 2,
      title: "Diamond Membership ",
      description:
        "Designed for individuals who need assistance with chronic pain management & Social Support.",
      price: "₹99,999/- Year Person",
      features: [
        "Access to online consultation",
        "Exclusive Value added Service",
        "24*7 Emergency Support care",
        "Emergency Doctor-on-call",
        "4 times Vital checkup Free",
        "Nursing Service 10% discount",
        "Any Medical Transportation 10% discount",
        "+8 Additional Service free",
      ],
    },
    {
      id: 3,
      title: "Prime Membership",
      description:
        "Tailored for individual health conditions and in need for constant medical monitoring.",
      price: "₹10,999/- Year Person",
      features: [
        "Access to online consultation",
        "Exclusive Value added Service",
        "24*7 Emergency Support care",
        "Emergency Doctor-on-call",
        "4 times Vital checkup Free",
        "Nursing Service 10% discount",
        "Any Medical Transportation 10% discount",
        "+20 Additional Service free",
      ],
    },
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false));
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="membershippage">
        <Breadcrumb
          breadcrumbTitle="Membership"
          breadcrumbNav={[
            {
              navText: "Home",
              path: "/",
            },
          ]}
        />
        <div className="image-text-container w-100 h-100">
          {loading ? (
            <>
              <Skeleton height={300} width="100%" />
              <Skeleton count={3} style={{ marginTop: "1rem" }} />
              <Skeleton width={120} height={40} style={{ marginTop: "1rem" }} />
            </>
          ) : (
            <>
              <img
                src={membership}
                className="company-image img-fluid object-fit-cover"
                alt="Company"
              />
              <div className="text-overlay">
                <p className="fs-4 fw-bolder text2">
                  Choose the Care Your Parents Deserve
                </p>
                <p>One membership for all your health needs</p>
                <button className="btn btn-primary rounded-5 px-5 py-2 getquote">
                  Membership Starts at ₹499/month
                </button>
              </div>
            </>
          )}
        </div>
        <Container>
          <div className="mt-5">
            <p className="fw-bolder fs-3">Become a Member</p>
            <Row>
              <Col lg={6} className="mb-4">
                <button className="btn btn-primary rounded-5 mb-3">
                  Home Health Benefit
                </button>
                <div className="d-flex mb-3">
                  <FaCheckCircle className="primary-color mt-1" />
                  <div className="ms-2">
                    Free medicines deliver and 20% off tests
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <FaCheckCircle className="primary-color mt-1" />
                  <div className="ms-2">
                    See an online doctor consultation at 2 times free
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <FaCheckCircle className="primary-color mt-1" />
                  <div className="ms-2">
                    Visit a specialist doctor within your city.
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <FaCheckCircle className="primary-color mt-1" />
                  <div className="ms-2">
                    Get treatment and service for issues to serious
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <FaCheckCircle className="primary-color mt-1" />
                  <div className="ms-2">
                    Get Medical Support Assistance and available.
                  </div>
                </div>
              </Col>
              <Col lg={5} className="mb-4">
                <button className="btn btn-primary rounded-5 mb-3">
                  Hospitalization
                </button>
                <div className="d-flex mb-3">
                  <FaCheckCircle className="primary-color mt-1" />
                  <div className="ms-2">
                    Get Free Medical Attendant for support and Care
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <FaCheckCircle className="primary-color mt-1" />
                  <div className="ms-2">
                    Medical Transportation free within your city
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <FaCheckCircle className="primary-color mt-1" />
                  <div className="ms-2">
                    After Hospitalization we provide Care for 7 days
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <FaCheckCircle className="primary-color mt-1" />
                  <div className="ms-2">
                    Appointed special Health professional your Health
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <FaCheckCircle className="primary-color mt-1" />
                  <div className="ms-2">One time Home visit free</div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div style={{ backgroundColor: "#F3F3F3" }}>
          <Container>
            <div className="p-3">
              <p className="fs-3 fw-bolder textcenter">
                Choose A Plan Tailored To Your Needs
              </p>
              <div className="tabs">
                <input
                  type="radio"
                  name="tab"
                  id="tab1"
                  role="tab"
                  defaultChecked
                />
                <label htmlFor="tab1" id="tab1-label">
                  For Individual
                </label>
                <section aria-labelledby="tab1-label">
                  <Row>
                    {forindividual.map((plan) => (
                      <Col lg={4} className="my-3" key={plan.id}>
                        <div
                          className="border p-4 rounded-5 shadow h-100 d-flex flex-column justify-content-end"
                          style={{
                            backgroundColor:
                              selectedPlan === plan.id ? "#d8e7ff" : "",
                          }}
                        >
                          <p className="primary-color fw-bolder fs-4">
                            {plan.title}
                          </p>
                          <p className="fw-semibold">{plan.description}</p>
                          <div>
                            {plan.features.map((feature, index) => (
                              <div className="mb-1" key={index}>
                                <IoMdCheckmarkCircleOutline className="primary-color me-2 fs-20" />
                                {feature}
                              </div>
                            ))}
                            <div>
                              <button
                                className="btn btn-primary rounded-5 w-100 mt-5 p-2"
                                onClick={() => handlePlanSelect(plan.id)}
                              >
                                {plan.price}
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </section>
                <input type="radio" name="tab" id="tab2" />
                <label htmlFor="tab2" id="tab2-label" className="px-4">
                  For Couple
                </label>
                <section aria-labelledby="tab2-label">
                  <Row>
                    {forcouple.map((plan) => (
                      <Col lg={4} className="my-3" key={plan.id}>
                        <div
                          className="border p-4 rounded-5 shadow"
                          style={{
                            backgroundColor:
                              selectedPlan === plan.id ? "#d8e7ff" : "",
                          }}
                        >
                          <p className="primary-color fw-bolder fs-4">
                            {plan.title}
                          </p>
                          <p className="fw-semibold">{plan.description}</p>
                          <div>
                            {plan.features.map((feature, index) => (
                              <div className="mb-1" key={index}>
                                <IoMdCheckmarkCircleOutline className="primary-color me-2 fs-20" />
                                {feature}
                              </div>
                            ))}
                            <div>
                              <button
                                className="btn btn-primary rounded-5 w-100 mt-5 p-2"
                                onClick={() => handlePlanSelect(plan.id)}
                              >
                                {plan.price}
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </section>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="mb-5">
            <p className="fs-3 fw-bolder mt-4">Prime Membership</p>
            <Row xs={1} sm={2} md={3} lg={3} xl={5}>
              {primeMembershipData.map((item, index) => (
                <Col
                  key={index}
                  className="d-flex align-items-center justify-content-center mb-3"
                >
                  <div className="circular-container p-3 sky-background-color">
                    <img src={item.icon} alt={`Icon ${index + 1}`} />
                    <div className="fw-bolder mt-2">{item.title}</div>
                    <div className="fs-12">{item.description}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <Mobile />
      </div>
    </>
  );
};
export default MemberShipPage;
