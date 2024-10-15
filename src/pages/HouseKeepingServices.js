import React from "react";
import Header from "../component/header/header";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import HeroImage from "../component/Hero/HeroImage";
import housekeepingservice from "../assets/house-keeping-services-img.png";
import Mobile from "../component/mobile/mobile";
import Footer from "../component/footer/footer";
import { Container } from "react-bootstrap";
import CorporateHouseKeepings from "../assets/imgpsh_fullsize_anim (2).png";
import HospitalHouseKeepings from "../assets/imgpsh_fullsize_anim (1).png";
import BusinessSupportsServices from "../assets/imgpsh_fullsize_anim.png";
import corporateKeeping from "../assets/corporate-keeping.png";
import hospitalKeeping from "../assets/hospital-keeping.png";
import businessKeeping from "../assets/business-keeping.png";
import ProfessionalTeam from "../component/professinalTeam/professionalTeam";

const HouseKeepingServices = () => {
  return (
    <div>
      <Breadcrumb
        breadcrumbTitle="Commercial House-Keeping"
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
        ]}
      />
      <HeroImage img={housekeepingservice} />
      <div className="house-keeping-services-wrapper">
        <Container>
          <div className="row">
            <h4>Commercial House-Keeping</h4>
            <p>
              We define Tech Tricks as 'minute and attention to detail'
              committed to the client effectively with the use of right client
              centric approach. Our services are innovative and benchmarked with
              the best practices in the industry. From Corporates to Healthcare
              to Banking to Retail, Tech Tricks Facility provides end-to-end
              House-keeping Management services for your business. On a mission
              to provide best-in-class facility management services, we help you
              focus on your core jobs while enabling costefficiency.
            </p>
          </div>
        </Container>
      </div>
      <ProfessionalTeam
        data={[
          {
            id: 1,
            img: CorporateHouseKeepings,
            innerImg: corporateKeeping,
            text: "Corporate House-Keeping",
            navigate: "/corporate-house-keeping",
          },
          {
            id: 2,
            img: HospitalHouseKeepings,
            innerImg: hospitalKeeping,
            text: "Hospital House-Keeping",
            navigate: "/hospital-house-keeping",
          },
          {
            id: 3,
            img: BusinessSupportsServices,
            innerImg: businessKeeping,
            text: "Business Support Services",
            navigate: "/business-support-services",
          },
        ]}
      />
      <Mobile />
    </div>
  );
};

export default HouseKeepingServices;
