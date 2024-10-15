import React from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import medicinedeliveryimg1 from "../../assets/medicinedeliveryimg1.png";
import medicinedeliveryimg2 from "../../assets/medicinedeliveryimg2.png";
import medicinedeliveryimg3 from "../../assets/medicinedeliveryimg3.png";
import medicinedeliveryimg4 from "../../assets/medicinedeliveryimg4.png";
import { FaMoneyBill } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const TopSellingMedicine = () => {
  const medicineData = [
    {
      id: 1,
      image: medicinedeliveryimg1,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 2,
      image: medicinedeliveryimg2,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 3,
      image: medicinedeliveryimg3,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 4,
      image: medicinedeliveryimg4,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 5,
      image: medicinedeliveryimg1,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 6,
      image: medicinedeliveryimg2,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 7,
      image: medicinedeliveryimg3,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 8,
      image: medicinedeliveryimg4,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 9,
      image: medicinedeliveryimg1,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 10,
      image: medicinedeliveryimg2,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 11,
      image: medicinedeliveryimg3,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
    {
      id: 12,
      image: medicinedeliveryimg4,
      name: "Storvas Atorvastatin Tablet IP, Sun Pharma",
      price: "₹ 800",
      address: "Nidaan Hospital , Sector-1 , Gurgaon",
    },
  ];

  return (
    <>
      <Container>
        <Row className="g-3 mt-4">
          <p className="fs-3 fw-bolder">Top Selling Medicine</p>
          {medicineData.map((hospital) => (
            <Col key={hospital.id} xl={3} lg={6} md={12} sm={12}>
              <Card
                style={{ width: "100%", height: "auto" }}
                className="rounded-3"
              >
                <Card.Img
                  variant="top"
                  src={hospital.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bolder">{hospital.name}</Card.Title>
                  <div className="d-flex mt-1">
                    <FaMoneyBill className="me-3 fs-20" />
                    <Card.Text>
                      <span className="fw-bolder me-2">{hospital.price}</span>
                      Stripe
                    </Card.Text>
                  </div>
                  <button
                    className="btn w-100 border my-2"
                    style={{ fontSize: "13px" }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-primary w-100 border"
                    style={{ fontSize: "13px" }}
                  >
                    Buy Now
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center mt-5">
          <Button className="btn btn-dark rounded-0 px-3">
            View More <FaArrowRight />
          </Button>
        </div>
      </Container>
    </>
  );
};

export default TopSellingMedicine;
