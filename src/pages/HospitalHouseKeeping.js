import React from "react";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import HeroImage from "../component/Hero/HeroImage";
import hospitalImg from "../assets/hospital-hero-img.png";
import Mobile from "../component/mobile/mobile";
import { Container } from "react-bootstrap";
import TechTricksAdvantage from "../component/TechTricksAdvantage/TechTricksAdvantage";
import techTrickHospital from "../assets/tech-tricks-hospital-img.png";
import SttafingNeedToady from "../component/sttafing/sttafingNeedToady";

const HospitalHouseKeeping = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Hospital House Keeping"
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
      <HeroImage img={hospitalImg} />
      <div className="hospital-house-keeping-wrapper">
        <Container>
          <div className="row">
            <h4>Hospital House-Keeping</h4>
            <p>
              Given the highest priority placed on patient care services, our
              housekeeping services have established themselves as knowledgeable
              and reliable in the sector. Our hospital housekeeping services
              include keeping the floors, offices, operating rooms, emergency
              rooms, and patient rooms clean; we also ensure that biomedical
              waste is segregated and maintain important hospital locations. Our
              team's extensive understanding in every facet of healthcare gives
              us the ability to meet strict requirements while minimizing
              expenses all the way through the process.
            </p>
          </div>
        </Container>
        <Container>
          <div className="row">
            <h4></h4>
            <p></p>
          </div>
        </Container>
        <Container>
          <div className="row">
            <h4>
              Our Hospital House-Keeping Services Take Care Of The Following
              Areas:
            </h4>
            <div>
              <ul>
                <li>
                  Complete cleaning from surfaces, hospital buildings, offices,
                  surgical wards, emergency clinics, and so on.
                </li>
                <li>
                  Team of highly trained Patient Care Helpers (PCH) who can help
                  in aspects like shaving, bathing and having Patient Centric
                  Approach.
                </li>
                <li>
                  Decontaminating medical equipment, trash, and linen used in
                  patient care operations.
                </li>
                <li>
                  Our cleaning attempts to reduce the amount of infectious
                  agents that may be present on surfaces and to reduce the
                  danger of microorganism transfer from one person to another.
                </li>
                <li>
                  Standardized bio-medical waste segregation via coloring method
                  which contains yellow, red, white, and blue bins.
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <Container>
          <div className="row">
            <h4>Bio-Medical Waste Segregation</h4>
            <p>
              Appropriate biomedical waste management is crucial since
              biomedical waste can have harmful effects on health and contact
              with it might result in serious repercussions. Proper waste
              segregation, storage, and disposal are essential components of an
              organization's biological waste management program. We are pleased
              to provide segregation for biomedical waste. We assist hospitals
              in preventing harmful microorganisms from harming their personnel
              and the general public by offering biological waste segregation.
              We make sure everything is done perfectly to eliminate any
              possibility of infections through destruction.
            </p>
          </div>
        </Container>
        <Container>
          <div className="row">
            <h4>Bed Making</h4>
            <p>
              Our team of Patient Care Helpers (PCH) make sure that everything
              is in place when patient occupies the room right from bed and
              pillows to hand towel. We ensure the patient stays healthy and
              your hospital's reputation grows. We offer complete satisfaction
              and impeccable experience to the patients at your hospital.
              Cleaning rooms and restrooms and assisting in handling patient
              waste are some of our key roles.
            </p>
          </div>
        </Container>
        <Container>
          <div className="row">
            <h4>Improved Efficiency</h4>
            <p>
              With the right services in place, you can lessen the likelihood of
              injuries and illnesses, cut down on the money spent on waste
              removal, maximize the utility of available space, increase
              cleanliness, enhance the well-being of hospital employees and
              patients, and speed up administrative tasks. Our operations
              optimization approach and improved process efficiency enhance the
              workflow within the hospitals. At the end of the day, our reliable
              and operationally optimized services give Hospitals peace of mind
              knowing that their house-keeping operations are in capable hands.
            </p>
          </div>
        </Container>
      </div>
      <SttafingNeedToady/>
      <TechTricksAdvantage
        data={[
          {
            topHeading: "Tech Tricks Advantage",
            ulText: (
              <ul>
                <li>Deployment of well-trained staff </li>
                <li>Utmost importance to Hygiene and Grooming</li>
                <li>Background Verified Staff</li>
                <li>
                  Staffs well-trained working in corporate environment Staff
                  attrition rate below 5%
                </li>
                <li>
                  Multiple site visits and frequent on-floor staff trainings
                </li>
              </ul>
            ),
          },
        ]}
        rightSideImg={techTrickHospital}
      />
      <Mobile />
    </>
  );
};

export default HospitalHouseKeeping;
