// import { NURSING_SERVICES_DETAIL_API, SERVICES_API } from "../config/constant";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Breadcrumb from "../component/breadcrumb/breadcrumb";
// import HeroHomeAttendant from "../component/Hero/sliderimage";
// import BookingAppointment from "../component/BookingAppointment/BookingAppointment";
// import WatchVideo from "../component/WatchVideo/WatchVideo";
// import TTHCService from "../component/TTHCService/TTHCService";
// import Expect from "../component/Expect/Expect";
// import LikeHome from "../component/LikeHome/LikeHome";
// import ServiceProvider from "../component/ServiceProvider/ServiceProvider";
// import MedicalStaff from "../component/MedicalStaff (1)/MedicalStaff";
// import Description from "../component/Description/Description";
// import CaregiverPaln from "../component/CaregiverPlan/CaregiverPlan";
// import QuestionHomeAttendent from "../component/Question/QuestionHomeAttendent";
// import Mobile from "../component/mobile/mobile";
// import ServicePlan1 from "../component/ServicePlan/ServicePlan1";
// import ICUCharges from "../component/ICUCharges/ICUCharges";
// import BookingAppointmentPhysiotherapy from "../component/BookingAppointment/BookingAppointmentPhysiotherapy";
// import PhysicalTherapy from "../component/PhysicalTherapy/PhysicalTherapy";
// import imageRightSide from "../assets/therapy.png";
// import BookingPhysiotherapy from "../component/BookingPhysiotherapy/BookingPhysiotherapy";
// import { useLocation, useParams } from "react-router-dom";
// import TTHCServicePhysiotherapy from "../component/TTHCService/TTHCServicePhysiotherapy";
// import { Container, Nav } from "react-bootstrap";
// import TubeFeeding from "../component/TubeFeeding/TubeFeeding";
// import Dataimage from "../component/TracheostomyCare/threeimagetab";
// import InfoPostSurgicalCare from "../component/TracheostomyCare/infopostsurgicalcare";
// import Loader from "../component/loader/loader";

// const NursingServicePage = () => {
//   const { id } = useParams();
//   const [sliderimage, setSliderimage] = useState([]);
//   const [facilities, setFacilities] = useState([]);
//   const [mode, setMode] = useState([]);
//   const [support, setSupport] = useState([]);
//   const [faq, setfaq] = useState([]);
//   const [info, setInfo] = useState([]);
//   const [plan, setPlan] = useState([]);
//   const [points, setPoints] = useState([]);
//   const [physicaltherapy, setPhysicalTherapy] = useState([]);
//   const [physicaltherapystep, setPhysicalTherapystep] = useState([]);
//   const [servicePlan1, setServicePlan1] = useState([]);
//   const [services, setServices] = useState([]);
//   const [watchvideo, setWatchvideo] = useState([]);
//   const [tthcService, setTthcservice] = useState([]);
//   const [currentTab, setCurrentTab] = useState("");
//   const [currentServiceId, setCurrentServiceId] = useState(null);
//   const [bookAppointmentData, setBookAppointmentData] = useState([]);
//   const [showTracheostomyText, setShowTracheostomyText] = useState(false);
//   const [threeimage, setThreeimage] = useState([]);
//   const [loading, setLoading] = useState(true);
//   console.log("physicaltherapystep@@@@@", physicaltherapystep);

//   const location = useLocation();
//   const { serviceNamebreadcrumb, subserviceId, isSubservice, serviceId } =
//     location.state || {};

//   console.log("isSubservice......", isSubservice, serviceId);

//   useEffect(() => {
//     const servicesData = async () => {
//       try {
//         const response = await axios.post(NURSING_SERVICES_DETAIL_API, {
//           service_id: subserviceId,
//         });
//         if (isSubservice) {
//           const serviceResponse = await axios.post(SERVICES_API, {
//             id: serviceId,
//           });
//           console.log("serviceResponse", serviceResponse);
//         }
//         console.log("response-service", response.data);
//         setSliderimage(response.data.DATA?.[0]?.slider?.image || []);
//         setFacilities(response.data.DATA?.[1]?.facilities || []);
//         setSupport(response.data.DATA?.[2]?.support || []);
//         setMode(response.data.DATA?.[8]?.mode || []);
//         setfaq(response.data.DATA?.[9]?.faq || []);
//         setInfo(response.data.DATA?.[7]?.info || []);
//         setPlan(response.data.DATA?.[6]?.plan || []);
//         setPoints(response.data.DATA?.[5]?.points || []);
//         setPhysicalTherapy(response.data.DATA?.[2]?.support || []);
//         setTthcservice(response.data.DATA?.[2]?.support || []);
//         setServicePlan1(response.data.DATA?.[2]?.support || []);
//         setPhysicalTherapystep(response.data.DATA?.[3]?.steps || []);
//         setWatchvideo(response.data.DATA?.[3]?.steps || []);
//         setServices(response.data.DATA?.[4]?.services || []);
//         setThreeimage(response.data.DATA?.[2]?.support || []);

//         if (response.data.DATA[2].support.childes.length > 0) {
//           const firstTab = response.data.DATA[2].support.childes[0];
//           setCurrentTab(firstTab.title);
//           setCurrentServiceId(firstTab.id);
//           await fetchTabData(firstTab.id);
//         }
//       } catch (err) {
//         console.log("error fetching the data", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     servicesData();
//   }, [subserviceId]);

//   if (loading) {
//     return <Loader />; 
//   }

//   // const fetchTabData = async (subserviceId) => {
//   //   try {
//   //     const response = await axios.post(NURSING_SERVICES_DETAIL_API, {
//   //       service_id: subserviceId,
//   //     });
//   //     console.log("responsetabdata====", response.data);
//   //     setBookAppointmentData(response.data.DATA[1]?.facilities);
//   //     setPhysicalTherapystep(response.data.DATA[3]?.steps);
//   //     setServices(response.data.DATA[4]?.services);
//   //     setTthcservice(response.data.DATA[2]?.support);
//   //     setInfo(response.data.DATA[7]?.info);
//   //     setThreeimage(response.data.DATA[2]?.support);
//   //     setPoints(response.data.DATA[5]?.points);
//   //     console.log("physicaltherapystep@@@@@", physicaltherapystep);
//   //   } catch (error) {
//   //     console.error("Error fetching data", error);
//   //   }
//   // };

//   const handleTabClick = async (title, subserviceId) => {
//     setCurrentTab(title);
//     setCurrentServiceId(subserviceId);
//     if (title === "Tracheostomy Care") {
//       setShowTracheostomyText(true);
//     } else {
//       setShowTracheostomyText(false);
//     }
//     await fetchTabData(subserviceId);
//   };

//   return (
//     <>
//       <Breadcrumb
//         breadcrumbTitle={serviceNamebreadcrumb}
//         breadcrumbNav={[{ navText: "Home", path: "/" }]}
//       />
//       <HeroHomeAttendant sliderimage={sliderimage} />

//       {serviceNamebreadcrumb === "Emergency Nursing Care" &&
//         support?.childes && (
//           <>
//             <div className="emergency-care-card-wrapper">
//               <Container>
//                 <div className="row g-3">
//                   <Nav variant="pills" className="history-tab">
//                     {support.childes.map((tab) => (
//                       <Nav.Item
//                         className="col-12 col-sm-6 col-lg-3 p-2 shadowo"
//                         key={tab.id}
//                         onClick={() => handleTabClick(tab.title, tab.id)}
//                       >
//                         <Nav.Link
//                           className="shadowl"
//                           active={currentTab === tab.title}
//                           eventKey={tab.title}
//                         >
//                           <div className="row justify-content-center">
//                             <div className="d-flex gap-3 align-items-center">
//                               <div>
//                                 <img
//                                   className="image"
//                                   src={tab.image}
//                                   alt={tab.title}
//                                 />
//                               </div>
//                               <div className="emerycency-tabtext">
//                                 {tab.title}
//                               </div>
//                             </div>
//                           </div>
//                         </Nav.Link>
//                       </Nav.Item>
//                     ))}
//                   </Nav>
//                 </div>
//               </Container>
//             </div>
//             <div className="history-content">
//               <>
//                 <BookingAppointment facilities={bookAppointmentData} />
//                 {physicaltherapystep &&
//                   physicaltherapystep.title ==
//                     "Here's a glimpse of the options we provide:" && (
//                     <TubeFeeding physicaltherapystep={physicaltherapystep} />
//                   )}
//                 {tthcService && tthcService.status !== "inactive" && (
//                   <TTHCServicePhysiotherapy tthcService={tthcService} />
//                 )}
//                 {showTracheostomyText && (
//                   <div className="tracheostomy-text1">
//                     <Container>
//                       <div className="row text-center">
//                         <h4>TTHC Tracheostomy Care at Home?</h4>
//                       </div>
//                     </Container>
//                   </div>
//                 )}
//                 {info && info.status !== "inactive" && (
//                   <Description info={info} />
//                 )}
//                 {points && points.status == "active" && (
//                   <InfoPostSurgicalCare points={points} />
//                 )}
//                 {physicaltherapystep &&
//                   physicaltherapystep.status !== "inactive" &&
//                   physicaltherapystep.childes[0].name ===
//                     "Highest customer Rating" && (
//                     <Dataimage physicaltherapystep={physicaltherapystep} />
//                   )}

//                 {services && support.status !== "inactive" && (
//                   <BookingPhysiotherapy services={services} />
//                 )}
//               </>
//             </div>
//           </>
//         )}

//       {facilities && facilities.status !== "inactive" && (
//         <BookingAppointment facilities={facilities} />
//       )}
//       {mode && mode.status !== "inactive" && (
//         <BookingAppointmentPhysiotherapy mode={mode} />
//       )}
//       {support && support.title === "Consistent & Positive Outcomes" && (
//         <ServicePlan1 servicePlan1={servicePlan1} />
//       )}
//       {physicaltherapystep &&
//         physicaltherapystep.title ===
//           "Get physical therapy for conditions like" && (
//           <PhysicalTherapy
//             steps={physicaltherapystep}
//             imageRightSide={imageRightSide}
//             wrapperBgColor={"#D8E7FF"}
//           />
//         )}
//       {services && services.title === "3 steps for booking physiotherapy" && (
//         <BookingPhysiotherapy services={services} />
//       )}

//       {/* {support &&
//         support.status !== "inactive" &&
//         serviceNamebreadcrumb !== "Emergency Nursing Care" &&
//         serviceNamebreadcrumb !== "Home Attendant" && (
//           <TTHCServicePhysiotherapy tthcService={tthcService} />
//         )} */}
//       {tthcService &&
//         tthcService.status !== "inactive" &&
//         serviceNamebreadcrumb !== "Emergency Nursing Care" &&
//         tthcService.title === "Consistent & Positive Outcomes" && (
//           <TTHCServicePhysiotherapy tthcService={tthcService} />
//         )}
//       {tthcService &&
//         // tthcService.status !== "inactive" &&
//         tthcService.title === "Support Block Title" && (
//           <Dataimage physicaltherapystep={tthcService} />
//         )}

//       {watchvideo &&
//         watchvideo.title ===
//           "Your credible home nursing services are just a call away." && (
//           <WatchVideo watchvideo={watchvideo} />
//         )}
//       {services &&
//         services.title === "Why choose TTHC for home attendant services?" && (
//           <TTHCService services={services} />
//         )}
//       {services && services.subtitle === "What to Expect" && (
//         <Expect services={services} />
//       )}
//       {points && points.title === "Because there is no place like home" && (
//         <LikeHome points={points} />
//       )}
//       <ServiceProvider />
//       <MedicalStaff />
//       {plan && plan.status !== "inactive" && <CaregiverPaln plan={plan} />}
//       {info &&
//         info.status !== "inactive" &&
//         serviceNamebreadcrumb !== "Emergency Nursing Care" && (
//           <Description info={info} />
//         )}
//       {faq && faq.status !== "inactive" && <QuestionHomeAttendent faq={faq} />}
//       {points && points.title === "Why ICU charges are high?" && (
//         <ICUCharges points={points} />
//       )}
//       <Mobile />
//     </>
//   );
// };

// export default NursingServicePage;
