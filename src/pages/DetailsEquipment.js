import React from "react";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import Mobile from "../component/mobile/mobile";
import HeroImage from "../component/Hero/HeroImage";
import detailsEquipment from "../assets/equipment-details-heroImage-img.png";
import { Container } from "react-bootstrap";
import DetailsAllEquipment from "../component/DetailsAllEquipment/DetailsAllEquipment";

const DetailsEquipment = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Detalis Equipment"
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
            navText: "Medical Equipment",
            path: "/medicalequipment",
          },
        ]}
      />
      <HeroImage img={detailsEquipment} />
      <div className="details-all-equipment-wrapper">
        <Container>
          <h4>Geriatric and mobility care Equipment</h4>
          <DetailsAllEquipment />
        </Container>
      </div>
      <div className="equipment-details-text">
        <Container>
          <div className="row">
            <h4>
              Get Geriatric And Mobility Care Equipment's Online From Tech
              Tricks
            </h4>
            <p>
              Tech Tricks is committed to enhancing your mobility and
              independence with our top-notch geriatric and mobility care
              equipment. Our range is meticulously designed to prevent falls,
              offer crucial support, and assist in restoring balance during
              walking.
            </p>
            <p>
              Choose from a diverse selection of high-quality medical equipment
              from renowned brands, available for rental and purchase. Our
              inventory encompasses wheelchairs, hospital beds, commode raisers,
              walkers, crutches, and more, all intended to boost your confidence
              and comfort while moving. With Portea, you can swiftly regain the
              freedom to walk confidently, thanks to our comprehensive range of
              medical equipment tailored to your needs.
            </p>
          </div>
          <div className="row">
            <h4>Mag Wheel Chair</h4>
            <p>
              The Mag wheelchairs are known for their high tensile strength and
              weight-bearing capacity. These wheelchairs feature composite mags
              made from sturdy, lightweight materials like nylon/fibreglass.
              They can be customized with tires and hand rims to meet user needs
              and have resilient edges designed to maintain their original
              shape.
            </p>
          </div>
          <div className="row">
            <h4>Wheel Chair Standard</h4>
            <p>
              Our wheelchair standard features low-resistant Nylon 6/6 GF 15% or
              above in seating guide mechanisms, offering cost-effective seating
              solutions. Customization is key, with various add-ons and
              accessories to meet individual needs. These manual wheelchairs,
              built with a durable steel frame, are popular in the market.
              Armrests can be fixed or detached based on preference. Count on
              their robust build, comfortable seating, and patient-controlled
              brakes for safety and control.
            </p>
          </div>
          <div className="row">
            <h4>Motorized Wheel Chair</h4>
            <p>
              Our motorised wheelchairs have several uses, including helping
              bedridden patients, boosting post-operative recuperation, and
              helping with rehabilitation. These wheelchairs offer users a
              helpful function with their mechanical backrest and angle
              adjustments from the head position. Our wheelchairs also have
              foldable frames, extra support wheels, hand brakes, and other
              features.
            </p>
          </div>
          <div className="row">
            <h4>Recliner Wheelchair or Without Commode</h4>
            <p>
              Experience flexibility and comfort with our premium folding
              recliner wheelchairs, boasting a sleek steel finish. These
              wheelchairs feature a removable commode attachment, which doubles
              as a commode chair for added convenience. Our commitment is to
              deliver top-quality healthcare equipment and exceptional support
              to our valued clients.
            </p>
          </div>
          <div className="row">
            <h4>Wheelchair with Commode</h4>
            <p>
              Our Wheelchair With Commode is ideal for bedridden individuals,
              rehabilitation, and postoperative care, and these wheelchairs
              feature mechanically operated backrests with adjustable angles
              (30-45 degrees). These wheelchairs with potty seats play a pivotal
              role in reducing common problems such as pressure sores and
              deformities while enhancing respiration and digestion.
            </p>
          </div>
          <div className="row">
            <h4>
              Explore Different Varieties of Hospital Beds By Functionalities
            </h4>
            <p>
              Tech Tricks offers a wide range of hospital beds on rent or
              purchase based on their functionalities. Some of our options
              include:
            </p>
          </div>
          <div className="row">
            <h4>Hospital COT-ICU 3 Function Manual COT</h4>
            <p>
              Our manual cots offer adjustable height, back, and knee rest
              features, prioritizing patient comfort. These hospital cots have
              user-friendly cranks and individual braking systems for safety and
              convenience. We are dedicated to delivering exceptional care and
              medical solutions to our clients.
            </p>
          </div>
          <div className="row">
            <h4>Hospital Cot-ICU 5 Function Motorised Cot-Excelsior</h4>
            <p>
              Experience the fusion of advanced technology, ergonomic design,
              and user-friendly operation with our Icu 5 Function Motorised Cot.
              These beds offer effortless adjustment of height, backrest, knee
              rest, Trendelenburg, and reverse Trendelenburg positions through a
              remote-controlled electrical motor, ensuring optimal comfort and
              convenience.
            </p>
          </div>
          <div className="row">
            <h4>Hospital Cot-ICU 3 Function Motorised Cot</h4>
            <p>
              Our Icu 3 Function Motorised Cot offers adjustable height, back,
              and knee rest functions, effortlessly controlled by an electric
              motor and remote. We prioritize patient comfort and ease of use.
              Portea brings top-quality motorized cots and hospital beds to your
              doorstep with flexible rental and purchase choices.
            </p>
          </div>
          <div className="row">
            <h4>Hospital Cot-Semi-Fowler Manual</h4>
            <p>
              Our Semi Fowler Manual cots are designed with two-section
              perforated structures, allowing for adjustable backrest positions.
              They operate smoothly with cranks and come equipped with
              individual braking systems to ensure safety. Additionally, the
              semi fowler beds feature easy-lifting and collapsible side rails,
              enhancing patient security and comfort.
            </p>
          </div>
          <div className="row">
            <h4>Hospital Cot-Full Fowler Manual</h4>
            <p>
              Our Fowler beds feature a four-section design with perforated
              surfaces, offering adjustable knee rest and backrest
              functionalities. These beds are operated with user-friendly cranks
              and incorporate individual braking systems for enhanced safety.
              Equipped with easy-lifting mechanisms and collapsible side rails.
              Fowler beds prioritize both patient safety and comfort.
            </p>
          </div>
          <div className="row">
            <h4>ICU 5 Function Bed</h4>
            <p>
              Prioritizing patient and caregiver comfort and safety, our Icu 5
              Function Bed comes in both Electrical and Mechanical variants,
              offering flexibility to suit your requirements. These ICU beds
              feature adjustable height and tilt functions for personalized
              positioning and support. Crafted with a robust rectangular M.S.
              Tube structure and a perforated M.S. Sheet top, our hospital beds
              meet stringent safety standards. They are highly functional and
              boast an aesthetically pleasing design that enhances the overall
              environment of long-term care settings.
            </p>
          </div>
          <div className="row">
            <h4>Recliner Bed</h4>
            <p>
              The Recliner bed offers the perfect sleep position, ensuring
              utmost comfort. It elevates the upper body for relaxed sitting and
              raises the knees to prevent sliding, promoting restful sleep.
              Ideal for back pain patients, this feature-rich bed boasts
              advanced technology and exceptional strength. Our mission is
              unmatched comfort, allowing everyone to experience the best sleep.
              Get a hospital cot on rent or purchase the perfect adjustable bed
              for patients today!
            </p>
          </div>
          <div className="row">
            <h4>ICU 5 Function- Manual</h4>
            <p>
              Experience our ICU 5-function bed with mechanical backrest
              adjustment, collapsible side railings, dual-side I.V. rod
              provision, height adjustability, and removable/ interchangeable
              ABS plastic headboard and footboard.
            </p>
          </div>
          <div className="row">
            <h4>ICU 3 Function Bed</h4>
            <p>
              Our Icu 3 Function Bed combines intelligent ergonomics, advanced
              technology, and user-friendly operation to offer optimal support
              for patients and caregivers. These ICU beds come with adjustable
              settings, allowing caregivers to tilt the bed from both the head
              and leg sides (up to 30-45 degrees) and height adjustment
              capabilities. This enhances flexibility and ensures ease of use in
              patient care.
            </p>
          </div>
          <div className="row">
            <h4>
              Reasons To Buy Geriatric And Mobility Care Equipment's Online From
              Tech Tricks
            </h4>
            <div>
              <ul>
                <li>
                  <span>Convenient Home Delivery:</span> We bring our products
                  to your doorstep, saving you precious time and effort.
                  Flexible Rental or Purchase Options: Choose between renting or
                  buying medical equipment, allowing you to access healthcare on
                  your terms while making it more affordable.
                </li>
                <li>
                  <span>Flexible Rental or Purchase Options:</span> Choose
                  between renting or buying medical equipment, allowing you to
                  access healthcare on your terms while making it more
                  affordable.
                </li>
                <li>
                  <span>Service across various cities in India:</span> Our
                  services extend to various tier-1 and tier-2 cities across
                  India, ensuring that our products are readily available to all
                  our customers. You can search for wheelchair rent near me or a
                  hospital bed near me and get suitable wheelchairs and hospital
                  beds, respectively.
                </li>
                <li>
                  <span>
                    Diverse Range of Geriatric and Mobility Care Equipment's:
                  </span>{" "}
                  Explore our extensive selection of wheelchairs and hospital
                  beds catering to diverse healthcare needs.
                </li>
                <li>
                  <span>Trusted Brands:</span> We offer top-tier medical
                  equipment from renowned brands like Hitech, Arrex, Karma, and
                  Shamboo Life Solutions, guaranteeing quality and reliability.
                </li>
                <li>
                  <span>Responsive Customer Support:</span> Contact us for
                  assistance via phone at 9861806040 or email at
                  customersupport@techtricks.in. We are dedicated to providing
                  excellent customer service to meet your needs effectively.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <Mobile />
    </>
  );
};

export default DetailsEquipment;
