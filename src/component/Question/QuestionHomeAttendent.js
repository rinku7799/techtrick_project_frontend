import React from "react";
import { Card, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./Question.css";

const QuestionHomeAttendent = ({ faq }) => {
  console.log("faqfaqfaqfaq",faq)
  const faqItems = faq?.childes || [];

  return (
    <div className="question-wrapper" style={{backgroundColor:"#F9F9F9"}}>
      <Container>
        <div className="row text-start mb-4">
          <h4>{faq?.title}</h4>
        </div>
        <Accordion>
          {faqItems.map((element, index) => (
            <Card key={index} className="mb-2">
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{element?.questions}</Accordion.Header>
                <Accordion.Body>{element?.answer}</Accordion.Body>
              </Accordion.Item>
            </Card>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default QuestionHomeAttendent;
