import { Button, Col, Container, Row } from "react-bootstrap";

const ClientAndEmployees = ({ img, topheading, contain, buttonname, onButtonClick }) => {
    return (
        <div style={{padding:"40px 0px"}}>
            <Container className="setupspace">
                <div>
                    <Row>
                        <Col lg={6}>
                            <img src={img} className="w-100 h-100 rounded-3" style={{objectFit:"cover"}} />
                        </Col>
                        <Col lg={6}>
                            <p className="fs-4 fw-bolder">{topheading}</p>
                            <p style={{ textAlign: "justify" }}>{contain}</p>
                            {buttonname && (
                                <Button className="btn btn-primary p-3 px-4" onClick={onButtonClick}>{buttonname}</Button>
                            )}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
export default ClientAndEmployees;