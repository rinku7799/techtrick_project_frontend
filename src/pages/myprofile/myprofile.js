import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Image, Spinner } from "react-bootstrap";
import Mobile from "../../component/mobile/mobile";
import myprofile from "../../assets/myprofile.png";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import {
  COUNTRY_API,
  STATE_API,
  CITY_API,
  MYPROFILE_API,
} from "../../config/constant";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData } = useContext(UserContext);
  console.log("userData121212", userData);
  const [countryinfo, setCountryinfo] = useState([]);
  const [stateinfo, setStateinfo] = useState([]);
  const [cityinfo, setCityinfo] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedgender, setSelectedgender] = useState("");
  const [profileImage, setProfileImage] = useState("");
  // console.log("profileImage====>>>", profileImage);
  const [updatemyprofiledata, setUpdatemyprofiledata] = useState("");
  console.log("updatemyprofiledata====>>>", updatemyprofiledata);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    username: "",
    lastname: "",
    email: "",
    mobile: "",
    gender: "",
    pincode: "",
    state: "",
    city: "",
    address: "",
    country: "",
    profile_picture: "",
  });
  console.log("formValues====", typeof formValues.profile_picture);
  useEffect(() => {
    if (userData) {
      setFormValues({
        username: userData.username || "",
        lastname: userData.lastname || "",
        email: userData.email || "",
        mobile: userData.mobile || "",
        gender: userData.gender || "",
        pincode: userData.pincode || "",
        state: userData.state || "",
        city: userData.city || "",
        country: userData.country || "",
        address: userData.address || "",
        profile_picture: userData.profile_picture || "",
      });

      setSelectedCountry(userData.country || "");
      setSelectedState(userData.state || "");
      setSelectedCity(userData.city || "");
      setSelectedgender(userData.gender || "");
      if (userData.profile_picture) {
        setProfileImage(userData.profile_picture);
      }
    }
  }, [userData]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      // Create a new FormData object to send profile data
      const formData = new FormData();
      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          formData.append(key, formValues[key]);
        }
      }
      if (formValues.profile_picture) {
        formData.append("profile_picture", formValues.profile_picture);
      }
      const response = await axios.post(MYPROFILE_API, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const updatedProfile = response.data.user;
      setUpdatemyprofiledata(updatedProfile);
      localStorage.setItem("userData", JSON.stringify(updatedProfile));
      setUserData(updatedProfile);
      toast.success("Profile Updated!");
    } catch (error) {
      toast.error("Profile not updated");
    } finally {
      setLoading(false);
    }
  };

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const genderinfo = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Other" },
  ];
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        console.log("reader", reader);
      };
      reader.readAsDataURL(file);
      setFormValues((prevValues) => ({
        ...prevValues,
        profile_picture: file,
      }));
    }
  };

  return (
    <>
      <Breadcrumb
        breadcrumbTitle="My Profile"
        breadcrumbNav={[{ navText: "Home", path: "/" }]}
      />
      <Container className="mb-5 mt-5 MyProfile">
        <Row>
          <Col lg={4} className="mt-4">
            <div className="d-flex flex-column align-items-center rounded-3 py-4 sky-background-color">
              <Image
                src={profileImage}
                className="img-fluid"
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  width: "200px",
                  height: "200px",
                }}
              />
              <input
                type="file"
                id="file-input"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <Button
                className="bg-light text-dark w-50 mt-3 border border-dark"
                onClick={() => document.getElementById("file-input").click()}
              >
                Choose Image
              </Button>
            </div>
          </Col>
          <Col lg={8} className="mt-4">
            <div
              className="p-4 rounded-3"
              style={{ backgroundColor: "#F0F0F0" }}
            >
              <Form onSubmit={handleSubmit}>
                <div className="form-body mt-3">
                  <h6 className="fs-3 fw-semibold">Edit Profile</h6>
                  <Row className="mt-4">
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupusername"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="First name"
                          name="username"
                          value={formValues.username}
                          onChange={handleInputChange}
                          className="p-3"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formGrouplastname"
                      >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Last name"
                          name="lastname"
                          value={formValues.lastname}
                          onChange={handleInputChange}
                          className="p-3"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <Form.Group className="mb-3" controlId="formGroupemail">
                        <Form.Label>Email id</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email id"
                          name="email"
                          value={formValues.email}
                          onChange={handleInputChange}
                          className="p-3"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="formGroupcontentno"
                      >
                        <Form.Label>Contact no</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Contact no"
                          name="mobile"
                          value={formValues.mobile}
                          onChange={handleInputChange}
                          className="p-3"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <Form.Group className="mb-3" controlId="formGroupgender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                          className="p-3"
                          name="gender"
                          value={selectedgender}
                          onChange={(e) => setSelectedgender(e.target.value)}
                        >
                          <option value="">{selectedgender}</option>
                          {genderinfo.map((gender) => (
                            <option key={gender.id} value={gender.id}>
                              {gender.name}
                            </option>
                          ))}
                          {/* <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option> */}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="mb-3" controlId="formGrouppincode">
                        <Form.Label>Pin Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter"
                          name="pincode"
                          value={formValues.pincode}
                          onChange={handleInputChange}
                          className="p-3"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <Form.Group className="mb-3" controlId="formGroupcountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Select
                          className="p-3"
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                        >
                          <option value="">Select</option>
                          {countryinfo.map((country) => (
                            <option key={country.id} value={country.id}>
                              {country.country_name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3" controlId="formGroupstate">
                        <Form.Label>State</Form.Label>
                        <Form.Select
                          className="p-3"
                          value={selectedState}
                          onChange={(e) => setSelectedState(e.target.value)}
                        >
                          <option value="">Select</option>
                          {stateinfo.map((state) => (
                            <option key={state.id} value={state.id}>
                              {state.state_name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3" controlId="formGroupcity">
                        <Form.Label>City</Form.Label>
                        <Form.Select
                          className="p-3"
                          value={formValues.city}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              city: e.target.value,
                            })
                          }
                        >
                          <option value="">Select</option>
                          {cityinfo.map((city) => (
                            <option key={city.id} value={city.id}>
                              {city.city_name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Form.Group className="mb-3" controlId="formGroupaddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Enter your address"
                          name="address"
                          value={formValues.address}
                          onChange={handleInputChange}
                          className="p-3"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-end mt-4">
                <Button
                    type="submit"
                    className="bg-primary text-light mt-4"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner animation="border" size="sm" className="me-2" />
                        Updating...
                      </>
                    ) : (
                      "Update Profile"
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyProfile;
