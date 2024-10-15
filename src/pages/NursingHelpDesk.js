import React from "react";
import nursingHelpDesk from "../assets/nursing-Help-Desk-hero-img.png";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import HeroHomeAttendant from "../component/Hero/HeroHomeAttendant";
import Mobile from "../component/mobile/mobile";
import QuestionHomeAttendent from "../component/Question/QuestionHomeAttendent";
import PhysicalTherapy from "../component/PhysicalTherapy/PhysicalTherapy";
import imagechnageRightSide from "../assets/nursinghelpdeskchnageimg.png";
import RequestCallbackForm from "./ElderCareservices/RequestCallbackform";
import { Row, Col, Container } from "react-bootstrap";

const NursingHelpDesk = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbTitle="Nursing Help Desk"
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
      <HeroHomeAttendant img={nursingHelpDesk} />
      <Container>
        <Row className="mt-5 mb-5">
          <Col lg={8}>
            <p className="fs-3 fw-bolder">When do you need Caregiver services in your City</p>
            <p className="text-justify">
            A service that attends to the needs and requirements of the elderly is called senior care, sometimes referred to as eldercare. Eldercare services include assisted living, adult daycare, in-home care, and nursing care. A person's health problems and ailments may lead them to seek eldercare, even though age isn't a determining factor in this decision. A large number of elderly persons still reside with family members who are in charge of their care. However, in today's world, most family members are employed and unable to provide adequate care and attention to their ageing parents, necessitating the use of dependable and effective elder care programmes.
            </p>
            <p className="text-justify">
            Eldercare will become critical in Odisha when the elderly are required to prepare daily meals, wash, shower, and take medications. They have no one in the family who can look after them. Eldercare is also required for people over 65 who are unable to live independently due to illnesses or physical disabilities.
            </p>
          </Col>
          <RequestCallbackForm />
        </Row>
      </Container>
      <PhysicalTherapy
        data={[
          {
            id: 1,
            name: "Nursing Help Desk",
            topParagraph:
              " Tech Tricks Healthcare setting up a a nursing help desk can offer several benefits, particularly in healthcare seetings. Here are some resons why establishing a nursing help desk can be advantageous.",
          },
          {
            id: 2,
            name: "Improved Patient Care",
            topParagraph:
              "A nursing help desk can provide quick access to information, guidance, and support for nurses caring for patients. This can lead to better patient outcomes as nurses can promptly address quires or concerns related to patient care.",
          },
          {
            id: 3,
            name: "Efficient Workflow",
            topParagraph:
              "By centralizing resources and information, a nursing help desk can stremline communication among nurses, reducing redundancy and ensuring that essential information is radily avaliable. This can enhance workflow efficiency and minimize errors in patient care.",
          },
          {
            id: 4,
            name: "Resource Optimization",
            topParagraph:
              "Tech Tricks Help desks can facilitate ongoing education and training for nurses by providing access to updated information, new procedures, and relevant training materials. This ensures that nurses stay current with industry standards and best practices.",
          },
          {
            id: 5,
            name: "Support for New Initiatives",
            topParagraph:
              "When implementing new healthcare initiatives, a nursing help desk can serve as a support system, assisting nurses in understanding and implementing changes effectively. It can also gather feedback from nurses, aiding in the successful rollout of new programs.",
          },
          {
            id: 6,
            name: "Patient and Staff Satisfaction",
            topParagraph:
              "By offering readily avaliable assistance and support, a nursing help desk can continue to improved satisfaction among both patients and nursing staff. Patients benefit from more informed and attentive care,while nurses feel supported in their roles.",
          },
          {
            id: 7,
            name: "Adaptability and flexibility",
            topParagraph:
              "A nursing help desk can adapt to various healthcare settings, whether in hospitals, clinic, or long - term care facilities. It can cater to specific needs, making it a versatile solution for different healthcare environment.",
          },
          {
            id: 8,
            name: "How Can We Help?",
            topParagraph:
              "Our Medical nursing attendant at hospital provide care to those in need, in the comfort of their hospital. They can help with personal grooming, feeding, mobility, oral medication, monitoring of vitals and more. As per your requirement, you can hire the services for 12 hours caretaker or 24 hours caretaker.  With Tech Tricks, you’re not just getting the best prices of Trained attendants service , you’re gaining a partner in your journey to recovery and well-being. We also offer a range of superior healthcare services, including doctor consultations, medical equipment, nursing care, physiotherapy, and diagnostics. Rely on us for top-tier healthcare solutions tailored to your requirements at your door steps",
          },
          {
            id: 9,
            name: "Adaptability and flexibility",
            topParagraph: (
              <ul>
                <li>
                  You receive compassionate care for patient at home and
                  Hospital.
                </li>
                <li>We have 50,000+ happy customers.</li>
                <li>
                  Our attendants are supervised by senior nurses and doctors.
                </li>
                <li>
                  Our attendants are well trained and their backgrounds are
                  checked.
                </li>
                <li>
                  We assign you an attendant in such a way that he or she speaks
                  a language you are comfortable with.
                </li>
                <li>
                  We’re the recommended homecare partner for leading hospitals.
                </li>
                <li>We’re affordable, accountable and accessible</li>
              </ul>
            ),
          },
          {
            id: 10,
            name: "Trained Attendants Near Me",
            topParagraph:
              "With the availability of attendant for patient at Hospital & home, you no longer need to stress about visiting a clinic or hospital and aggravating an injury. Just Google “attendant for patient near me” or “Hospital attendant services near me” and make an appointment with Tech Tricks. You will get the best home care attendant services to help you in regaining your normal life as soon as possible.",
          },
        ]}
        imagechnageRightSide={imagechnageRightSide}
        wrapperBgColor={"#D8E7FF"}
      />
      <QuestionHomeAttendent
        textData={[
          {
            question: "What are the Responsibilities of Porte attendant?",
            answer:
              "Tech Tricks’s trained attendants will help you with administering oral medication, managing feeding tubes, assistance in ambulation, monitoring vitals or patients, personal grooming for the patient and mor",
          },
          {
            question:
              "Are Tech Trick's trained attendants medically qualified?",
            answer:
              "Tech Tricks’s trained attendants will help you with administering oral medication, managing feeding tubes, assistance in ambulation, monitoring vitals or patients, personal grooming for the patient and mor",
          },
          {
            question: "Are Tech Trick's trained attendants Reliable?",
            answer:
              "Tech Tricks’s trained attendants will help you with administering oral medication, managing feeding tubes, assistance in ambulation, monitoring vitals or patients, personal grooming for the patient and mor",
          },
          {
            question: "How long will a trained Attendant stay at my home?",
            answer:
              "Tech Tricks’s trained attendants will help you with administering oral medication, managing feeding tubes, assistance in ambulation, monitoring vitals or patients, personal grooming for the patient and mor",
          },
        ]}
        bgColor={"white"}
      />
      <Mobile />
    </>
  );
};

export default NursingHelpDesk;
