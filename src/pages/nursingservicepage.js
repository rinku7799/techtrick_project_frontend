import { NURSING_SERVICES_DETAIL_API, SERVICES_API } from "../config/constant";
import axios from "axios";
import { useEffect, useState } from "react";
import Breadcrumb from "../component/breadcrumb/breadcrumb";
import HeroHomeAttendant from "../component/Hero/sliderimage";
import BookingAppointment from "../component/BookingAppointment/BookingAppointment";
import WatchVideo from "../component/WatchVideo/WatchVideo";
import TTHCService from "../component/TTHCService/TTHCService";
import LikeHome from "../component/LikeHome/LikeHome";
import Description from "../component/Description/Description";
import CaregiverPaln from "../component/CaregiverPlan/CaregiverPlan";
import Mobile from "../component/mobile/mobile";
import ServicePlan1 from "../component/ServicePlan/ServicePlan1";
import BookingAppointmentPhysiotherapy from "../component/BookingAppointment/BookingAppointmentPhysiotherapy";
import PhysicalTherapy from "../component/PhysicalTherapy/PhysicalTherapy";
import imageRightSide from "../assets/therapy.png";
import BookingPhysiotherapy from "../component/BookingPhysiotherapy/BookingPhysiotherapy";
import { useAsyncValue, useLocation } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import Dataimage from "../component/TracheostomyCare/threeimagetab";
import Loader from "../component/loader/loader";
import comingsoongifimg from "../assets/source.gif";
import QuestionHomeAttendent from "../component/Question/QuestionHomeAttendent";
import VendorService from "../component/VendorService/VendorService";

const NursingServicePage = () => {
  const [sliderimage, setSliderimage] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [mode, setMode] = useState([]);
  const [support, setSupport] = useState([]);
  const [faq, setfaq] = useState([]);
  const [info, setInfo] = useState([]);
  const [plan, setPlan] = useState([]);
  const [points, setPoints] = useState([]);
  const [steps, setStep] = useState([]);
  const [services, setServices] = useState([]);
  const [currentTab, setCurrentTab] = useState("");
  const [currentServiceId, setCurrentServiceId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabimage, setTabImage] = useState([]);
  const [adsteps, setAdstep] = useState([]);
  const [threestep, setThreestep] = useState([]);
  const [serviceName, setServiceName] = useState([]);
  const [vendors, setVendors] = useState([])

  console.log("tabimageserviceName", serviceName);

  const location = useLocation();
  const { serviceNamebreadcrumb, subserviceId, isSubservice, serviceId } =
    location.state || {};
console.log("tabimagennnnnnnnnnnn",tabimage);

  useEffect(() => {
    const servicesData = async () => {
      try {
        const response = await axios.post(NURSING_SERVICES_DETAIL_API, {
          service_id: subserviceId,
        });
        if (isSubservice) {
          const serviceResponse = await axios.post(SERVICES_API, {
            id: serviceId,
          });
          const tabData = serviceResponse?.data?.DATA?.subservices?.map(
            (item, index) => ({
              ...item,
              isActive: index === 0,
            })
          );
          setTabImage(tabData || []);
          console.log("response-service", serviceResponse.data);
        }
        console.log("response-service>>>>>>>>", response.data);
        const data = response.data.DATA;
        setSliderimage(
          data.find((item) => item.block_name === "slider")?.slider?.image || []
        );
        setFacilities(
          data.find((item) => item.block_name === "facilities")?.facilities ||
            []
        );
        setSupport(
          data.find((item) => item.block_name === "support")?.support || []
        );
        setStep(data.find((item) => item.block_name === "steps")?.steps || []);
        setServices(
          data.find((item) => item.block_name === "services")?.services || []
        );
        setPoints(
          data.find((item) => item.block_name === "points")?.points || []
        );
        setPlan(data.find((item) => item.block_name === "plan")?.plan || []);
        setInfo(data.find((item) => item.block_name === "info")?.info || []);
        setMode(data.find((item) => item.block_name === "mode")?.mode || []);
        setfaq(data.find((item) => item.block_name === "faq")?.faq || []);
        setVendors(data.find((item)=> item.block_name === "vendors")?.vendors || []);
        setAdstep(
          data.find((item) => item.block_name === "adsteps")?.adsteps || []
        );
        setThreestep(
          data.find((item) => item.block_name === "threesteps")?.threesteps ||
            []
        );

        if (response.data.DATA[2]?.support?.childes.length > 0) {
          const firstTab = response.data.DATA[2].support.childes[0];
          setCurrentTab(firstTab.title);
          setCurrentServiceId(firstTab.id);
        }
      } catch (err) {
        console.log("error fetching the data", err);
      } finally {
        setLoading(false);
      }
    };
    servicesData();
  }, [subserviceId]);

  if (loading) {
    return <Loader />;
  }

  const handleTabClick = async (title, subserviceId) => {
    const updatedTabs = tabimage.map((tab) => ({
      ...tab,
      isActive: tab.id === subserviceId,
    }));
    setTabImage(updatedTabs);
    setCurrentTab(title);
    setCurrentServiceId(subserviceId);
    try {
      const response = await axios.post(NURSING_SERVICES_DETAIL_API, {
        service_id: subserviceId,
      });
      console.log("response------", response.data);
      const data = response.data.DATA;
      setSliderimage(
        data.find((item) => item.block_name === "slider")?.slider?.image || []
      );
      setFacilities(
        data.find((item) => item.block_name === "facilities")?.facilities || []
      );
      setSupport(
        data.find((item) => item.block_name === "support")?.support || []
      );
      setStep(data.find((item) => item.block_name === "steps")?.steps || []);
      setServices(
        data.find((item) => item.block_name === "services")?.services || []
      );
      setPoints(
        data.find((item) => item.block_name === "points")?.points || []
      );
      setPlan(data.find((item) => item.block_name === "plan")?.plan || []);
      setInfo(data.find((item) => item.block_name === "info")?.info || []);
      setMode(data.find((item) => item.block_name === "mode")?.mode || []);
      setfaq(data.find((item) => item.block_name === "faq")?.faq || []);
      setVendors(data.find((item)=> item.block_name === "vendors")?.vendors || []);
      setAdstep(
        data.find((item) => item.block_name === "adsteps")?.adsteps || []
      );
      setThreestep(
        data.find((item) => item.block_name === "threesteps")?.threesteps || []
      );
      setServiceName(response?.data?.service_name);
    } catch (error) {
      console.error("Error fetching service details", error);
    }
  };
  const isDataAvailable =
    sliderimage.length > 0 ||
    facilities.length > 0 ||
    support.length > 0 ||
    steps.length > 0 ||
    services.length > 0 ||
    points.length > 0 ||
    plan.length > 0 ||
    info.length > 0 ||
    mode.length > 0 ||
    faq.length > 0 ||
    vendors.length > 0 ||
    threestep.length > 0 ||
    adsteps.length > 0;

  return (
    <>
      {!isDataAvailable ? (
        <div className="coming-soon-message">
          <div className="gif-container text-center">
            <img
              src={comingsoongifimg}
              alt="Coming Soon GIF"
              className="coming-soon-gif"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="nursing-service-page">
            <Breadcrumb
              breadcrumbTitle={serviceNamebreadcrumb}
              breadcrumbNav={[{ navText: "Home", path: "/" }]}
            />
            {sliderimage && sliderimage?.status !== "inactive" && (
              <HeroHomeAttendant sliderimage={sliderimage} />
            )}
            {isSubservice  && (
              <div className="relition-set-position">
                <div className="emergency-care-card-wrapper">
                  <Container>
                    <div className="tab-container">
                      <Nav variant="pills" className="history-tab">
                        {tabimage.map((tab) => (
                          <Nav.Item
                            className={`tab-item ${
                              tab.isActive ? "active" : ""
                            }`}
                            key={tab.id}
                            onClick={() => handleTabClick(tab.title, tab.id)}
                          >
                            <Nav.Link className="tab-link" eventKey={tab.title}>
                              <div className="tab-content">
                                <img
                                  className="tab-image"
                                  src={tab.service_image}
                                  alt={tab.title}
                                />
                                <div className="tab-text ms-3">
                                  {tab.service_name}
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                    </div>
                  </Container>
                </div>
              </div>
            )}
            {facilities && facilities?.status !== "inactive" && (
              <BookingAppointment facilities={facilities} />
            )}
            {mode && mode?.status !== "inactive" && (
              <BookingAppointmentPhysiotherapy mode={mode} facilities={facilities}/>
            )}
            {support &&
              support?.title === "Consistent & Positive Outcomes" &&
              support?.status !== "inactive" && (
                <ServicePlan1 support={support} />
              )}
            {adsteps && adsteps?.status !== "inactive" && (
              <PhysicalTherapy
                steps={adsteps}
                imageRightSide={imageRightSide}
                wrapperBgColor={"#D8E7FF"}
              />
            )}

            {/* {support?.status !== "inactive" &&(
              <TTHCServicePhysiotherapy tthcService={support} />
            )} */}
            {support && support?.status !== "inactive" && (
              <Dataimage physicaltherapystep={support} />
            )}
            {serviceName === "Trachestomy Care" && (
              <p className="fs-5 fw-semibold sky-background-color text-center py-4 m-0">
                TTHC Tracheostomy Care at Home?
              </p>
            )}
            {steps && steps?.status !== "inactive" && (
              <WatchVideo step={steps} />
            )}
            {/* {info?.status !== "inactive" && <Description info={info} />} */}

            {services && services?.status !== "inactive" && (
              <TTHCService services={services} />
            )}
            {threestep && threestep?.status !== "inactive" && (
              <BookingPhysiotherapy threestep={threestep} />
            )}
            {/* {services?.status !== "inactive" && (
            <Expect services={services} />
          )} */}
            {points && points?.status !== "inactive" && (
              <LikeHome points={points} />
            )}
            {vendors?.status !== "inactive" && <VendorService vendors={vendors} />}
            {/* <ServiceProvider /> */}
            {/* <MedicalStaff /> */}
            {plan?.status !== "inactive" && <CaregiverPaln plan={plan} />}
            {info?.status !== "inactive" && <Description info={info} />}
            {/* {support?.length > 0 && <ServiceProvider threeimage={support} />} */}
            {faq?.status !== "inactive" && <QuestionHomeAttendent faq={faq} />}
            {/* {vendors?.status !== "inactive" && <VendorService vendors={vendors} />} */}

            <Mobile />
          </div>
        </>
      )}
    </>
  );
};

export default NursingServicePage;
