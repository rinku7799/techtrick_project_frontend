import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./ServicePlan.css"

const ServiceplanTracheostomyCare = () => {
  const ServiceplanTracheostomyCareData = [
    {
      id: 1,
      image: require('../../assets/consultations.png'),
      name: "Specialist consultations",
    },
    {
      id: 2,
      image: require('../../assets/Continuous-monitoring.png'),
      name: "Continuous monitoring",
    },
    {
      id: 3,
      image: require('../../assets/treatment-plan.png'),
      name: "Tracheostomy care protocols",
    },
    {
      id: 4,
      image: require('../../assets/brand.png'),
      name: "Prevent recurrences & complications",
    },
    {
      id: 5,
      image: require('../../assets/quality-life.png'),
      name: "Improved overall quality of life",
    },
    {
      id: 6,
      image: require('../../assets/customer-rating.png'),
      name: "Customer rating of 4.9/5",
    },
  ]
  return (
    <div className="ServicePlan-Tracheostomy-care-wrapper">
      <Container>
        <Row xs={2} md={2} lg={3} xl={6} className="g-1 justify-content-center">
          {ServiceplanTracheostomyCareData.map((element) => (
            <Col className="mb-5">
              <div className="service-item">
                <img src={element?.image} alt="Consistent & Positive Outcomes" />
                <div>{element?.name}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ServiceplanTracheostomyCare
