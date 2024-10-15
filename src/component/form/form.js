import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FORM_APPOINTMENT_API } from "../../config/constant";
import { toast } from "react-toastify";
import { concat } from "lodash-es";
import { useLocation } from "react-router-dom";

const FormBookAppointment = ({ toptext, btntext, bgcolor }) => {
  const [formappointmentdata, setFormappointmentdata] = useState(null);
  const location = useLocation();
  const { serviceId } = location.state;
  console.log("iddddddd", serviceId);

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    mobile_number: Yup.string()
      .required("Mobile number is required")
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string().required("Address is required"),
    service_message: Yup.string().required("Service message is required"),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile_number: "",
      email: "",
      address: "",
      service_message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(FORM_APPOINTMENT_API, {
          ...values,
          service_id: serviceId,
        });

        console.log("formappointmentdata==>", response.data);
        setFormappointmentdata(response.data.DATA);
        toast.success("Appointment Form Save Successfully!!!");
        resetForm();
      } catch (err) {
        console.error("Error submitting form:", err);
        toast.error("Appointment Form Not Submitted!!!");
      }
    },
  });

  return (
    <>
      <div className="col-12 col-lg-4 text-start d-flex flex-column">
        <Form
          className="form p-3 rounded-3"
          style={{ backgroundColor: bgcolor }}
          onSubmit={formik.handleSubmit}
        >
          <h4 style={{ fontWeight: "600" }}>{toptext}</h4>

          <Form.Group className="mt-4" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Patient Name*"
              {...formik.getFieldProps("name")}
              isInvalid={!!formik.errors.name && formik.touched.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-4" controlId="validationCustom02">
            <Form.Label>Mobile No</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile Number"
              {...formik.getFieldProps("mobile_number")}
              isInvalid={
                !!formik.errors.mobile_number && formik.touched.mobile_number
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.mobile_number}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-4" controlId="validationCustom03">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Id"
              {...formik.getFieldProps("email")}
              isInvalid={!!formik.errors.email && formik.touched.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-4" controlId="validationCustom04">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              {...formik.getFieldProps("address")}
              isInvalid={!!formik.errors.address && formik.touched.address}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.address}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-4" controlId="validationCustom05">
            <Form.Label>Service Required</Form.Label>
            <Form.Control
              type="text"
              placeholder="Service"
              {...formik.getFieldProps("service_message")}
              isInvalid={
                !!formik.errors.service_message &&
                formik.touched.service_message
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.service_message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="btn btn-primary col-12 mt-4" type="submit">
            {btntext}
          </Button>
          <p className="text-center mt-2">
            By submitting the form, you agree to TTHC
          </p>
        </Form>

        {formappointmentdata && (
          <div className="mt-4">
            <h5>Submitted Data:</h5>
            <pre>{JSON.stringify(formappointmentdata, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  );
};

export default FormBookAppointment;
