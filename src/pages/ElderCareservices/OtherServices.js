import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import RequestCallbackForm from "./RequestCallbackform";
import otherserviceimg from "../../assets/otherserviceimg.png";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const OtherServices =()=>{
    return(
        <>
         <div className="mb-5">
        <Breadcrumb
          breadcrumbTitle="Other Services"
          breadcrumbNav={[
            {
              navText: "Home",
              path: "/",
            },
            {
              navText: "Elder Care Services",
              path: "/elder-care-services",
            },
          ]}
        />
        <HeroHomeAttendant img={otherserviceimg} />
        <Container>
          <Row className="mt-5">
            <Col lg={8}>
              <p className="text-justify">
              Besides Health and elderly care, we also provide for daily care services like cooking, domestic help, property management or preparing a customize diet plan and mental health service.
              </p>
              <p className="fs-4 fw-bolder">Care Process Commitment Through Strength And Support</p>
              <p className="text-justify">
              Tech Tricks believes in providing round-theclock services to help your Parents. We assign a reliable ‘Professional’ that is available on call, 24*7 to look after your parents’ needs. We offer an easy enrolment process of profiling, assembling reports, planning visits, and setting reminders, in the app with Tech Tricks staff guiding through the entire process of NRI parents care services.
              </p>
              <p>If you require any information regarding medical reports, emergency information, and daily activities, you can conveniently track them in the web portal and mobile app. Sign up with us to experience a stress-free life Eldercare services now operational in more than top cities</p>
            </Col>
            <RequestCallbackForm />
          </Row>
        </Container>
      </div>
        </>
    )
}
export default OtherServices;