import React, { useState } from "react";
import { Card, Collapse, Container } from "react-bootstrap";
import { IoIosCheckmark } from "react-icons/io";
import { IoAddSharp, IoCloseSharp } from "react-icons/io5";
import "./PhysicalTherapy.css";

const PhysicalTherapy = ({
  steps,
  onButtonClick1,
  onButtonClick2,
  wrapperBgColor,
  imagechnageRightSide,
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

const renderSubdescription = (optiondescription) => {
  if (Array.isArray(optiondescription)) {
    return optiondescription.map((item, index) => (
      <div key={index} className="d-flex gap-3 mb-1">
        <IoIosCheckmark className="icon" />
        <div className="text2">{item}</div>
      </div>
    ));
  }
  return null; 
};

  if (!steps || !steps.childes || steps.childes.length === 0) {
    return null; 
  }

  return (
    <>
      <h2 className="text-center fw-semibold p-2 m-0" style={{backgroundColor:"#F9F9F9"}}>{steps?.title}</h2>
      <div
        className="physical-therapy-wrapper"
        style={{ backgroundColor: wrapperBgColor }}
      >
        <Container>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              {steps?.childes?.map((element, index) => (
                <Card key={index} className="mb-3 card-shadow">
                  <div
                    className="d-flex justify-content-between align-items-center p-2"
                    onClick={() => handleToggle(index)}
                    aria-controls={`example-collapse-text-${index}`}
                    aria-expanded={openIndex === index}
                  >
                    <div className="d-flex gap-3 align-items-center">
                      {element?.icon && (
                        <div className="number">
                          <img
                            className="image-1"
                            src={element?.icon}
                            alt={element?.name}
                          />
                        </div>
                      )}
                      {element?.ictitle && (
                        <div className="text fw-bolder">{element?.ictitle}</div>
                      )}
                    </div>
                    <div>
                      {openIndex === index ? <IoCloseSharp /> : <IoAddSharp />}
                    </div>
                  </div>
                  <Collapse in={openIndex === index}>
                    <div
                      className="col-12 text-start p-3 borderTop"
                      id={`example-collapse-text-${index}`}
                    >
                      {element?.subtitle && (
                        <div className="text-1 mb-2">{element?.subtitle}</div>
                      )}
                      {element?.description && (
                        <div className="text-2 mb-2">
                          {element?.description}
                        </div>
                      )}
                      {element?.optiontitle && (
                        <div className="text-2 mb-2 fw-semibold">
                          {element?.optiontitle}
                        </div>
                      )}
                      {element?.optiondescription && (
                        <div>{renderSubdescription(element?.optiondescription)}</div>
                      )}
                      {element?.bottonText1 && (
                        <div
                          className="btn btn-primary w-100"
                          onClick={onButtonClick1}
                        >
                          {element?.bottonText1}
                        </div>
                      )}
                      {element?.bottonText2 && (
                        <div
                          className="btn btn-primary w-100"
                          onClick={onButtonClick2}
                        >
                          {element?.bottonText2}
                        </div>
                      )}
                    </div>
                  </Collapse>
                </Card>
              ))}
            </div>
            <div className="col-lg-6 col-12">
              <div className="therapy-img">
                <img
                  className="image"
                  src={steps?.image}
                  alt="Physical Therapy"
                  style={{ height: imagechnageRightSide ? "540px" : "270px" }}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PhysicalTherapy;
