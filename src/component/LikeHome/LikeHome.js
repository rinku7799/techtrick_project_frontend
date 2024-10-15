import React from "react";
import { Container } from "react-bootstrap";
import "./LikeHome.css";

const LikeHome = ({ points }) => {
  if (!points || !points.childes || points.childes.length === 0) {
    return null; 
  }
  return (
    <div className="like-home-wrapper">
      <Container>
        <div className="row text-start">
          <h4>{points?.title}</h4>
          <p>{points?.subtitle}</p>
          <div>
            <ul>
              {points?.childes?.map((item, index) => (
                <li key={index}>{item.points}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LikeHome;
