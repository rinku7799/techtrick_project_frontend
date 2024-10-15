import RegisteredNurse from "../component/RegisteredNurse/RegisteredNurse";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import Mobile from "../component/mobile/mobile";
import certifiednursingassistant from "../assets/certifiednursingassistant1.png";
import { Container } from "react-bootstrap";
import './home.css';

const CertifiedNursingAssistant = () => {
  return (
    <>
    <Container className="CertifiedNursingAssistant">
      <Breadcrumb
        breadcrumbTitle="Certified Nursing Assistant"
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
        ]}
      />
      </Container>
      <RegisteredNurse
        img={certifiednursingassistant}
        topcontain={
          "Help your patients live comfortable lives by hiring certified nursing assistants!"
        }
        secondcontain={
          "A vital part of patient care is handled by Certified Nursing Assistants (CNAs), whether in a care facility or at home. They help patients and their families with everyday tasks by working closely with them. Thus, in order to carry out their jobs efficiently, CNAs should acquire the right physical methods and body mechanics."
        }
        answer={
          <>
            <div className="fs-5 mt-3">
              May it be in a hospital, nursing facility, or patient’s home, CNAs
              can:{" "}
            </div>
            <ul>
              <li>Assist with patients’ activities of daily living </li>
              <li>Prepare doctor-approved meals and snacks </li>
              <li>
                Move patients safely to and from the wheelchair, bed, etc.
              </li>
              <li>
                Ensure a safe, clean, and sanitized environment for patients
              </li>
              <li>Provide companionship </li>
              <li>Coordinate with other healthcare members and families</li>
            </ul>
          </>
        }
        lastcontain={
          "Your organization can greatly benefit from hiring CNAs to provide direct patient care. If you need help, Tech Tricks Medical Staffing is your partner in healthcare staffing! Our recruitment solutions will help you source, assess, and hire highly trained CNAs in no time. By partnering with us, you can make the most of your healthcare team and ensure optimal client satisfaction."
        }
      />
      <Mobile />
    </>
  );
};

export default CertifiedNursingAssistant;
