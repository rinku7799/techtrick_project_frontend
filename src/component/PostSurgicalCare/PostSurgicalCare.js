import React from 'react'
import EmergencyBookingAppointment from "../BookingAppointment/BookingAppointment"
import icon1 from "../../assets/p2.png"
import icon2 from "../../assets/leg2.png"
import icon4 from "../../assets/p4.png"
import icon3 from "../../assets/p5.png"
import icon5 from "../../assets/Psychology-and-Emotional-Wellbeing.png"
import icon6 from "../../assets/Balance-and-Mobility.png"
import icon7 from "../../assets/Nutrition-and-Swallow-Therapy.png"
import icon8 from "../../assets/Bed-mobility-and-Transfers-training.png"
import icon9 from "../../assets/Wheelchair-Mobility.png"
import ServicePlanPostSurgicalPlan from '../ServicePlan/ServicePlanPostSurgicalPlan'
import { Container } from 'react-bootstrap'
import "./PostSurgicalCare.css"
import BookingPhysiotherapy from '../BookingPhysiotherapy/BookingPhysiotherapy'
import BookingAppointment from "../../assets/BOOK-APPOINTMENT.png"
import visitFacility from "../../assets/VISIT-FACILITY.png"
import beginRecovery from "../../assets/BEGIN-RECOVERY.png"

const PostSurgicalCare = () => {
    return (
        <div>
            <EmergencyBookingAppointment heading3={"Post surgical Care is critical and includes everything from pain management and feeding to reparatory management and fluid management. Get well sooner under the care of our nurses, who will help you with all of this in the comfort of your home."}
                icon1={icon1}
                icon2={icon2}
                icon3={icon3}
                icon4={icon4}
                icon5={icon5}
                icon6={icon6}
                icon7={icon7}
                icon8={icon8}
                icon9={icon9}

                name1={"Pain Management"}
                name4={"Physiotherapy"}
                name9={"Wheelchair Mobility"}
                name2={"Wound/Incision Care"}
                name5={"Psychology and Emotional Wellbeing"}
                name3={"Nutrition and Swallow Therapy"}
                name6={"Bed mobility and Transfers training"}
                name7={"Infection Control"}
                name8={"Balance and Mobility"}
            />

            <ServicePlanPostSurgicalPlan/>
            <div className='operative-surgery'>
                <Container>
                    <div className='row'>
                        <h4>Primary Steps of Recovery from Operative Surgery</h4>
                       <div className='row p-4'>
                       <ul>
                            <li>Consistent, high-quality post-operative care is paramount to ensure a patient's complete recuperation from surgical interventions, minimizing potential complications and maximizing recovery speed. </li>
                            <li>The role of our home nurses or nursing attendants is to administer intravenous drugs, dress a wound at proper intervals, provide any other medical nursing care, in addition to helping the clients perform their routine tasks. </li>
                            <li>Post operative care begins immediately after surgery. It continues for the length of the hospitalization and is necessary even after the patient has been discharged.</li>
                            <li>Needless to say, post surgical recovery with home nursing care is not only quicker and more cost-effective but easier for the family both emotionally and physically.</li>
                        </ul>
                       </div>
                    </div>
                </Container>
            </div>
            <BookingPhysiotherapy
                leftHeading={"3 steps for getting the best recovery plan"}
                leftParagraph={"During the crucial initial 90-day Golden Period following a stroke, it is imperative to take primary steps towards rehabilitation care"}
                rightImageData={[
                    {
                        img:BookingAppointment,
                        title:"BOOK APPOINTMENT"
                    },
                    {
                        img:visitFacility,
                        title:"VISIT FACILITY"
                    },
                    {
                        img:beginRecovery,
                        title:"BEGIN RECOVERY"
                    }
                ]}
            />
        </div>
    )
}

export default PostSurgicalCare
