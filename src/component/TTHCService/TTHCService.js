import React from "react";
import { Container } from "react-bootstrap";
import "./TTHCService.css";

const TTHCService = ({ services }) => {
  if (
    !services ||
    !services.childes ||
    !services.subchildes ||
    services.childes.length === 0
  ) {
    return null; 
  }

  return (
    <div className="tthc-service-wrapper">
      <Container>
        <div className="row text-start">
          <div className="col-12">
            <h4 className="mb-3">{services.title}</h4>
            <p>{services.description}</p>
          </div>
        </div>
        <div className="d-flex justify-content-evenly text-center mt-3">
          {services.childes.length > 0 &&
            services.childes.map((item, idx) => (
                <div key={idx}>
                  <img
                    className="mb-2"
                    src={item.image}
                    alt={item.name}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <p>{item.name}</p>
                </div>
              )
            )}
        </div>
        <div className="row text-start">
          <div className="col-12">
            {services.subtitle && <h4 className="mb-3">{services.subtitle}</h4>}
          </div>
        </div>
        <div className="d-flex justify-content-evenly text-center mt-3">
          {services.subchildes.length > 0 &&
            services.subchildes.map((item, idx) => (
                <div key={idx}>
                  <img
                    className="mb-2"
                    src={item.image}
                    alt={item.name}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <p>{item.name}</p>
                </div>
              )
            )}
        </div>
      </Container>
    </div>
  );
};

export default TTHCService;
