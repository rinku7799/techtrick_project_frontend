import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import "./TravelNurseCost.css"

const TravelNurseCost = () => {
  return (
    <div className="travel-nurse-cost-wrapper">
      <Container>
        <div className="row">
          <div className="col-12 col-lg-5 pt-2 pe-5">
            <h4>Ready to Reduce Your Travel Nurse Costs?</h4>
            <p>
              Are you tired of spending too much on premium labor? Our solutions
              team is here to helpi By filling out a simple form, you can speak
              with one of our experts about our customized recruitment solutions
              and learn how we can help your organization reduce its labor
              spend. Contact us today
            </p>
          </div>
          <div className="col-12 col-lg-7">
            <Form>
              <div className="row g-2 py-2">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>First name<span>*</span></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    className="shadow-1"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Last name<span>*</span></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    className="shadow-1"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="row g-2 py-2">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Job Title<span>*</span></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Job Title"
                    className="shadow-1"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Email Id<span>*</span></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Email Id"
                    className="shadow-1"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="row g-2 py-2">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>Company name<span>*</span></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Company name"
                    className="shadow-1"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="text-end mt-4">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TravelNurseCost;
