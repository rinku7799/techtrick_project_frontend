import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import company2 from "../../assets/company7.png";
import company3 from "../../assets/company8.png";
import company4 from "../../assets/company9.png";
import company5 from "../../assets/company10.png";
import company6 from "../../assets/company11.png";

const leadersData = [
  {
    name: "Jan Ingenhousz",
    image: company2,
  },
  {
    name: "Jan Ingenhousz",
    image: company3,
  },
  {
    name: "Jan Ingenhousz",
    image: company4,
  },
  {
    name: "Jan Ingenhousz",
    image: company5,
  },
  {
    name: "Jan Ingenhousz",
    image: company6,
  },
];

const OurSupportedPartnes = () => {
  return (
    <Container className="mt-4 py-5">
      <div>
        <p className="fs-3 fw-bolder">Our Supported Partnes</p>
      </div>
      <Row xs={1} md={2} lg={3} xl={5} className="g-4">
        {leadersData.map((leader, index) => (
          <Col key={index}>
            <Card className="h-100 rounded-3">
              <Card.Img variant="top" src={leader.image} style={{ height: "200px", objectFit: "cover" }} alt={leader.name} />
              <Card.Body className="p-1 text-center">
                <Card.Title className="fw-bolder fs-5">{leader.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurSupportedPartnes;
