import React from "react";
import Header from "../component/header/header";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import HeroImage from "../component/Hero/HeroImage";
import { Container } from "react-bootstrap";
import BenefitRPO from "../component/BenefitRPO/BenefitRPO";
import KeyBenefit from "../component/BenefitRPO/KeyBenefit";
import Mobile from "../component/mobile/mobile";
import Footer from "../component/footer/footer";
import groupCutYourTravelCost from "../assets/group-cut-your-travel-cost.png";
import travelNurseReduction from "../assets/TRAVEL-NURSE-REDUCTION.png";
import holisticApproach from "../assets/HOLISTIC-APPROACH.png";
import seamlessImplementation from "../assets/SEAMLESS-IMPLEMENTATION.png";
import experiencedPartner from "../assets/SEAMLESS-IMPLEMENTATION.png";
import keyBenefitCutYourTravelCost from "../assets/keyBenefit-cut-your-travel-cost.png";
import TravelNurseCost from "../component/TravelNurseCost/TravelNurseCost";

const CutYourTravelNurseCost = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Cut Your Travel Nurse Cost"
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
      <HeroImage img={groupCutYourTravelCost} />
      <div className="cut-your-travel-nursing-cost-text">
        <Container>
          <div className="row text-center">
            <h4 className="mb-3">
              Low-Risk Travel Nurse Reduction Program Reduce Your Premium Labor
              Costs
            </h4>
            <p>
              The healthcare sector has seen numerous difficulties within the
              last three years. Health systems, facing a financial problem due
              to a scarcity of nurses, understand they need to cut back on the
              number of travel nurses they use, but they are unsure of the best
              way to accomplish this. Tech Tricks Travel Nurse Reduction Program
              aims to help your healthcare facility save considerable money by
              reducing your premium labor costs. By utilizing full-time staff
              nurses, we enable you to cut costs while maintaining a high level
              of patient care. Our team of expert recruiters uses value-based
              hiring strategies and top-tier technology to find highly qualified
              nurses who can help you save money without compromising quality
            </p>
          </div>
        </Container>
      </div>
      <BenefitRPO
        benefitData={[
          {
            img: travelNurseReduction,
            headingTop: "TRAVEL NURSE REDUCTION",
            paragraphBottom:
              "Future-proof your talent acquisition strategy through a flexible, custom model that can be scaled up or down to meet your hiring goals.",
          },
          {
            img: holisticApproach,
            headingTop: "HOLISTIC APPROACH",
            paragraphBottom:
              "Get highly skilled medical professionals who share your passion for community health, quality care and specialize in state-of-the-art practices.",
          },
          {
            img: seamlessImplementation,
            headingTop: "SEAMLESS IMPLEMENTATION",
            paragraphBottom:
              "Leverage the latest recruitment technology and efficient processes that reflect the progressive nature of your healthcare organization.",
          },
          {
            img: experiencedPartner,
            headingTop: "EXPERIENCED PARTNER",
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
        rightImage={keyBenefitCutYourTravelCost}
      />
      <TravelNurseCost />
      <Mobile />
    </>
  );
};

export default CutYourTravelNurseCost;
