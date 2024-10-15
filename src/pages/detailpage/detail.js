import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Mobile from "../../component/mobile/mobile";
import { IoMdClose } from "react-icons/io";
import Breadcrumb from '../../component/breadcrumb/breadcrumb';
import detail1 from '../../assets/derail1.png'
import detail2 from '../../assets/derail2.png'
import detail3 from '../../assets/derail3.png'
import detail4 from '../../assets/derail4.png'
import './detail.css';
import MedicalStaff from "../../component/MedicalStaff (1)/MedicalStaff";
import favorite3 from '../../assets/favorite3.png'
import { CiLocationOn } from "react-icons/ci";
import { PiGraduationCap } from "react-icons/pi";
import { FaCalendarAlt, FaRegHeart, FaUserNurse } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuCheckCircle } from "react-icons/lu";
import hospital1 from '../../assets/hospital1.png';
import hospital2 from '../../assets/hospital2.png';
import GoogleMapReact from 'google-map-react';
import ProgressBar from "@ramonak/react-progress-bar";
import FormBookAppointment from "../../component/form/form";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Detail = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    const hospitalsData = [
        {
            name: "Saint Luke's Hospital",
            address: "1000-1020 Carondelet Dr, KS, USA-36587",
            schedule: "Sunday - Friday: 9am - 5pm.",
            image: hospital1,
        },
        {
            name: "St. Joseph Medical Center",
            address: "1000-1020 Carondelet Dr, KS, USA-36587",
            schedule: "Sunday - Friday: 9am - 5pm.",
            image: hospital2,
        },
    ];
    const doctorSkills = [
        "Capacity for improvement",
        "Operational Improvement",
        "Quantitative reasoning",
        "Patient confidentiality",
        "Stress management",
        "Case Management",
        "Disease prevention",
        "Intake Processing",
        "Scientific inquiry",
        "Critical care",
        "Patient Care"
    ];
    return (
        <>
            <div style={{ backgroundColor: "#F9F9F9" }} >
                <Container className="detail mb-3 py-4 px-0">
                    <Row className="mb-4 g-3 gx-md-5 container">
                        <Col lg={2} md={6} xs={12} py={2}>
                            <div className="row d-flex text-end align-items-center border rounded-2 p-2 closebtn" style={{backgroundColor:"#FFFFFF"}}>
                                <div className="col-6 col-md-10">
                                    <input type="text" className="border-0 w-100" placeholder="Enter city" />
                                </div>
                                <div className="col-6 col-md-2">
                                    <IoMdClose style={{ color: "#6C6A6A" }} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12} py={2}>
                            <div className="row text-end d-flex align-items-center border rounded-2 p-2 closebtn" style={{backgroundColor:"#FFFFFF"}}>
                                <div className="col-6 col-md-10">
                                    <input type="text" className="border-0 w-100" placeholder="Enter locality" />
                                </div>
                                <div className="col-6 col-md-2">
                                    <IoMdClose style={{ color: "#6C6A6A" }} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={6} xs={12} py={2}>
                            <div className="row text-end d-flex align-items-center border rounded-2 p-2 closebtn" style={{backgroundColor:"#FFFFFF"}}>
                                <div className="col-6 col-md-11">
                                    <input type="text" className="border-0 w-100" placeholder="General Surgeon" />
                                </div>
                                <div className="col-6 col-md-1">
                                    <IoMdClose style={{ color: "#6C6A6A" }} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} md={6} xs={12} py={2}>
                            <Button variant="primary" className="w-100 px-5">
                                Search
                            </Button>
                        </Col>
                    </Row>

                    <Breadcrumb breadcrumbTitle="Dr Frances Sutton"
                        breadcrumbNav={[
                            {
                                navText: "Home",
                                path: "/",
                            },
                            {
                                navText: "Home Attend",
                                path: "/homeattend",
                            },
                            {
                                navText: "Best Nursing Specialists",
                                path: "/nurselist",
                            },
                        ]} />
                </Container>
                <Row className="detail1" >
                    <Col xl={3} lg={6} md={6} sm={12} className="p-0 m-0">
                        <img src={detail1} alt="detail1" className="img-fluid h-100 " />
                    </Col>
                    <Col xl={3} lg={6} md={6} sm={12} className="p-0 m-0">
                        <img src={detail2} alt="detail2" className="img-fluid h-100" />
                    </Col>
                    <Col xl={3} lg={6} md={6} sm={12} className="p-0 m-0">
                        <img src={detail3} alt="detail3" className="img-fluid h-100" />
                    </Col>
                    <Col xl={3} lg={6} md={6} sm={12} className="p-0 m-0">
                        <img src={detail4} alt="detail4" className="img-fluid h-100" />
                    </Col>
                </Row>
                <div style={{ backgroundColor: "white" }}>
                    <div className="container">
                        <Row className="p-4 mb-5">
                            <Col lg={2}>
                                <div>
                                    <img src={favorite3} style={{ borderRadius: "50%", width: "130px", height: "130px", border: "2px solid #EDEDED" }} className="sky-background-color"/>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div>
                                    <button className="btn border rounded-5 py-2 px-3 btn-primary"><FaUserNurse className="me-2" />Nursing Specialists</button>
                                    <h3 className="fw-bolder fs-4 mt-1">Dr. Frances Sutton</h3>
                                    <div className="d-flex  flex-column flex-md-row">
                                        <span style={{ fontSize: "14px" }} className="me-2"><PiGraduationCap className="primary-color me-2" />MBBS, DM, DNB (Cardiology).</span>
                                        <span style={{ fontSize: "14px" }} className="me-2"><FaCalendarAlt className="primary-color me-1" /> Sunday - Friday: 9am - 5pm.</span>
                                        <span style={{ fontSize: "14px" }}><CiLocationOn className="primary-color me-1" />Nidaan Hospital , Sector-1 , Gurgaon</span>
                                    </div>
                                    <div className="fw-bolder fs-4">Price: ₹ 800 </div>
                                </div>
                            </Col>
                            <Col lg={2} className="d-flex align-items-center justify-content-end">
                                <div className="d-flex">
                                    <div className="border border-secondary px-2 py-1 rounded-2"> <FaRegHeart /></div>
                                    <div className="border border-secondary px-2 py-1 rounded-2 ms-2"> <IoShareSocialOutline /></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Container >
                    <Row>
                        <Col xl={8} lg={8} md={6} sm={6} xs={12}>
                            <Row className="progressbar">
                                <Col lg={12}>
                                    <div className="p-4 rounded-3" style={{ backgroundColor: "white" }}>
                                        <p className="fw-bolder fs-5 mb-0">Description</p>
                                        <progress value={25} className="w-100">25%</progress>
                                        <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas id gravida. Libero convallis diam vulputate et volutpat risus amet dolor. Blandit urna sagittis, nibh at vitae nunc. Magnis fringilla of bibendum dictumst lorem non placerat eu et velit. In diam imperdiet imperdiet seeed tortor main suspendisse. Integer habitasse purus aliquam auctor eu, ipsum. A montes, egestas nulla nunc orci auctor. Venenatis fames there are many. Integer habitasse purus aliquam auctor eu, ipsum. A montes, egestas nulla nunc orci auctor. Venenatis fames there are many.</p>
                                    </div>
                                    <div className="mt-4 p-4 rounded-3" style={{ backgroundColor: "white" }}>
                                        <p className="fw-bolder fs-5 mb-0">Doctor Experiences & Skills</p>
                                        <progress value={25} className="w-100">25%</progress>
                                        <Row>
                                            {doctorSkills.map((skill, index) => (
                                                <Col key={index} xs={12} sm={12} lg={4} className="mt-2">
                                                    <div><LuCheckCircle className="primary-color me-2" />{skill}</div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>

                                    <div className="mt-4 p-4 rounded-3" style={{ backgroundColor: "white" }}>
                                        <p className="fw-bolder fs-5 mb-0">Hospitals</p>
                                        <progress value={25} className="w-100">25%</progress>
                                        {hospitalsData.map((hospital, index) => (
                                            <Row key={index} className="mt-2 m-2 p-3 rounded-3" style={{ backgroundColor: "#F0F0F0" }}>
                                                <Col lg={2}>
                                                    <div>
                                                        <img src={hospital.image} style={{ borderRadius: "50%", width: "100px", height: "100px" }} alt={`Hospital ${index}`} className="sky-background-color"/>
                                                    </div>
                                                </Col>
                                                <Col lg={10}>
                                                    <div className="ms-3">
                                                        <h5 className="fw-bolder fs-5">{hospital.name}</h5>
                                                        <div>
                                                            <div style={{ fontSize: "14px" }}><CiLocationOn className="primary-color me-2" />{hospital.address}</div>
                                                            <div style={{ fontSize: "14px" }}><FaCalendarAlt className="primary-color me-1" />{hospital.schedule}</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        ))}
                                    </div>
                                    <div className="mt-4 p-4 rounded-3" style={{ backgroundColor: "white" }}>
                                        <p className="fw-bolder fs-5 mb-0">Map View</p>
                                        <progress value={25} className="w-100">25%</progress>
                                        <div style={{ height: '100vh', width: '100%', marginTop: "20px" }}>
                                            <GoogleMapReact
                                                bootstrapURLKeys={{ key: "" }}
                                                defaultCenter={defaultProps.center}
                                                defaultZoom={defaultProps.zoom}
                                            >
                                                <AnyReactComponent
                                                    lat={59.955413}
                                                    lng={30.337844}
                                                    text="My Marker"
                                                />
                                            </GoogleMapReact>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                            <FormBookAppointment toptext={"Request a Callback"} btntext={"Submit"} bgcolor={"#F0F0F0"}/>
                    </Row>
                    <MedicalStaff />
                </Container>

                <Mobile />
            </div>

        </>
    );
};

export default Detail;
