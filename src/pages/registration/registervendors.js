import registerImage from "../../assets/registerimage.png";
import "./registervendors.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiCloudUpload } from "react-icons/gi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import {
  Form,
  InputGroup,
  Button,
  FormControl,
  Spinner,
} from "react-bootstrap";
import { REGISTER_VENDORS_API } from "../../config/constant";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const RegisterVendors = () => {
  const [activeTab, setActiveTab] = useState("basic-details");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [basicDetails, setBasicDetails] = useState({
    vendortype: "",
    fullname: "",
    email: "",
    gender: "",
  });
  const [addressDetails, setAddressDetails] = useState({
    name: "",
    mobile: "",
    GST: "",
    license: "",
    district: "",
    state: "",
    pinCode: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    company_image: "",
    gst_image: "",
    certificate_image: "",
  });
  const handleTabChange = (tabName) => {
    const isCurrentTabValid =
      activeTab === "basic-details" ? isBasicDetailsValid() : true;
    if (
      isCurrentTabValid ||
      tabName === "company-details" ||
      tabName === "payment-details"
    ) {
      setActiveTab(tabName);
      document.querySelectorAll(".custom-tabs li").forEach((tab) => {
        tab.classList.remove("active");
      });
      const clickedTabIndex = [
        "basic-details",
        "company-details",
        "payment-details",
      ].indexOf(tabName);
      for (let i = 1; i <= clickedTabIndex; i++) {
        document.querySelectorAll(".custom-tabs li")[i].classList.add("active");
      }
    }
  };
  const isBasicDetailsValid = () => {
    return (
      basicDetails.name !== "" &&
      basicDetails.whatsapp !== "" &&
      basicDetails.email !== "" &&
      basicDetails.gender !== ""
    );
  };
  const isAddressDetailsValid = () => {
    return (
      addressDetails.name !== "" &&
      addressDetails.mobile !== "" &&
      addressDetails.GST !== "" &&
      addressDetails.license !== ""
    );
  };
  const handleChange = (e) => {
    setBasicDetails({
      ...basicDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddressDetailsChange = (e) => {
    setAddressDetails({
      ...addressDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handlePaymentDetailsChange = (event, setFieldValue) => {
    const { name, files } = event.target;
    if (files.length > 0) {
      setFieldValue(name, files[0]);
    }
  };

  const basicDetailsValidationSchema = Yup.object().shape({
    vendortype: Yup.string().required("Vendor type is required"),
    fullname: Yup.string().required("Full name is required"),
    gender: Yup.string().required("Gender is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const companyDetailsValidationSchema = Yup.object().shape({
    company_name: Yup.string().required("Company name is required"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Mobile number is required"),
    GST: Yup.string().required("GST number is required"),
    license: Yup.string().required("Company license number is required"),
    address: Yup.string().required("Address is required"),
  });
  const documentdetailsValidationSchema = Yup.object().shape({
    company_image: Yup.string().required("image is required"),
    gst_image: Yup.string().required("image is required"),
    certificate_image: Yup.string().required("certificate image is required"),
  });
  const handleNextClick = async (values, { setFieldTouched, validateForm }) => {
    let schema;
    if (activeTab === "basic-details") {
      schema = basicDetailsValidationSchema;
    } else if (activeTab === "company-details") {
      schema = companyDetailsValidationSchema;
    } else if (activeTab === "payment-details") {
      schema = documentdetailsValidationSchema;
    }

    if (schema) {
      try {
        await schema.validate(values, { abortEarly: false });
        setActiveTab((prevTab) => {
          const nextTab =
            {
              "basic-details": "company-details",
              "company-details": "payment-details",
            }[prevTab] || prevTab;
          return nextTab;
        });
      } catch (errors) {
        errors.inner.forEach((error) => {
          setFieldTouched(error.path, true);
        });
      }
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    const formData = new FormData();

    formData.append("vendortype", values.vendortype);
    formData.append("fullname", values.fullname);
    formData.append("email", values.email);
    formData.append("gender", values.gender);
    formData.append("company_name", values.company_name);
    formData.append("mobile", values.mobile);
    formData.append("GST", values.GST);
    formData.append("license", values.license);
    formData.append("address", values.address);

    await basicDetailsValidationSchema.validate(values, { abortEarly: false });
    await companyDetailsValidationSchema.validate(values, {
      abortEarly: false,
    });
    await documentdetailsValidationSchema.validate(values, {
      abortEarly: false,
    });

    // Append files to the formData
    if (values.company_image) {
      formData.append("company_image", values.company_image);
    }
    if (values.gst_image) {
      formData.append("gst_image", values.gst_image);
    }
    if (values.certificate_image) {
      formData.append("certificate_image", values.certificate_image);
    }
    try {
      const response = await axios.post(REGISTER_VENDORS_API, formData);
      console.log("User registration successful:", response.data);
      toast.success("Register Vendor successfully!");
      resetForm();
      // setActiveTab("basic-details"); 
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.error("Error registering user:", error);
      toast.error("Error verifying... Please try again.");
    }
  };
  return (
    <>
      <div className="container mt-2 mb-5 registerVendors">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="shadow mt-5 p-4 vendors">
              <h2>Registration for vendors</h2>
              <ul className="custom-tabs">
                <li
                  className={activeTab === "basic-details" ? "active" : ""}
                  onClick={() => handleTabChange("basic-details")}
                >
                  <a className="details">
                    <FaUser
                      className="ms-3 p-1 me-2 icon"
                      style={{ fontSize: "25px", borderRadius: "50%" }}
                    />
                    <span style={{ fontSize: "14px" }}>Basic Details</span>
                  </a>
                </li>
                <li
                  className={
                    activeTab === "company-details"
                      ? "active"
                      : activeTab === "payment-details"
                      ? "active blue"
                      : ""
                  }
                >
                  <a
                    // href="#"
                    // onClick={() => handleTabChange("company-details")}
                    className="details"
                  >
                    <HiOutlineBuildingOffice
                      className="ms-3 p-1 me-2 icon border border-dark"
                      style={{ fontSize: "25px", borderRadius: "50%" }}
                    />
                    <span style={{ fontSize: "14px" }}>Company Details</span>
                  </a>
                </li>
                <li
                  className={
                    activeTab === "payment-details" ? "active blue" : ""
                  }
                >
                  <a
                    // onClick={() => handleTabChange("payment-details")}
                    className="details"
                  >
                    <GiCloudUpload
                      className="ms-3 p-1 me-2 icon border border-dark"
                      style={{ fontSize: "25px", borderRadius: "50%" }}
                    />
                    <span style={{ fontSize: "14px" }}>Document Upload</span>
                  </a>
                </li>
              </ul>
              <Formik
                initialValues={{
                  vendortype: "",
                  fullname: "",
                  email: "",
                  gender: "",
                  company_name: "",
                  mobile: "",
                  GST: "",
                  license: "",
                  address: "",
                  company_image: "",
                  gst_image: "",
                  certificate_image: "",
                }}
                validationSchema={
                  activeTab === "basic-details"
                    ? basicDetailsValidationSchema
                    : activeTab === "company-details"
                    ? companyDetailsValidationSchema
                    : documentdetailsValidationSchema
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
                        style={{ lineHeight: "30px" }}
                        className="mt-3"
                        onSubmit={handleSubmit}
                      >
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupVender"
                        >
                          <Form.Label>Vendor type</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            name="vendortype"
                            value={values.vendortype}
                            onChange={handleChange}
                            className={`border w-100 p-3 ps-2 ${
                              touched.vendortype && errors.vendortype
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option>Select service</option>
                            <option value="Wholesale Company">Wholesale Company</option>
                            <option value="Trasportation Company">Trasportation Company</option>
                            <option value="Software Company">Software Company</option>
                          </Form.Select>
                          {touched.vendortype && errors.vendortype && (
                            <div className="invalid-feedback">
                              {errors.vendortype}
                            </div>
                          )}
                        </Form.Group>
                        <Form.Group controlId="fullname" className="mb-3">
                          <Form.Label>Full name</Form.Label>
                          <Form.Control
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            value={values.fullname}
                            onChange={handleChange}
                            className={`border w-100 p-3 ps-2 ${
                              touched.fullname && errors.fullname
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          {touched.fullname && errors.fullname && (
                            <div className="invalid-feedback">
                              {errors.fullname}
                            </div>
                          )}
                        </Form.Group>
                        <Form.Group controlId="email" className="mb-3">
                          <Form.Label>Email id</Form.Label>
                          <Form.Control
                            type="text"
                            name="email"
                            placeholder="Email id"
                            value={values.email}
                            onChange={handleChange}
                            className={`border w-100 p-3 ps-2 ${
                              touched.email && errors.email ? "is-invalid" : ""
                            }`}
                          />
                          {touched.email && errors.email && (
                            <div className="invalid-feedback">
                              {errors.email}
                            </div>
                          )}
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupGender"
                        >
                          <Form.Label>Gender</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            name="gender"
                            value={values.gender}
                            onChange={handleChange}
                            className={`border w-100 p-3 ps-2 ${
                              touched.gender && errors.gender
                                ? "is-invalid"
                                : ""
                            }`}
                          >
                            <option>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
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
                    {activeTab === "company-details" && (
                      <Form
                        style={{ lineHeight: "30px" }}
                        className="mt-3"
                        onSubmit={handleSubmit}
                      >
                        <Form.Group controlId="company_name" className="mb-3">
                          <Form.Label>Company name</Form.Label>
                          <Form.Control
                            type="text"
                            name="company_name"
                            placeholder="Company Name"
                            value={values.company_name}
                            onChange={handleChange}
                            className={`border w-100 p-3 ps-2 ${
                              touched.company_name && errors.company_name
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          {touched.company_name && errors.company_name && (
                            <div className="invalid-feedback">
                              {errors.company_name}
                            </div>
                          )}
                        </Form.Group>
                        <Form.Group controlId="mobile" className="mb-3">
                          <Form.Label>Contact number</Form.Label>
                          <Form.Control
                            type="text"
                            name="mobile"
                            placeholder="Contact number"
                            value={values.mobile}
                            onChange={(e) => {
                              const { value } = e.target;
                              if (/^\d*$/.test(value) && value.length <= 10) {
                                setFieldValue("mobile", value);
                              }
                            }}
                            maxLength="10"
                            className={`border w-100 p-3 ps-2 ${
                              touched.mobile && errors.mobile
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          {touched.mobile && errors.mobile && (
                            <div className="invalid-feedback">
                              {errors.mobile}
                            </div>
                          )}
                        </Form.Group>
                        <Form.Group controlId="GST" className="mb-3">
                          <Form.Label>GST no</Form.Label>
                          <Form.Control
                            type="text"
                            name="GST"
                            placeholder="GST Number"
                            value={values.GST}
                            onChange={handleChange}
                            className={`border w-100 p-3 ps-2 ${
                              touched.GST && errors.GST ? "is-invalid" : ""
                            }`}
                          />
                          {touched.GST && errors.GST && (
                            <div className="invalid-feedback">{errors.GST}</div>
                          )}
                        </Form.Group>
                        <Form.Group controlId="license" className="mb-3">
                          <Form.Label>Company license no</Form.Label>
                          <Form.Control
                            type="text"
                            name="license"
                            placeholder="License Number"
                            value={values.license}
                            onChange={handleChange}
                            className={`border w-100 p-3 ps-2 ${
                              touched.license && errors.license
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          {touched.license && errors.license && (
                            <div className="invalid-feedback">
                              {errors.license}
                            </div>
                          )}
                        </Form.Group>
                        <Form.Group controlId="address" className="mb-3">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
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
                    {activeTab === "payment-details" && (
                      <Form
                        style={{ lineHeight: "30px" }}
                        className="mt-3"
                        onSubmit={handleSubmit}
                      >
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="company_image">
                            Upload company document
                          </Form.Label>
                          <InputGroup>
                            <FormControl
                              type="text"
                              placeholder="Choose file to upload"
                              id="company_image"
                              value={
                                values.company_image
                                  ? values.company_image.name
                                  : ""
                              }
                              readOnly
                              style={{ borderRight: "none" }}
                              className={`p-3 ${
                                touched.company_image && errors.company_image
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <input
                              id="company_imageFile"
                              type="file"
                              name="company_image"
                              style={{ display: "none" }}
                              onChange={(event) =>
                                handlePaymentDetailsChange(event, setFieldValue)
                              }
                            />
                            <label
                              htmlFor="company_imageFile"
                              className="input-group-text"
                              style={{ backgroundColor: "#fff" }}
                            >
                              <span
                                className="border p-2"
                                style={{ backgroundColor: "#EDEDED" }}
                              >
                                Browse files
                              </span>
                            </label>
                            {touched.company_image && errors.company_image && (
                              <div className="invalid-feedback">
                                {errors.company_image}
                              </div>
                            )}
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="gst_image">
                            Upload GST no document
                          </Form.Label>
                          <InputGroup>
                            <FormControl
                              type="text"
                              placeholder="Choose file to upload"
                              id="gst_image"
                              value={
                                values.gst_image ? values.gst_image.name : ""
                              }
                              readOnly
                              style={{ borderRight: "none" }}
                              className={`p-3 ${
                                touched.gst_image && errors.gst_image
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <input
                              id="gst_imageFile"
                              type="file"
                              name="gst_image"
                              style={{ display: "none" }}
                              onChange={(event) =>
                                handlePaymentDetailsChange(event, setFieldValue)
                              }
                            />
                            <label
                              htmlFor="gst_imageFile"
                              className="input-group-text"
                              style={{ backgroundColor: "#fff" }}
                            >
                              <span
                                className="border p-2"
                                style={{ backgroundColor: "#EDEDED" }}
                              >
                                Browse files
                              </span>
                            </label>
                            {touched.gst_image && errors.gst_image && (
                              <div className="invalid-feedback">
                                {errors.gst_image}
                              </div>
                            )}
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="certificate_image">
                            Upload company certificate
                          </Form.Label>
                          <InputGroup>
                            <FormControl
                              type="text"
                              placeholder="Choose file to upload"
                              id="certificate_image"
                              value={
                                values.certificate_image
                                  ? values.certificate_image.name
                                  : ""
                              }
                              readOnly
                              style={{ borderRight: "none" }}
                              className={`p-3 ${
                                touched.certificate_image &&
                                errors.certificate_image
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <input
                              id="certificate_imageFile"
                              type="file"
                              name="certificate_image"
                              style={{ display: "none" }}
                              onChange={(event) =>
                                handlePaymentDetailsChange(event, setFieldValue)
                              }
                            />
                            <label
                              htmlFor="certificate_imageFile"
                              className="input-group-text"
                              style={{ backgroundColor: "#fff" }}
                            >
                              <span
                                className="border p-2"
                                style={{ backgroundColor: "#EDEDED" }}
                              >
                                Browse files
                              </span>
                            </label>
                            {touched.certificate_image &&
                              errors.certificate_image && (
                                <div className="invalid-feedback">
                                  {errors.certificate_image}
                                </div>
                              )}
                          </InputGroup>
                        </Form.Group>

                        <Button
                          className="w-100 mt-5 p-3"
                          variant="primary"
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
          <div className="col-lg-5 col-md-12 mt-5">
            <img src={registerImage} alt="Login" className="img-fluid mt-5" />
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterVendors;

