import React from "react";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import HeroImage from "../component/Hero/HeroImage";
import corporateImg from "../assets/corporate-hero-img.png";
import { Container } from "react-bootstrap";
import TechTricksAdvantage from "../component/TechTricksAdvantage/TechTricksAdvantage";
import techTrickCorporte from "../assets/tech-tricks-corporate-house-img.png";
import Mobile from "../component/mobile/mobile";
import SttafingNeedToady from "../component/sttafing/sttafingNeedToady";


const CorporateHouseKeeping = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Corporate House-Keeping"
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
      <HeroImage img={corporateImg} />
      <div className="corporate-house-keeping-text">
        <Container>
          <div className="row">
            <h4>Corporate House-Keeping</h4>
            <p>
              Corporate housekeeping services can help small and large
              businesses maintain a secure and comfortable workplace by
              streamlining operations. As a cutting-edge provider of corporate
              housekeeping services, we guarantee that your entire corporate,
              from base to top, is always immaculate. The sustained success of
              the business depends on you hiring our professionals to do regular
              maintenance on your corporate property. Our corporate housekeeping
              services are a must for any company that wants to expand its
              customers and cherishes its reputation. Furthermore, your
              workplace is completely secure for your staff, guests, and other
              stakeholders thanks to the efforts of Tech Tricks Facility.
            </p>
          </div>
        </Container>
        <Container>
          <div className="row">
            <h4>Best Industry Practices</h4>
            <p>
              After measuring the corporate spaces and inspecting your corporate
              building, we offer free estimates and suggestions. Additionally,
              we try to conduct our cleaning sessions using established
              procedures and eco-friendly solutions whenever possible. By being
              socially conscious and minimizing potentially harmful effects on
              your property, this helps us safeguard your brand while ensuring
              that your facility maintains its finest appearance throughout the
              day
            </p>
          </div>
        </Container>
        <Container>
          <div className="row">
            <h4>Maintenance of a Clean and Orderly Workplace</h4>
            <p>
              We maintain utmost hygiene for workstations, break rooms,
              bathrooms, lobbies, and other common spaces. We also offer garbage
              collection and disposal services to reduce clutter, keeping
              Corporates organized and well-maintained throughout the workweek.
              Contacting a specialist corporate Corporate house-keeping service
              provider is an easy way to ensure that your business remains well
              sanitized without having to directly manage individuals. If you
              run a business of any size, we got everything covered. We have a
              cleaning solution for every corporate place.
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
                <li>Deployment of well-trained staff</li>
                <li>
                  Utmost importance to Hygiene and Grooming Background Verified
                  Staff
                </li>
                <li>
                  Staffs well-trained working in corporate environment Staff
                  attrition rate below 5%
                </li>
                <li>
                  Multiple site visits and frequent on-floor staff training
                </li>
              </ul>
            ),
          },
        ]}
        rightSideImg={techTrickCorporte}
      />
    
      <Mobile />
    </>
  );
};

export default CorporateHouseKeeping;
