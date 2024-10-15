import React from 'react'
import "./ServicePlan.css"
import { Col, Container, Row } from 'react-bootstrap'

const ServiceplanEmergencyCare = () => {

    const ServicePlanPostSurgicalPlanData = [
        {
            id: 1,
            image: require('../../assets/Injection.png'),
            name: "Injection",
        },
        {
            id: 2,
            image: require('../../assets/blood-bag.png'),
            name: "Salaried ns",
        },
        {
            id: 3,
            image: require('../../assets/First-Aid.png'),
            name: "First Aid",
        },
        {
            id: 4,
            image: require('../../assets/Vital-Checkup.png'),
            name: "Vital Checkup",
        },
        
    ]


    return (
        <div className="ServicePlan-Post-emergency-care-wrapper">
            <Container>
                <Row xs={2} md={2} lg={4} xl={4} className="g-1 justify-content-center align-items-center text-center">
                    {ServicePlanPostSurgicalPlanData.map((element) => (
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

export default ServiceplanEmergencyCare
