import RegisteredNurse from "../component/RegisteredNurse/RegisteredNurse";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import Mobile from "../component/mobile/mobile";
import registerednurse from "../assets/registerednurse.png";
import { Container } from "react-bootstrap";
import './home.css';

const RegisterNursefile = () => {
  return (
    <>
    <Container className="RegisterNursefile">
      <Breadcrumb
        breadcrumbTitle="Registered Nurse"
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
            path: "//medicalstaffingservices",
          },
        ]}
      />
      </Container>
      <RegisteredNurse
        img={registerednurse}
        topcontain={
          "Maintain your standard of patient care quality by hiring well-trained nurses"
        }
        secondcontain={
          "Nurses make up the most number of healthcare professionals in the country. Hence, they play a pivotal role in delivering health care to the public. For your healthcare business, hiring qualified Registered Nurses (RN) can benefit both your patients and you. RNs assist physicians with various responsibilities, including but not limited to:"
        }
        answer={
          <ul>
            <li>
              Coordinating with the healthcare team to plan and execute patient
              care plans
            </li>
            <li>Monitoring the patients’ vital signs</li>
            <li>
              Preparing accurate reports about the patients’ health and
              improvements{" "}
            </li>
            <li>Managing medications to ensure safety and efficacy </li>
            <li>Educating family members about their loved ones’ health</li>
          </ul>
        }
        lastcontain={
          "At Tech Tricks Medical Staffing, you will have a trusted Back Office in hiring competent Registered Nurses for your medical team. Our recruitment specialists can source and evaluate potential RNs who can work with you seamlessly and effectively. We will see to it that your new team members can work around your organization with professionalism, integrity, and productivity."
        }
      />
      <Mobile />
    </>
  );
};
export default RegisterNursefile;
