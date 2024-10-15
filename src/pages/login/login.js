import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import { LOGIN_API } from "../../config/constant";
import axios from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import registerImage from "../../assets/registerimage.png";
import { toast } from "react-toastify";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    selectedType: Yup.string().required("User type is required."),
    mobileNumber: Yup.string()
      .required("Mobile number is required.")
      .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits."),
  });

  const setRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {},
          "expired-callback": () => {},
        },
        auth
      );
    }
  };

  const handleContinue = async (values, { setSubmitting }) => {
    // window.location.href= "https://sridix.com"
    // return;
    setLoading(true);
    const { selectedType, mobileNumber } = values;
  
    try {
      const response = await axios.post(LOGIN_API, {
        user_position: selectedType,
        mobile: mobileNumber,
      });
  
      console.log("logintoken==>", response);
  
      if (response.status === 200) {
        const { token } = response.data.authorisation;
        console.log("vvvvvv", { token })
        if (token) {
          localStorage.setItem('authToken', token); 
        }
  
        setRecaptcha();
        const phoneNumber = `+91${mobileNumber}`;
        try {
          await signInWithPhoneNumber(
            auth,
            phoneNumber,
            window.recaptchaVerifier
          ).then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
          });
          toast.success("OTP sent successfully!");
          navigate(`/loginotp/${selectedType}`, {
            state: {
              mobileNumber,
              verificationId: window.confirmationResult.verificationId,
              userData: response.data
            },
           
          });
         
        } catch (error) {
          console.error("Error during signInWithPhoneNumber:", error);
          toast.error("Error verifying OTP. Please try again.");
        }
      } else {
        const errorMessage =
          selectedType === "vendor"
            ? "Vendor does not exist. Please register as a vendor."
            : "User does not exist. Please register as a user.";
        toast.error(errorMessage);
      }
    } catch (error) {
      const errorMessage =
        selectedType === "vendor"
          ? "Vendor does not exist. Please register as a vendor."
          : "User does not exist. Please register as a user.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };
  

  return (
    <Container className="mt-2 mb-5">
      <Row>
        <Col md={5}>
          <Card className="shadow p-4 mt-5" style={{ borderRadius: "15px" }}>
            <Card.Body style={{ lineHeight: "50px" }}>
              <h2>Login</h2>
              <Formik
                initialValues={{ selectedType: "", mobileNumber: "" }}
                validationSchema={validationSchema}
                onSubmit={handleContinue}
              >
                {({ handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" style={{ lineHeight: "40px" }}>
                      <Form.Label className="fw-medium">Select Type</Form.Label>
                      <Field
                        as={Form.Select}
                        name="selectedType"
                        className="p-2"
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="user">User</option>
                        <option value="vendor">Vendors</option>
                      </Field>
                      <ErrorMessage
                        name="selectedType"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ lineHeight: "40px" }}>
                      <Form.Label className="fw-medium">
                        Enter your mobile number to login/registration
                      </Form.Label>
                      <div className="d-flex">
                        <Form.Select
                          className="me-3 w-25 p-2"
                          aria-label="Select Code"
                          defaultValue="+91"
                        >
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                        </Form.Select>
                        <Field
                          as={Form.Control}
                          name="mobileNumber"
                          type="number" 
                          placeholder="Enter mobile number"
                          onInput={(e) => {
                            const value = e.target.value;
                            if (value.length > 10) {
                              e.target.value = value.slice(0, 10);
                            }
                          }}
                          maxLength="10"
                        />
                      </div>
                      <ErrorMessage
                        name="mobileNumber"
                        component="div"
                        className="text-danger"
                      />
                    </Form.Group>
                    <div id="recaptcha-container"></div>
                    <Button
                      type="submit"
                      className="w-100 mt-3 p-2"
                      variant="primary"
                      disabled={loading || isSubmitting}
                      
                    >
                      {loading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Form>
                )}
              </Formik>
              <div className="d-flex justify-content-between">
                <Link to="/registeruser">Register user Now</Link>
                <Link to="/registervendors">Register vendor Now</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={7}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={registerImage}
            alt="Login"
            className="img-fluid w-75 h-75 mt-5"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
