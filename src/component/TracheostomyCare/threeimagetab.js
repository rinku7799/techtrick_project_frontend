import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Dataimage = ({ physicaltherapystep }) => {
  return (
    <div  style={{backgroundColor:"#F9F9F9"}}>
      <Container>
        <div className="col-12">
        <Row xs={2} md={2} lg={3} xl={6} className="g-1 justify-content-evenly text-center">
            {physicaltherapystep?.childes?.map((item, index) => (
              <Col  key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  // className="boder-radius"
                  // style={{maxWidth: item.width}}
                  style={{maxWidth: "80px"}}
                />
                <p>{item.title}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Dataimage;
