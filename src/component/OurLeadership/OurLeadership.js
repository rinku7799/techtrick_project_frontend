import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";
import company5 from "../../assets/Screenshot_1.png";
import company6 from "../../assets/company6.png";

const leadersData = [
  {
    name: "Jan Ingenhousz",
    image: company2,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    name: "Jan Ingenhousz",
    image: company3,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    name: "Jan Ingenhousz",
    image: company4,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    name: "Jan Ingenhousz",
    image: company5,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    name: "Jan Ingenhousz",
    image: company6,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
];

const OurLeadership = () => {
  return (
    <Container>
      <div>
        <p className="fs-3 fw-bolder">Our Leadership</p>
      </div>
      <Row xs={1} md={2} lg={3} xl={5} className="g-4">
        {leadersData.map((leader, index) => (
          <Col key={index}>
            <Card className="h-100 rounded-3">
              <Card.Img variant="top" src={leader.image} style={{ height: "200px", objectFit: "cover" }} alt={leader.name} />
              <Card.Body className="p-1 text-center">
                <Card.Title className="fw-bolder fs-5">{leader.name}</Card.Title>
                <Card.Text style={{ fontSize: "13px" ,color:"#878787" }}>{leader.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurLeadership;
