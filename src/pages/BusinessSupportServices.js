import React from "react";
import businessServices from "../assets/business-service-hero-img.png";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import HeroImage from "../component/Hero/HeroImage";
import Mobile from "../component/mobile/mobile";
import { Container } from "react-bootstrap";
import BusinessSupport from "../component/BusinessSupport/BusinessSupport";
import SttafingNeedToady from "../component/sttafing/sttafingNeedToady";

const BusinessSupportServices = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Business Support Service"
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
            navText: "Facility Management Services",
            path: "/facilitymanagementservice",
          },
          {
            navText: "Commercial House-Keeping",
            path: "/house-keeping-services",
          },
        ]}
      />
      <HeroImage img={businessServices} />
      <div className="business-support-service-text">
        <Container>
          <div className="row">
            <h4>Business Support Service</h4>
            <p>
              Tech Tricks Facilities Management Services provides customized
              business support services. We aim to give your premise a
              hassle-free working environment.
            </p>
            <p>
              Tech Tricks Facility Management provides all the vital services to
              ensure smooth functioning of your organization by understanding
              the specific business requirements and providing the most
              efficient and cost-effective services.
            </p>
          </div>
        </Container>
      </div>
      <BusinessSupport />
      <SttafingNeedToady/>
      <Mobile />
    </>
  );
};

export default BusinessSupportServices;
