import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import techtricks from "../../assets/techtricks.png";
import { Button, Dropdown } from "react-bootstrap";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { CgFileDocument } from "react-icons/cg";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { TiDocumentText } from "react-icons/ti";
import { IoLogOutOutline } from "react-icons/io5";
import "./header.css";
import NeedHelpModel from "../Modal/needhelpmodel";
import { useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";
import { SERVICES_API } from "../../config/constant";
import axios from "axios";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const homeCarePaths = [
    "/homeattendant",
    "/medicalattendant",
    "/icucareathome",
    "/physiotherapy",
    "/emergencynursingcare",
  ];
  const kebabCaseStr = homeCarePaths
    .map((path) => path.toLowerCase().replace(/-/g, "~").replace(/\s+/g, "-"))
    .join(",");
  const isHomeCareActive = homeCarePaths.includes(location.pathname);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [userData, setuserData] = useState(null);

  const { userData, setUserData } = useContext(UserContext);

  const handleLogout = () => {
    setUserData(null);
    toast.success("Logged out user successfully!");
  };
  const [servicedata, setservicedata] = useState("");
  console.log("header==>", servicedata);

  useEffect(() => {
    const servicesData = async () => {
      try {
        const response = await axios.post(SERVICES_API, {
          is_header: true,
        });
        // console.log("servicehomepage==>", response.data);
        setservicedata(response.data.DATA);
      } catch (err) {
        console.log("error fetching the data", err);
      }
    };

    servicesData();
  }, []);

  const handleSubserviceClick = (subservice, isService = false) => {
    console.log("subservice", subservice);
    // return;
    const serviceName = subservice.service_name
      .toLowerCase()
      .replace(/\s+/g, "");
    const serviceNamebreadcrumb = subservice.service_name;
    const serviceId = subservice.id;
    let subserviceId = 0;
    let isSubservice = false;
    if (isService) {
      navigate(`/nursingservice/${serviceName}`, {
        state: { serviceNamebreadcrumb, subserviceId, serviceId, isSubservice },
      });
    } else {
      subserviceId =
        subservice?.subsubservices?.length != 0
          ? subservice?.subsubservices[0]?.id
          : subservice.id;
      isSubservice = subservice?.subsubservices?.length != 0 ? true : false;
      console.log("serviceName", subservice);
      navigate(`/nursingservice/${serviceName}`, {
        state: { serviceNamebreadcrumb, subserviceId, serviceId, isSubservice },
      });
    }
  };

  // const handleSubserviceClick = (subservice) => {
  //   console.log("subservice", subservice);

  //   const serviceName = subservice.service_name
  //     .toLowerCase()
  //     .replace(/\s+/g, "");
  //   const serviceNamebreadcrumb = subservice.service_name;
  //   // const subserviceId = subservice.id;
  //   const subserviceId =
  //     subservice.subsubservices.length != 0
  //       ? subservice?.subsubservices[0]?.id
  //       : subservice.id;
  //   const serviceId = subservice.id;
  //   const isSubservice = subservice.subsubservices.length != 0 ? true : false;
  //   const servicesWithoutData = [
  //     "Medical Staffing Services",
  //     "Nursing Help Desk",
  //     "RPO & Manpower Service",
  //     "Facility Management Service",
  //     "Medical Equipment",
  //   ];
  //   if (servicesWithoutData.includes(subservice.service_name)) {
  //     navigate(`/${serviceName}`);
  //   } else {
  //     navigate(`/nursingservice/${serviceName}`, {
  //       state: { serviceNamebreadcrumb, subserviceId, serviceId, isSubservice },
  //     });
  //   }
  // };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary border shadow header-conatiner"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                src={techtricks}
                width={"95px"}
                height={"78px"}
                className="headerimg p-0"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{ fontSize: "13px", fontWeight: "400", columnGap: "6px" }}
            >
              <NavLink
                exact
                to="/"
                style={{
                  color:
                    location.pathname === "/"
                      ? "rgb(20, 99, 243)"
                      : "var(--bs-nav-link-color)",
                }}
                className="nav-link"
              >
                Home
              </NavLink>
              {Array.isArray(servicedata) &&
                servicedata.length > 0 &&
                servicedata.map((item) => {
                  const hasSubservices =
                    item.subservices && Array.isArray(item.subservices);
                  return hasSubservices && item.subservices.length > 0 ? (
                    <NavDropdown
                      key={item.id}
                      title={item.service_name}
                      id="basic-nav-dropdown"
                      style={{
                        color: isHomeCareActive
                          ? "rgb(20, 99, 243)"
                          : "var(--bs-nav-link-color)",
                      }}
                      className="custom-dropdown py-0"
                    >
                      {item.subservices.map((subservice) => (
                        <NavDropdown.Item
                          key={subservice.id}
                          onClick={() => handleSubserviceClick(subservice)}
                          className="p-2 subservice-item"
                          style={{
                            borderBottom: location.pathname.includes(
                              subservice.service_name.toLowerCase()
                            )
                              ? "2px solid rgb(20, 99, 243)"
                              : "1px solid #D9D9D9",
                            color: location.pathname.includes(
                              subservice.service_name.toLowerCase()
                            )
                              ? "rgb(20, 99, 243)"
                              : "black",
                          }}
                        >
                          {subservice.service_name}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ) : (
                    <Nav.Link
                      key={item.id}
                      onClick={() => handleSubserviceClick(item, true)}
                      style={{
                        color: isHomeCareActive
                          ? "rgb(20, 99, 243)"
                          : "var(--bs-nav-link-color)",
                      }}
                    >
                      {item.service_name}
                    </Nav.Link>
                  );
                })}

              {/* <NavLink
                exact
                to="/elder-care-services"
                style={{
                  color:
                    location.pathname === "/elder-care-services"
                      ? "rgb(20, 99, 243)"
                      : "var(--bs-nav-link-color)",
                }}
                className="nav-link"
              >
                Elder Care Services
              </NavLink> */}
              <NavLink
                exact
                to="/companypage"
                style={{
                  color:
                    location.pathname === "/companypage"
                      ? "rgb(20, 99, 243)"
                      : "var(--bs-nav-link-color)",
                }}
                className="nav-link"
              >
                Company
              </NavLink>
              <NavLink
                exact
                to="/membership"
                style={{
                  color:
                    location.pathname === "/membership"
                      ? "rgb(20, 99, 243)"
                      : "var(--bs-nav-link-color)",
                }}
                className="nav-link"
              >
                Membership
              </NavLink>
              <NavLink
                exact
                style={{ color: "var(--bs-nav-link-color)" }}
                className="nav-link"
                onClick={handleShow}
              >
                Need Help
              </NavLink>
            </Nav>
            <Link to="/book-a-surgery">
              <button className="btn fs-12 rounded-5 me-2 primary-color fw-bolder px-3 py-2 booksurgery">
                Book a Surgery
              </button>
            </Link>
            <Dropdown className="nav-link my-2">
              <Dropdown.Toggle
                style={{ width: "100%" }}
                className="d-flex align-items-center fs-12 p-2 btn-primary"
              >
                {userData ? (
                  <>
                    <img
                      src={userData.profile_picture}
                      // alt="Profile"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        marginRight: "8px",
                      }}
                    />
                    <span className="fs-6 fw-bolder">{userData.username}</span>
                  </>
                ) : (
                  <>
                    <FaRegUser /> LogIn/SignUp
                  </>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {userData ? (
                  <>
                    <Dropdown.Item
                      as={NavLink}
                      to="/myprofile"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/myprofile"
                            ? "rgb(20, 99, 243)"
                            : "transparent",
                        color:
                          location.pathname === "/myprofile"
                            ? "rgb(20, 99, 243)"
                            : "black",
                        borderBottom:
                          location.pathname === "/myprofile"
                            ? "2px solid rgb(20, 99, 243)"
                            : "1px solid #D9D9D9",
                      }}
                      className="subservice-item"
                    >
                      <FaRegUser className="me-2" /> My Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={NavLink}
                      to="/favorite"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/favorite"
                            ? "rgb(20, 99, 243)"
                            : "transparent",
                        color:
                          location.pathname === "/favorite"
                            ? "rgb(20, 99, 243)"
                            : "black",
                        borderBottom:
                          location.pathname === "/favorite"
                            ? "2px solid rgb(20, 99, 243)"
                            : "1px solid #D9D9D9",
                      }}
                      className="subservice-item"
                    >
                      <FaRegHeart className="me-2" />
                      Favorite
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={NavLink}
                      to="/appointments"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/appointments"
                            ? "rgb(20, 99, 243)"
                            : "transparent",
                        color:
                          location.pathname === "/appointments"
                            ? "rgb(20, 99, 243)"
                            : "black",
                        borderBottom:
                          location.pathname === "/appointments"
                            ? "2px solid rgb(20, 99, 243)"
                            : "1px solid #D9D9D9",
                      }}
                      className="subservice-item"
                    >
                      <TiDocumentText className="me-2" />
                      Appointments
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={NavLink}
                      to="/#"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/#"
                            ? "rgb(20, 99, 243)"
                            : "transparent",
                        color:
                          location.pathname === "/#"
                            ? "rgb(20, 99, 243)"
                            : "black",
                      }}
                      onClick={handleLogout}
                      className="subservice-item"
                    >
                      <IoLogOutOutline className="me-2" />
                      Logout
                    </Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item
                      as={NavLink}
                      to="/login"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/login"
                            ? "rgb(20, 99, 243)"
                            : "transparent",
                        color:
                          location.pathname === "/login"
                            ? "rgb(20, 99, 243)"
                            : "black",
                      }}
                      className="subservice-item"
                    >
                      Login
                    </Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <NeedHelpModel show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
