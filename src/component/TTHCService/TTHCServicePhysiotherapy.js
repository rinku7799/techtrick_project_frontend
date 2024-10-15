import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TTHCService.css";

const TTHCServicePhysiotherapy = ({ tthcService }) => {
  console.log("tthcServicerinku", tthcService);

  return (
    <div className="TTHCServicePhysiotherapy-wrapper">
      <Container>
        <div className="col-12">
          <Row
            xs={2}
            md={2}
            lg={3}
            xl={6}
            className="g-1 justify-content-evenly text-center"
          >
            {tthcService?.childes?.map((item, index) => (
              <Col key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: item.width }}
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

export default TTHCServicePhysiotherapy;
