import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import SttafingNeedToady from "../sttafing/sttafingNeedToady"

const RegisteredNurse = ({ topcontain, img, secondcontain, lastcontain, answer }) => {
    return (
        <>
            <div>
                <img src={img} className="w-100 h-100" style={{ objectFit: "cover" }} />
            </div>
            <ScrollAnimation animateIn='fadeIn' >
            <Container className="mt-4">
                <Row style={{ textAlign: "justify" }}>
                    <Col lg={12}>
                        <p className="fw-bolder" style={{fontSize:"30px"}}>{topcontain}</p>
                        <div>{secondcontain}</div>
                        <div className="mt-2">{answer}</div>
                        <div>
                            {lastcontain}
                        </div>
                       <SttafingNeedToady/>
                    </Col>
                </Row>
            </Container>
            </ScrollAnimation>
        </>
    )
}
export default RegisteredNurse;