import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../component/breadcrumb/breadcrumb';
import cardimgeldercareservices1 from '../../assets/cardimgeldercareservices1.png'
import cardimgeldercareservices2 from '../../assets/cardimgeldercareservices2.png'
import cardimgeldercareservices3 from '../../assets/cardimgeldercareservices3.png'
import cardimgeldercareservices4 from '../../assets/cardimgeldercareservices4.png'
import cardimgeldercareservices5 from '../../assets/cardimgeldercareservices5.png'
import cardimgeldercareservices6 from '../../assets/cardimgeldercareservices6.png'
import cardimgeldercareservices7 from '../../assets/cardimgeldercareservices7.png'

import phonecalleldercareservices1 from '../../assets/phonecalleldercareservices1.png';
import phonecalleldercareservices2 from '../../assets/phonecalleldercareservices2.png';
import phonecalleldercareservices3 from '../../assets/phonecalleldercareservices3.png';
import phonecalleldercareservices4 from '../../assets/phonecalleldercareservices4.png';
import phonecalleldercareservices5 from '../../assets/phonecalleldercareservices5.png';
import phonecalleldercareservices6 from '../../assets/phonecalleldercareservices6.png';
import phonecalleldercareservices7 from '../../assets/phonecalleldercareservices7.png';


const OurEldercareServices = () => {
    const navigate = useNavigate();
    const cardData = [
        { img: cardimgeldercareservices1, innerImg: phonecalleldercareservices1, text: "Doctor on call", navigate: '/eldercareservices/docter-on-call',text2:"You can come in contact with doctors across multi specialists over voice calls, chats or videos over voice calls, chats or videos." },
        { img: cardimgeldercareservices2, innerImg: phonecalleldercareservices2, text: "Senior Citizen Care",navigate: '/eldercareservices/senior-citizen-care',text2: "Tech Tricks with its large team of specialist, Doctors, Home Nurses, Health Professionals, Path lab, Ambulance, Private transportation." },
        { img: cardimgeldercareservices3, innerImg: phonecalleldercareservices3, text: "Elder Care", navigate: '/eldercareservices/elder-care',text2: "We understand theneed of having someone to take care of yours parents in your absence. Tech Tricks provide complete." },
        { img: cardimgeldercareservices4, innerImg: phonecalleldercareservices4, text: "Physiotherapy", navigate: '/eldercareservices/physiotherapy',text2: "You can intimate us from the web portal or application for physiotherapy service and get all the medical facility at Home."},
        { img: cardimgeldercareservices5, innerImg: phonecalleldercareservices5, text: "Nursing Care", navigate: '/eldercareservices/nursing-care',text2: "We can be there, when you can’t, to help your aging parents and other elderly family members live their golden years at home." },
        { img: cardimgeldercareservices6, innerImg: phonecalleldercareservices6, text: "Dignostic Care", navigate: '/eldercareservices/dignostic-care',text2: "Once a patient books a test, the phlebotomist visit as per the agreed time silo and collect the sample collecting." },
        { img: cardimgeldercareservices7, innerImg: phonecalleldercareservices7, text: "Other Services", navigate: '/eldercareservices/other-services',text2: "Besides Health and elderlycare, we also provide daily services cooking, domestic help, plan and mental health service." }

    ];
    const handleCardClick = (navigateTo) => {
        if (navigateTo) {
            navigate(navigateTo);
        }
    };
  return (
    <>
      <p className="fw-bolder fs-4 mt-5">Our ElderCare Services</p>
            <div className="nursingSubcategory">
                <div className="row card-container justify-content-center">
                    {cardData.map((card, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <div className="card" onClick={() => handleCardClick(card.navigate)}>
                                <img src={card.img} className="card-img" />
                                <div className="line">
                                    <img src={card.innerImg} className="inner-img border border-light p-3 rounded-circle border-3" />
                                    <p className="text-center inner-text">{card.text}</p>
                                    <p className="text-center inner-text1">{card.text2}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </>
  );
};
export default OurEldercareServices;
