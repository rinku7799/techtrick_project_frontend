import RegisteredNurse from "../component/RegisteredNurse/RegisteredNurse";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import Mobile from "../component/mobile/mobile";
import licensedVocationalNurse from "../assets/licensedVocationalNurse1.png";
import { Container } from "react-bootstrap";
import './home.css';

const LicensedVocationalNurse = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Licensed Vocational Nurse"
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
      <RegisteredNurse
        img={licensedVocationalNurse}
        topcontain={"Outsource your LVN staffing needs to the right hands!"}
        secondcontain={
          "In today’s healthcare settings, Licensed Vocational Nurses (LVN) are critical to ensure quality patient care. They not only form a vital support system for your organization, but they also work directly with patients. Moreover, LVNs are trained to provide nursing services to patients of all ages under the supervision of a registered nurse."
        }
        answer={
          <div className="fs-5 mt-4 mb-4">
            Here are some of what LVNs can do for your healthcare facility of
            agency:{" "}
          </div>
        }
        lastcontain={
          "Checks and monitors patient vital signsProvide nursing care (dressing wounds, IV therapy, inserting catheters, etc.)Collect lab samplesAdminister medications according to a doctor’s prescriptionInform registered nurses and physicians of any patient issuesUpdate medical recordsCoordinate with families to keep them in touch with their loved ones If you need help in finding and hiring compassionate Licensed Vocational Nurses, Tech Tricks Medical Staffing is here to help you. We have a team of experienced recruitment experts to work with you. Furthermore, we’ll make sure to analyze your company profile before we match any nursing professional to your organization."
        }
      />
      <Mobile />
    </>
  );
};

export default LicensedVocationalNurse;
