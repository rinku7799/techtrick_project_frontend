import React from 'react'
import EmergencyBookingAppointment from "../BookingAppointment/BookingAppointment"
import icon1 from "../../assets/p1.png"
import icon2 from "../../assets/p3.png"
import icon3 from "../../assets/exercise.svg.png"
import icon4 from "../../assets/p2.png"
import icon5 from "../../assets/p4.png"
import icon6 from "../../assets/p6.png"
import icon7 from "../../assets/sugerCheck.png"
import icon8 from "../../assets/p5.png"
import icon9 from "../../assets/wheelchair.png"
import icon10 from "../../assets/leg.png"
import icon11 from "../../assets/leg2.png"
import icon12 from "../../assets/leg3.png"
import ServiceplanEmergencyCare from '../ServicePlan/ServiceplanEmergencyCare'
import BookingPhysiotherapy from '../BookingPhysiotherapy/BookingPhysiotherapy'
import BookingAppointment from "../../assets/BOOK-APPOINTMENT.png"
import visitFacility from "../../assets/VISIT-FACILITY.png"
import beginRecovery from "../../assets/BEGIN-RECOVERY.png"

const EmergencyCare = () => {
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
                icon10={icon10}
                icon11={icon11}
                icon12={icon12}


                name1={"Skilled Nursing Care"}
                name4={"IV Administration"}
                name9={"Equipment Handling"}
                name2={"Pressure Ulcer Prevention"}
                name5={"Wound Dressing"}
                name3={"24x7 Vital Monitoring"}
                name6={"Infection Control"}
                name7={"Activities of Daily Living"}
                name8={"Care of Tubes and Catheters"}
                name10={"DVT Prevention"}
                name11={"Physiotherapy"}
                name12={"Psychological Counselling"}

            />
            <ServiceplanEmergencyCare />
            <BookingPhysiotherapy
                leftHeading={"3 Steps for getting the best recovery"}
                leftParagraph={"During the emergency following the steps and get services at door steps. within the hours."}
                rightImageData={[
                    {
                        img: BookingAppointment,
                        title: "BOOK APPOINTMENT"
                    },
                    {
                        img: visitFacility,
                        title: "VISIT FACILITY"
                    },
                    {
                        img: beginRecovery,
                        title: "BEGIN RECOVERY"
                    }
                ]}
            />
        </div>
    )
}

export default EmergencyCare
