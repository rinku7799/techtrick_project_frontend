import { Row, Col } from "react-bootstrap";
import surgerytrick1 from "../../assets/surgerytrick1.png";
import surgerytrick2 from "../../assets/surgerytrick2.png";
import surgerytrick3 from "../../assets/surgerytrick3.png";
import surgerytrick4 from "../../assets/surgerytrick4.png";
import surgerytrick5 from "../../assets/surgerytrick5.png";
import surgerytrick6 from "../../assets/surgerytrick6.png";
import surgerytrick7 from "../../assets/surgerytrick7.png";
import surgerytrick8 from "../../assets/surgerytrick8.png";

const BookTrick = () => {
  const benefitsData = [
    {
      imgSrc: surgerytrick1,
      title: "Personalized and Comprehensive Care",
      description:
        "Explore customized treatment programs tailored to meet your needs.",
    },
    {
      imgSrc: surgerytrick2,
      title: "Smooth Insurance Approval",
      description:
        "Streamlined process for submitting claims for government-funded services and insurance.",
    },
    {
      imgSrc: surgerytrick3,
      title: "Entire Surgical Care",
      description: "Complete surgical care, including support after surgery.",
    },
    {
      imgSrc: surgerytrick4,
      title: "Digital Records",
      description:
        "Receive digital access to your medical records to avoid administrative hassles.",
    },
    {
      imgSrc: surgerytrick5,
      title: "Dedicated Customer Service",
      description: "Our support team is available 24*7 for assistance.",
    },
    {
      imgSrc: surgerytrick6,
      title: "Home Nurse",
      description:
        "Necessary care for individuals who are elderly, chronically ill, recovering from surgery, or disabled.",
    },
    {
      imgSrc: surgerytrick7,
      title: "Doctor Consultation or Home Visit",
      description:
        "Connect with renowned specialists from anywhere in India to get professional guidance or visit at Home.",
    },
    {
      imgSrc: surgerytrick8,
      title: "Medical Attendant Support",
      description:
        "Medical attendants, also known as personal care aides or caregivers, help with and comfort of the patient.",
    },
  ];

  return (
    <>
      <div className="container py-4">
        <p className="fs-2 fw-bolder mt-3">Why Choose Tech Tricks?</p>
        <Row className="justify-content-center mt-3">
          {benefitsData.map((benefit, index) => (
            <Col
              key={index}
              xl={3}
              lg={4}
              md={6}
              sm={8}
              xs={10}
              className="mb-4"
            >
              <div
                className="text-center p-3 h-100 d-flex justify-content-center flex-column align-items-center rounded-4 lightgraydark-bg-color"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-2 rounded-4"
                  style={{
                    height: "70px",
                    width: "70px",
                    backgroundColor: "white",
                  }}
                >
                  <img src={benefit.imgSrc} width="40px" alt="Icon" />
                </div>
                <div className="fw-bolder mb-2 fs-15">{benefit.title}</div>
                <div className="fs-15">{benefit.description}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
export default BookTrick;
