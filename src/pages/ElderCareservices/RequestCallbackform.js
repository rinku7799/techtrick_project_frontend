import { Form } from "react-bootstrap";

const RequestCallbackForm = () => {
  return (
    <>
      <div className="col-12 col-lg-4 text-start d-flex flex-column">
        <Form
          className="form p-3 rounded-3"
          style={{ backgroundColor: "#F0F0F0" }}
        >
          <h4 style={{ fontWeight: "600" }}>Request a Callback</h4>
          <Form.Group className="mt-4" md="4" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Patient Name*" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mt-2" md="4" controlId="validationCustom02">
            <Form.Label>Mobile No</Form.Label>
            <Form.Control required type="text" placeholder="Mobile Number" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mt-2" md="4" controlId="validationCustom04">
            <Form.Label>City</Form.Label>
            <Form.Control required type="text" placeholder="city" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <button className="btn btn-primary btn-rounded-pill col-12 mt-4">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
};
export default RequestCallbackForm;
