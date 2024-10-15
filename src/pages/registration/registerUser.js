import registerImage from "../../assets/registerimage.png";
import "./registerUser.css";
import { useEffect, useState } from "react";
import { FaUserCircle, FaBuilding } from "react-icons/fa";
import { Form, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {
  COUNTRY_API,
  STATE_API,
  CITY_API,
  REGISTER_USER_API,
} from "../../config/constant";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const [activeTab, setActiveTab] = useState("basic-details");
  const [countryinfo, setCountryinfo] = useState([]);
  const [stateinfo, setStateinfo] = useState([]);
  const [cityinfo, setCityinfo] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.post(COUNTRY_API);
        if (response.data.DATA) {
          setCountryinfo(response.data.DATA);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, []);

  useEffect(() => {
    const fetchStateData = async () => {
      if (selectedCountry) {
        try {
          const response = await axios.post(STATE_API, {
            country_id: selectedCountry,
          });
          if (response.data.DATA) {
            setStateinfo(response.data.DATA);
          }
        } catch (error) {
          console.error("Error fetching state data:", error);
        }
      }
    };

    fetchStateData();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchCityData = async () => {
      if (selectedState) {
        try {
          const response = await axios.post(CITY_API, {
            state_id: selectedState,
          });
          if (response.data.DATA) {
            setCityinfo(response.data.DATA);
          }
        } catch (error) {
          console.error("Error fetching city data:", error);
        }
      }
    };

    fetchCityData();
  }, [selectedState]);

  const basicDetailsValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    lastname: Yup.string().required("lastname is required"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const addressDetailsValidationSchema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
    street: Yup.string().required("Street is required"),
    area: Yup.string().required("Area is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    pinCode: Yup.string()
      .matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
      .required("Pin code is required"),
  });

  const handleStateChange = (e, setFieldValue) => {
    const stateId = e.target.value;
    setSelectedState(stateId);
    setFieldValue("state", stateId);
    setFieldValue("city", "");
  };

  const handleCountryChange = (e, setFieldValue) => {
    const countryId = e.target.value;
    setSelectedCountry(countryId);
    setFieldValue("country", countryId);
    setFieldValue("state", "");
    setFieldValue("city", "");
  };

  const handleNextClick = (values, { setFieldTouched, validateForm }) => {
    // Validate only the current tab
    let schema;
    if (activeTab === "basic-details") {
      schema = basicDetailsValidationSchema;
    } else if (activeTab === "address-details") {
      schema = addressDetailsValidationSchema;
    }

    if (schema) {
      schema
        .validate(values, { abortEarly: false })
        .then(() => {
          setActiveTab("address-details");
        })
        .catch((errors) => {
          errors.inner.forEach((error) => {
            setFieldTouched(error.path, true);
          });
        });
    }
  };
  // const handleSubmit = async (values, { resetForm }) => {
  //   setLoading(true);
  //   try {
  //     await basicDetailsValidationSchema.validate(values, {
  //       abortEarly: false,
  //     });
  //     await addressDetailsValidationSchema.validate(values, {
  //       abortEarly: false,
  //     });

  //     const payload = {
  //       username: values.name,
  //       mobile: values.mobile,
  //       email: values.email,
  //       gender: values.gender,
  //       address: values.address,
  //       street: values.street,
  //       area: values.area,
  //       country: selectedCountry,
  //       state: selectedState,
  //       city: values.city,
  //       pincode: values.pinCode,
  //     };

  //     const response = await axios.post(REGISTER_USER_API, payload);
  //     console.log("User registration successful:", response.data);
  //     toast.success("Register User Successfully!");
  //     resetForm();
  //     navigate("/login");
  //   } catch (error) {
  //     setLoading(false);

  //     if (error.name === "ValidationError") {
  //       error.inner.forEach((err) => {
  //         toast.error(`Please required a ${err.path.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
  //       });
  //     } else {
  //       console.error("Error registering user:", error);
  //       toast.error("Error registering user. Please try again.");
  //     }
  //   }
  // };

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const payload = {
        username: values.name,
        lastname: values.lastname,
        mobile: values.mobile,
        email: values.email,
        gender: values.gender,
        address: values.address,
        street: values.street,
        area: values.area,
        country: selectedCountry,
        state: selectedState,
        city: values.city,
        pincode: values.pinCode,
      };

      await basicDetailsValidationSchema.validate(values, {
        abortEarly: false,
      });
      await addressDetailsValidationSchema.validate(values, {
        abortEarly: false,
      });

      const response = await axios.post(REGISTER_USER_API, payload);
      console.log("User registration successful:", response.data);
      toast.success("Register User Successfully!");
      resetForm();
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.error("Error registering user:", error);
      toast.error("Error registering user. Please try again.");
    }
  };

  return (
    <div className="container mt-2 mb-5 registerUser">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="shadow mt-5 p-4">
            <h2>Registration for user</h2>
            <ul className="custom-tabs mb-3">
              <li
                className={activeTab === "basic-details" ? "active blue" : ""}
                onClick={() => setActiveTab("basic-details")}
              >
                <a className="details">
                  <FaUserCircle
                    style={{ fontSize: "25px" }}
                    className="me-2 icon"
                  />
                  <span style={{ fontSize: "14px" }}>Basic Details</span>
                </a>
              </li>
              <li
                className={activeTab === "address-details" ? "active blue" : ""}
                //  onClick={() => setActiveTab("address-details")}
              >
                <a className="details">
                  <FaBuilding
                    className="ms-3 p-1 me-2 icon"
                    style={{ fontSize: "25px", borderRadius: "50%" }}
                  />
                  <span style={{ fontSize: "14px" }}>Address Details</span>
                </a>
              </li>
            </ul>
            <Formik
              initialValues={{
                name: "",
                lastname:"",
                mobile: "",
                email: "",
                gender: "",
                address: "",
                country: "",
                state: "",
                street: "",
                area: "",
                city: "",
                pinCode: "",
              }}
              validationSchema={
                activeTab === "basic-details"
                  ? basicDetailsValidationSchema
                  : addressDetailsValidationSchema
              }
              onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                setFieldValue,
                setFieldTouched,
                validateForm,
                isSubmitting,
              }) => (
                <>
                  {activeTab === "basic-details" && (
                    <Form
                      onSubmit={handleSubmit}
                      className="d-flex flex-column gap-2"
                    >
                      <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={values.name}
                          onChange={handleChange}
                          className={`border w-100 p-3 ps-2 ${
                            touched.name && errors.name ? "is-invalid" : ""
                          }`}
                        />
                        {touched.name && errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </Form.Group>
                      <Form.Group controlId="lastname">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastname"
                          placeholder="lastname"
                          value={values.lastname}
                          onChange={handleChange}
                          className={`border w-100 p-3 ps-2 ${
                            touched.lastname && errors.lastname ? "is-invalid" : ""
                          }`}
                        />
                        {touched.name && errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </Form.Group>
                      <Form.Group controlId="mobile">
                        <Form.Label>Mobile no</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter no"
                          value={values.mobile}
                          onChange={(e) => {
                            const { value } = e.target;
                            if (/^\d*$/.test(value) && value.length <= 10) {
                              setFieldValue("mobile", value);
                            }
                          }}
                          className={`border w-100 p-3 ps-2 ${
                            touched.mobile && errors.mobile ? "is-invalid" : ""
                          }`}
                          maxLength="10"
                        />
                        {touched.mobile && errors.mobile && (
                          <div className="invalid-feedback">
                            {errors.mobile}
                          </div>
                        )}
                      </Form.Group>

                      <Form.Group controlId="email">
                        <Form.Label>Email id</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          value={values.email}
                          onChange={handleChange}
                          className={`border w-100 p-3 ps-2 ${
                            touched.email && errors.email ? "is-invalid" : ""
                          }`}
                        />
                        {touched.email && errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                          className={`border w-100 p-3 ps-2 ${
                            touched.gender && errors.gender ? "is-invalid" : ""
                          }`}
                        >
                          <option>Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Form.Select>
                        {touched.gender && errors.gender && (
                          <div className="invalid-feedback">
                            {errors.gender}
                          </div>
                        )}
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="button"
                        onClick={() =>
                          handleNextClick(values, {
                            setFieldTouched,
                            validateForm,
                          })
                        }
                        className="w-100 mt-3 p-3"
                      >
                        Next
                      </Button>
                    </Form>
                  )}
                  {activeTab === "address-details" && (
                    <Form
                      onSubmit={handleSubmit}
                      className="d-flex flex-column gap-2"
                    >
                      <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          placeholder="Address"
                          value={values.address}
                          onChange={handleChange}
                          className={`border w-100 p-3 ps-2 ${
                            touched.address && errors.address
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {touched.address && errors.address && (
                          <div className="invalid-feedback">
                            {errors.address}
                          </div>
                        )}
                      </Form.Group>
                      <Form.Group controlId="street">
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                          type="text"
                          name="street"
                          placeholder="Street"
                          value={values.street}
                          onChange={handleChange}
                          className={`border w-100 p-3 ps-2 ${
                            touched.street && errors.street ? "is-invalid" : ""
                          }`}
                        />
                        {touched.street && errors.street && (
                          <div className="invalid-feedback">
                            {errors.street}
                          </div>
                        )}
                      </Form.Group>
                      <Form.Group controlId="area">
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                          type="text"
                          name="area"
                          placeholder="Area"
                          value={values.area}
                          onChange={handleChange}
                          className={`border w-100 p-3 ps-2 ${
                            touched.area && errors.area ? "is-invalid" : ""
                          }`}
                        />
                        {touched.area && errors.area && (
                          <div className="invalid-feedback">{errors.area}</div>
                        )}
                      </Form.Group>
                      <Form.Group controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Select
                          name="country"
                          value={values.country}
                          onChange={(e) =>
                            handleCountryChange(e, setFieldValue)
                          }
                          className={`border w-100 p-3 ps-2 ${
                            touched.country && errors.country
                              ? "is-invalid"
                              : ""
                          }`}
                        >
                          <option value="">Select Country</option>
                          {countryinfo.map((country) => (
                            <option key={country.id} value={country.id}>
                              {country.country_name}
                            </option>
                          ))}
                        </Form.Select>
                        {touched.country && errors.country && (
                          <div className="invalid-feedback">
                            {errors.country}
                          </div>
                        )}
                      </Form.Group>
                      <Form.Group controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Select
                          name="state"
                          value={values.state}
                          onChange={(e) => handleStateChange(e, setFieldValue)}
                          className={`border w-100 p-3 ps-2 ${
                            touched.state && errors.state ? "is-invalid" : ""
                          }`}
                        >
                          <option value="">Select State</option>
                          {stateinfo.map((state) => (
                            <option key={state.id} value={state.id}>
                              {state.state_name}
                            </option>
                          ))}
                        </Form.Select>
                        {touched.state && errors.state && (
                          <div className="invalid-feedback">{errors.state}</div>
                        )}
                      </Form.Group>
                      <Form.Group controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Select
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          className={`border w-100 p-3 ps-2 ${
                            touched.city && errors.city ? "is-invalid" : ""
                          }`}
                        >
                          <option value="">Select City</option>
                          {cityinfo.map((city) => (
                            <option key={city.id} value={city.id}>
                              {city.city_name}
                            </option>
                          ))}
                        </Form.Select>
                        {touched.city && errors.city && (
                          <div className="invalid-feedback">{errors.city}</div>
                        )}
                      </Form.Group>
                      <Form.Group controlId="pinCode">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control
                          type="text"
                          name="pinCode"
                          placeholder="Pin Code"
                          value={values.pinCode}
                          onChange={handleChange}
                          className={`border w-100 p-3 ps-2 ${
                            touched.pinCode && errors.pinCode
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {touched.pinCode && errors.pinCode && (
                          <div className="invalid-feedback">
                            {errors.pinCode}
                          </div>
                        )}
                      </Form.Group>
                      <Button
                        className="w-100 mt-3 p-3"
                        type="submit"
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
                            Submitting...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </Form>
                  )}
                </>
              )}
            </Formik>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <img src={registerImage} alt="Registration" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
