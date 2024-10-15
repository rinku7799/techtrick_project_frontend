import React from "react";
import { Card, Container } from "react-bootstrap";
import "./ExpertiseFacilityManagement.css";

const ExpertiseFacilityManagement = ({ data, houseKeepingServices}) => {
  return (
    <div className="expertise-facility-management-wrapper">
      <Container>
        <div className="row g-4 text-center">
          {data?.map((element, index) => (
            <div className="col-12 col-lg-6 text-center">
              <Card className="p-4 border-shadow">
                {element?.img && (
                  <div className="mb-3">
                    <img src={element?.img} />
                  </div>
                )}
                {element?.name && <h5>{element?.name}</h5>}
                {element?.paragraph && <p>{element?.paragraph}</p>}
                {element?.buttonText1 && (
                  <div className="btn btn-primary rounded" onClick={houseKeepingServices}>
                    {element?.buttonText1}
                  </div>
                )}
                {element?.buttonText2 && (
                  <div className="btn btn-primary rounded">
                    {element?.buttonText2}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ExpertiseFacilityManagement;
