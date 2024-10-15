import React from "react";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import Mobile from "../component/mobile/mobile";
import AcademiMedicalCenterRecruiting from "../assets/Academic-Medical-Center-Recruiting.png";
import HeroImage from "../component/Hero/HeroImage";
import { Container } from "react-bootstrap";
import customizedProcesses from "../assets/CUSTOMIZED-PROCESSES.png";
import innovativeTechnology from "../assets/INNOVATIVE-TECHNOLOGY.png";
import valuesBasedHiring from "../assets/VALUES-BASED-HIRING.png";
import experiencedRecruiters from "../assets/EXPERIENCED-RECRUITERS.png";
import BenefitRPO from "../component/BenefitRPO/BenefitRPO";
import KeyBenefit from "../component/BenefitRPO/KeyBenefit";
import keyBenefitAcademicMedical from "../assets/Key-Benefits-academic-medical.png";

const AcademicMedicalCenterRecruiting = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Academic Medical Center Recruiting"
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
            navText: "RPO & Manpower Service",
            path: "/rpo&manpowerservice",
          },
        ]}
      />
      <HeroImage img={AcademiMedicalCenterRecruiting} />
      <div className="academic-Medical-center-recruting-text1">
        <Container>
          <div className="row">
            <p>
              Academic health systems are in the vanguard of modern medicine,
              bridging the gap between patient care, research, and education.
              These organizations conduct unique clinical trials that open the
              door to fresh, cutting-edge therapeutic approaches. These
              accomplishments are essential to enhancing patient outcomes in
              healthcare systems worldwide. As such, these institutions require
              highly skilled medical professionals experienced in administering
              cutting-edge procedures. That's where we come in. For 27 years,
              academic health systems have trusted Hueman RPO to hire the best
              and brightest candidates for their institutions.
            </p>
          </div>
        </Container>
      </div>
      <BenefitRPO
        benefitData={[
          {
            img: customizedProcesses,
            headingTop: "CUSTOMIZED PROCESSES",
            paragraphBottom:
              "Future-proof your talent acquisition strategy through a flexible, custom model that can be scaled up or down to meet your hiring goals.",
          },
          {
            img: valuesBasedHiring,
            headingTop: "VALUES-BASED HIRING",
            paragraphBottom:
              "Get highly skilled medical professionals who share your passion for community health, quality care and specialize in state-of-the-art practices.",
          },
          {
            img: innovativeTechnology,
            headingTop: "INNOVATIVE TECHNOLOGY",
            paragraphBottom:
              "Leverage the latest recruitment technology and efficient processes that reflect the progressive nature of your healthcare organization.",
          },
          {
            img: experiencedRecruiters,
            headingTop: "EXPERIENCED RECRUITERS",
            paragraphBottom:
              "Partner with academic health system recruiters to shape your workforce. Trust their expertise to build your dream team.",
          },
        ]}
      />
      <KeyBenefit
        dataKeyBenefit={[
          {
            id: 1,
            topHeading: "Cost Savings",
            bottomParagraph:
              "We reduce hiring-cycle time, hiring costs, and premium labor expenses so you can focus your spending on progressing your medical research.",
          },
          {
            id: 2,
            topHeading: "Dedicated Staff",
            bottomParagraph:
              "We help build a strong team of highly experienced clinicians who will elevate your culture through shared values and a passion for growth.",
          },
          {
            id: 3,
            topHeading: "Remarkable Talent",
            bottomParagraph:
              "We quickly fill open roles with top talent who will adhere to a collaborative, multidisciplinary approach to ensure safe practices and highquality patient care.",
          },
          {
            id: 4,
            topHeading: "Dynamic Growth",
            bottomParagraph:
              "Our expertise in scaling enables us to meet your academic health system's diverse hiring needs with ease and support.",
          },
          {
            id: 5,
            topHeading: "Shared Values",
            bottomParagraph:
              "Our dedicated recruiters will be an extension of your team and will act as leading representatives of your commitment to progress and innovation.",
          },
          {
            id: 6,
            topHeading: "Seamless Implementation ",
            bottomParagraph:
              "Our implementation team will manage the entire onboarding process from beginning to end, ensuring a smooth transition into our partnership.",
          },
        ]}
        rightImage={keyBenefitAcademicMedical}
      />
      <Mobile />
    </>
  );
};

export default AcademicMedicalCenterRecruiting;
