import React from "react";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import HeroHomeAttendant from "../component/Hero/HeroHomeAttendant";
import healthCareRpo from "../assets/healthCareRpo.png";
import { Container, Row ,Col} from "react-bootstrap";
import Mobile from "../component/mobile/mobile";
import BenefitRPO from "../component/BenefitRPO/BenefitRPO";
import DecreasedCostPerHire from "../assets/DECREASED-COST-PER-HIRE.png";
import DedicatedRecruitmentTeam from "../assets/DEDICATED-RECRUITMENT-TEAM.png";
import AdvancedTechnologyAndTools from "../assets/ADVANCED-TECHNOLOGY-&-TOOLS.png";
import FlexibleRecruitingSolutions from "../assets/FLEXIBLE-RECRUITING-SOLUTIONS.png";
import PhysicalTherapy from "../component/PhysicalTherapy/PhysicalTherapy";
import imageRightSide from "../assets/rpo-group.png";
import StrikePlansAndPreparation from "../assets/Strike-Plans-&-Preparation.png";
import AcademicMedicalCenterRecruiting from "../assets/Academic-Medical-Center-(AMC)-Recruiting.png";
import TravelNurseReductionProgram from "../assets/Travel-Nurse-Reduction-Program.png";
import HospitalExpansion from "../assets/Hospital-Expansion.png";
import { useNavigate } from "react-router-dom";
import ClientAndEmployees from "../component/ClientandEmployee/clientAndEmployee";
import rpoTrickImg from "../assets/forjobseekers.png";
import FormBookAppointment from "../component/form/form";

const RpoAndManpowerService = () => {
  const navigate = useNavigate();

  const AcademicMedicalCenterRecruitingclick = () => {
    navigate("/academic-medical-center-recruiting");
  };

  const CutYourTravelCost = () => {
    navigate("/cut-your-travel-nurse-cost");
  };

  return (
    <>
      <Breadcrumb
        breadcrumbTitle="RPO & Manpower Service"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
          {
            navText: "Hospital Staffing Services",
            path: "/hospitalstaffservice",
          },
        ]}
      />
      <HeroHomeAttendant img={healthCareRpo} />
      <div className="healthCare-rpo-text-wrapper">
        <Container>
          <Row className="mt-5">
            <Col lg={8}>
            <h4>What is Healthcare RPO?</h4>
            <p>
              Tech Tricks Healthcare has more than 3+ years’ experience
              providing Recruitment Process Outsourcing (RPO) services
              exclusively to the healthcare industry. RPO helps you reduce your
              reliance on contingent workforce by deploying a successful
              healthcare RPO program that is customized to your business needs.
              Recruitment Process Outsourcing (RPO) is a form of business
              outsourcing where an employer, like a hospital or health system,
              transfers all or parts of its recruitment process to an RPO
              provider. Our healthcare RPO services are flexible and fully
              customizable to the needs of your organization. We have partnered
              with several hospitals that rely on us for sourcing assistance
              during peak periods and others that entrust us with handling their
              talent acquisition function entirely. Our responsibilities include
              sourcing, recruiting, marketing, screening, selection, offer
              management, interview preparation and scheduling, due diligence,
              adherence to DEI initiatives, pre-hire paperwork, and onboarding.
            </p>
            <h4>What is Healthcare RPO?</h4>
            <p>
              Tech Tricks Healthcare has more than 3+ years’ experience
              providing Recruitment Process Outsourcing (RPO) services
              exclusively to the healthcare industry. RPO helps you reduce your
              reliance on contingent workforce by deploying a successful
              healthcare RPO program that is customized to your business needs.
              Recruitment Process Outsourcing (RPO) is a form of business
              outsourcing where an employer, like a hospital or health system,
              transfers all or parts of its recruitment process to an RPO
              provider. Our healthcare RPO services are flexible and fully
              customizable to the needs of your organization. We have partnered
              with several hospitals that rely on us for sourcing assistance
              during peak periods and others that entrust us with handling their
              talent acquisition function entirely. Our responsibilities include
              sourcing, recruiting, marketing, screening, selection, offer
              management, interview preparation and scheduling, due diligence,
              adherence to DEI initiatives, pre-hire paperwork, and onboarding.
            </p>
            </Col>
            <FormBookAppointment toptext={"Book RPO & Manpower Service Services With TTHCz"} btntext={"Book an Appointment"} bgcolor={"#F0F0F0"}/>
          </Row>
          <div className="row">
          
          </div>
          <div className="row">
            <h4>Tech Tricks Recruitment Solutions?</h4>
            <p>
              Recruiting talented clinicians and non-clinical professionals to
              fill your healthcare staffing needs is essential to your
              organization’s success and patient outcomes. But with healthcare
              reform, workforce shortages, and shrinking budgets, recruiting the
              best candidates is challenging. AMN Healthcare Recruitment
              Solutions partners with you to augment your talent acquisition
              efforts and deliver a positive patient experience.
            </p>
          </div>
        </Container>
      </div>
      <div className="benefit-rpo-wrapper">
        <Container>
          <div className="row">
            <h4>Benefits of RPO?</h4>
          </div>
        </Container>
      </div>
      <BenefitRPO
        benefitData={[
          {
            img: DecreasedCostPerHire,
            headingTop: "DECREASED COST-PER-HIRE",
            paragraphBottom:
              "Using an RPO model, you can save a significant amount of money compared to direct hire or staffing agencies, as you pay per recruiter and not per requisition.",
          },
          {
            img: DedicatedRecruitmentTeam,
            headingTop: "DEDICATED RECRUITMENT TEAM",
            paragraphBottom:
              "As your RPO partner, our recruiters are committed to representing only your brand while communicating with candidates and hiring managers.",
          },
          {
            img: AdvancedTechnologyAndTools,
            headingTop: "ADVANCED TECHNOLOGY & TOOLS",
            paragraphBottom:
              "We offer over 70 recruitment technology options in our RPO service, with the ability to integrate into your current tech stack.",
          },
          {
            img: FlexibleRecruitingSolutions,
            headingTop: "FLEXIBLE RECRUITING SOLUTIONS",
            paragraphBottom:
              "Our RPO solutions offer close collaboration to adapt to your recruitment needs. We are a flexible and dependable partner for all hiring needs, including seasonal and projects.",
          },
        ]}
      />
      <div className="expert-solution-team">
        <Container>
          <div className="row">
            <h4>Connect With Our Expert Solutions Team.</h4>
            <p>
              Do you need help with recruitment? Please fill out the form
              provided and hear back from our recruiting experts within one
              business day to learn more about our RPO solutions. Are you
              looking for a new job? Visit our career page.
            </p>
          </div>
        </Container>
      </div>
      <div className="right-rpo-partnership">
        <Container>
          <div className="row">
            <h4>
              Create the Quality Healthcare Workforce You Need with the Right
              RPO Partnership.
            </h4>
          </div>
        </Container>
      </div>
      <ClientAndEmployees
        img={rpoTrickImg}
        topheading={"How is Tech Tricks RPO Different?"}
        contain={
          "We’re not big fans of one-size-fits-all solutions. That’s why our healthcare talent acquisition strategies never start with a template  they always begin with an open and honest conversation about your organization’s needs. At Human, we approach every healthcare partnership with a tailored plan to enhance your recruitment processes, paving the way to bring you a pipeline of quality candidates. Our healthcare RPO services are centered around culture, and we work closely with you to ensure a seamless candidate experience from start to finish. As your Healthcare RPO partner, our experienced recruiters exclusively work for you. They leverage an extensive candidate pool, proven best practices, and the latest recruitment technology to hire high-quality talent quickly."
        }
      />
      <PhysicalTherapy
        data={[
          {
            id: 1,
            img: StrikePlansAndPreparation,
            name: "Strike Plans & Preparation",
            topHeading: "Don’t let strikes Derail your Healthcare Operation",
            topParagraph:
              "Hospital Strikes have garnerd increased national attention in recent years. The effects of Covid-19 and an over burdened healthcare system, according to many nurses have left them feeling exhusted. Tech Tricks Offeres a broad range of services to keep hospitals and healthcare systems operating so they can meet their commetmet to theire patients and communities, even amid unionized labor disputs. We will provide a comprehensive strike staffing strategy to ensure quality control and avoid disrupting your patientcare.",
          },
          {
            id: 2,
            img: AcademicMedicalCenterRecruiting,
            name: "Academic Medical Center (AMC) Recruiting",
            topHeading:
              "Attract AMC Candidates That Match Your Focus & Initiatives",
            topParagraph:
              "We understand that the Academic Medical Center is a hub for research, training, and clinical outcomes. Therefore, we prioritize establishing a team of healthcare professionals who share the same passion for creativity and innovation in the workplace as you do. We will alleviate the challenges and delays that come with recruiting and retaining highly skilled talent by using our carefully curated candidate lists, comprehensive reporting, meticulous implementation, and our Human Intelligence suite of tools.",
            bottonText1: "Academic Medical Center Recruiting",
          },
          {
            id: 3,
            img: TravelNurseReductionProgram,
            name: "Reduce Your Premium Labor Costs",
            topHeading: "Reduce Your Premium Labor Costs",
            topParagraph:
              "Over the past three years, the healthcare industry has faced many challenges. On the brink of a financial crisis driven by nurse staffing shortages, hospital systems know they must release their travel nurses but must figure out how to make it happen.Hueman's Travel Nurse Reduction Program will allow your system to save significant costs by reducing your premium labor by filling openings with core staff nurses. We leverage value-based hiring strategies, top-tier technology, and the expertise of our recruiters to find qualified nurses while saving you money.",
            bottonText2: "Cut Your Travel Nurse Cost",
          },
          {
            id: 4,
            img: HospitalExpansion,
            name: "Hospital Expansion",
            topHeading: "Get the Help You Need During Your System Expansion",
            topParagraph:
              "If you are planning to expand your healthcare system, whether it's by adding a new facility, tower, or acquisition, our recruiters are here to assist you. We work closely with your leadership to identify potential obstacles and devise a practical strategy to enhance your operational efficiency and support your transformation plan.Our RPO recruiters possess an in-depth understanding of your organization, enabling them to fill vacancies with candidates who align with your culture and values, regardless of their location.",
          },
        ]}
        imageRightSide={imageRightSide}
        onButtonClick1={AcademicMedicalCenterRecruitingclick}
        onButtonClick2={CutYourTravelCost}
        wrapperBgColor={"#F0F0F0"}
      />
      <Mobile />
    </>
  );
};

export default RpoAndManpowerService;
