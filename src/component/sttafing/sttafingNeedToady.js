import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const SttafingNeedToady = () => {
  return (
    <>
      <div>
        <p className="fw-bolder text-center mt-5 fs-2">
          Let us talk about your staffing needs today!
        </p>
        <Row className="d-flex justify-content-center mb-5">
          <Col
            xs={12}
            lg={10}
            className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center"
          >
            <Link to="/foremployee">
              <button
                className="btn btn-primary m-2"
                style={{ padding: "10px 80px" }}
              >
                For Employers
              </button>
            </Link>
            <Link to="/forjobseekers">
              <button
                className="btn btn-primary m-2"
                style={{ padding: "10px 80px" }}
              >
                For Job Seekers
              </button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default SttafingNeedToady;
