import Footer from "../../component/footer/footer"
import Header from "../../component/header/header"
import Mobile from "../../component/mobile/mobile"
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import ClientAndEmployees from "../../component/ClientandEmployee/clientAndEmployee";
import forjobseekers from '../../assets/forjobseekers.png'
import { Col, Container, Row } from "react-bootstrap";
import './forjobseekers.css';
import { LuCheckCircle } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const ForJobSeekers = () => {

    const doctorSkills = [
        "Top Industry Pay",
        "Hospital RN, Allied and Pharmacy Jobs",
        "Direct Deposit Weekly",
        "Medical Plans",
        "Friendly and Experienced Team",
        "Dental Plans",
        "Hundreds of Specialty Positions",
        "Vision Plan",
        "Government Pharmacy Jobs",
        "Basic and Supplemental Life Insurance",
        "Specialty RN, Allied and Pharmacy Jobs",
        "Flexible Spending and Health Savings Accounts"
    ];
    const navigate = useNavigate();

    const handleApplyNow = () => {
        navigate("/forjobseekers/applynow")
    };
    return (
        <>
            <Container className="forjobseekers">
                <Breadcrumb
                    breadcrumbTitle="For Job Seekers"
                    breadcrumbNav={[
                        {
                            navText: "Home",
                            path: "/",
                        },
                        {
                            navText: "Hospital Staffing Services",
                            path: "/hospitalstaffservice",
                        },
                        {
                            navText: "Medical Staffing Services",
                            path: "/medicalstaffingservices",
                        },
                        {
                            navText: "Certified Nursing Assistant",
                            path: "/certifiednursingassistant",
                        },

                    ]}
                />
            </Container>
            <div style={{ marginTop: "70px" }}>
                <ClientAndEmployees
                    img={forjobseekers}
                    topheading={"Why Work with Us?"}
                    contain={"We have career advisers on staff who can connect you with possibilities you might not otherwise discover. We will aim to find you the ideal position as we collaborate with top healthcare facilities across the country! Our staff will provide you all the tools you need from day one to ensure a smooth transition to your new permanent job or contract assignment. Would you like to be employed by us?"}
                    buttonname={"Apply Now"}
                    onButtonClick={handleApplyNow} />

            </div>
            <Container style={{ marginBottom: "70px", textAlign: "justify" }} className="mt-4">
                <div>
                    <Row>
                        <Col lg={12}>
                            <p className="fw-bolder" style={{fontSize:"30px"}}>Job Seekers</p>
                            <p >Searching for fantastic compensation and new opportunities? For nurses, pharmacists, and other Allied Health professionals looking for a per diem, temporary, temp-to-perm, or permanent position, Specialty Medical Staffing is the ideal choice. </p>
                            <p>You may scale Specialty from a few shifts per month to full-time employment with benefits while still having the freedom you require. You will be in excellent hands going forward thanks to our amiable and knowledgeable staff! </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={8}>
                            <p className="fw-bolder" style={{fontSize:"30px"}}>Benefits of Working With Us</p>
                            <Row>
                                {doctorSkills.map((skill, index) => (
                                    <Col key={index} xs={12} sm={12} lg={6} className="mt-2">
                                        <div><LuCheckCircle className="primary-color me-2" />{skill}</div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Mobile />
        </>
    )
}
export default ForJobSeekers;