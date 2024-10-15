import React from "react";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import HeroHomeAttendant from "../component/Hero/HeroHomeAttendant";
import FacilityManagementService from "../assets/Facility-Management-Services-hero-img.png";
import Mobile from "../component/mobile/mobile";
import { Container } from "react-bootstrap";
import ExpertiseFacilityManagement from "../component/ExpertiseFacilityManagement/ExpertiseFacilityManagement";
import CommercialHouseKeepingServices from "../assets/Commercial-House-Keeping-Services.png";
import BusinessSupportServices from "../assets/Business-Support-Services.png";
import { useNavigate } from "react-router-dom";
import techTrickFacilityManagemant from "../assets/Tech-Tricks-Facility-Management-Services.png";
import ClientAndEmployees from "../component/ClientandEmployee/clientAndEmployee";

const FacilityManagementServices = () => {
  const navigate = useNavigate();

  const houseKeepingServices = () => {
    navigate("/house-keeping-services");
  };

  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Facility Management Services"
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
      <HeroHomeAttendant img={FacilityManagementService} />
      <div className="facility-management-service-text1">
        <Container>
          <div className="row text-center">
            <h4>
              Tech Tricks Facility Management Services is best-practice
              House-keeping Management company and has pan India service
              operations.
            </h4>
          </div>
        </Container>
      </div>
      <ClientAndEmployees
        img={techTrickFacilityManagemant}
        topheading={"Tech Tricks Facility Management Services"}
        contain={
          "Tech Tricks Facility Management Services is India’s premier and best-practice House-keeping Management company and has pan India service operations specializing in catering to Corporates, Healthcare and International School client. We define Tech Tricks Healthcare as 'minute and attention to detail' committed to the client effectively with the use of right client centric approach. Our services are innovative and benchmarked with the best practices in the industry. We constantly focus on maintaining your premise as per your requirements with our right technology & effective services."
        }
      />
      <div className="facility-management-service-text2">
        <Container>
          <div className="row text-center">
            <h4>Our Expertise in Facilities Management</h4>
            <p>
              Facility management is the collaboration of people and services to
              enhance the efficiency and effectiveness of the given space and
              work environment including the ambience, equipment and people who
              operate them with in.
            </p>
            <p>
              An expertly managed and maintained workplace does much more than
              just provide a pleasant experience. It makes work-life safe,
              productive and enjoyable. It's the difference between a workplace
              and a place where people can do their best work.
            </p>
          </div>
        </Container>
      </div>
      <ExpertiseFacilityManagement
        data={[
          {
            id: 1,
            img: CommercialHouseKeepingServices,
            name: "Commercial House-Keeping Services",
            paragraph:
              "From Corporates to Healthcare and from Industries to International Schools, we provide end-to-end House-keeping Management services for your business so that you focus on your jobs.",
            buttonText1: "House Keeping Services",
          },
          {
            id: 2,
            img: BusinessSupportServices,
            name: "Business Support Services",
            paragraph:
              "We provide customized Facility related Business Support services. Whether it is Reception support staff, Nurse staff or Teacher, we are the first point of contact for right services to support your business.",
            buttonText2: "Business Support Services",
          },
        ]}
        houseKeepingServices={houseKeepingServices}
      />
      <Mobile />
    </>
  );
};

export default FacilityManagementServices;
