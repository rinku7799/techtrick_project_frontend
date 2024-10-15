import HeroHomeAttendant from "../../component/Hero/HeroHomeAttendant";
import RequestCallbackForm from "./RequestCallbackform";
import docteroncallimg from "../../assets/docteroncall1.png";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import { Container, Row, Col } from "react-bootstrap";

const DocterOnCall = () => {
  return (
    <>
      <div className="mb-5">
        <Breadcrumb
          breadcrumbTitle="Doctor on call"
          breadcrumbNav={[
            {
              navText: "Home",
              path: "/",
            },
            {
              navText: "Elder Care Services",
              path: "/elder-care-services",
            },
          ]}
        />
        <HeroHomeAttendant img={docteroncallimg} />
        <Container>
          <Row className="mt-5">
            <Col lg={8}>
              <p className="fs-4 fw-bolder">What is Doctor on call Service?</p>
              <p className="text-justify">
                For general health checks, seasonal fever, acute diseases,
                chronic illness, and other reasons, you'll almost certainly need
                to see a doctor. We can be physically weak and want to stay at
                home, making even a trip to the Doctor seem difficult. We would
                rather have a doctor come to us than go to the Doctor ourselves
                if given the option. We can be physically weak and want to stay at
                home, making even a trip to the Doctor seem difficult. We would
                rather have a doctor come to us than go to the Doctor ourselves
                if given the option.
              </p>
              <p className="text-justify">
                To close this gap, Tech Tricks has begun to provide healthcare
                services at home, unlike traditional nursing homes and
                hospitals. The Doctor who comes to your house is a trained
                professional who can advise you on treatment options and walk
                you through the recovery process. The best part about having a
                doctor on call is that you can be treated in the privacy and
                comfort of your own home while being surrounded by your loved
                ones.The best part about having a doctor on call is that you can be treated in the privacy and
                comfort of your own home while being surrounded by your loved
                ones.
              </p>
            </Col>
            <RequestCallbackForm />
          </Row>
          <Row>
            <Col lg={12}>
              <p className="fs-4 fw-bolder">When do you need a doctor on call service or visit at your Home</p>
              <p className="text-justify">
              Doctor-on-Call is ideal for the elderly or chronically ill who cannot visit a doctor or prefer to receive treatment at home.
              </p>
              <p>The following are some of the services that home doctors provide</p>
                 <ul className="text-justify">
                <li><span className="fw-bolder">General Checkup:</span> Keeping an eye on your health is a good idea. Adults should have their health checked on a regular basis. Call us to make an appointment with our Doctor, and you can rest easy knowing that your parents' health is in good hands. 
                </li>
                <li><span className="fw-bolder">Diabetic care:</span> Diabetic patients must have their heart rate and blood glucose levels checked on a regular basis. Every three months, a doctor's consultation is also required. So, instead of driving to the Doctor's office and waiting in line, call us to schedule a doctor's appointment. An experienced doctor will guide dietary modification and therapy. 
                </li>
                <li><span className="fw-bolder">Other care:</span> Joint replacements, bone fractures, severe arthritis, spinal deformities, and other orthopedic conditions can all be helped with the help of a doctor's home care service. The majority of these patients are unable to leave their homes and are thus confined to them. When you call us, one of our best doctors will come to your home to assist you with various healthcare services. 
                </li>
                <li><span className="fw-bolder">Postoperative Cardiac care:</span> The postoperative period is critical, especially for patients with heart disease. If proper medication and care are not followed, a lot of things can go wrong. Doctors and healthcare professionals bring the best healthcare services to your home to assist you during this difficult time. Allow us to take care of your worries. 
                </li>
                <li><span className="fw-bolder">Postoperative Neuro care:</span> Nervous system disorders, like heart disease, are extremely dangerous and require excellent care as well as ongoing health monitoring. Family members may be under a lot of stress during this time. Please contact us, and we will send you an experienced Anvayaa doctor to care for you at home. 
                </li>
                <li><span className="fw-bolder">Oncological care:</span> When a loved one is undergoing cancer treatment, we understand how difficult it can be. We would go to any length to help you get through these trying times by enhancing cancer patients' quality of life. Receive oncology care and support from a trained professional in the privacy of your own home.
                </li>
            </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
            <p className="fs-4 fw-bolder">What are the benifits of Doctor-on-call in Bhubaneswar</p>
            <p>In today's fast-paced world, doctor-on-call services have become the norm. Making an appointment online not only saves time, but it also has other advantages.</p>
            <p>Here are a few of the advantages of having a doctor visit at your home: </p>
            <ul>
                <li>High-quality medical care at your home. </li>
                <li>You may be able to save money on transportation and medical costs.  </li>
                <li>More personalized and compassionate care for the patient.</li>
                <li>You can expect to receive high-quality medical care even at odd hours because they are open 24 hours a day. </li>
                <li>Home visit doctors are a great boon for the elderly, who require more medical attention and find travelling difficult.</li>

            </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default DocterOnCall;
