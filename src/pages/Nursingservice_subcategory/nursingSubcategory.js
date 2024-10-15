import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { SERVICES_API } from "../../config/constant";
import Breadcrumb from "../../component/breadcrumb/breadcrumb";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./nursingSubcategory.css";
import Mobile from "../../component/mobile/mobile";
import expect1 from "../../assets/expect1.png";
import expect2 from "../../assets/expect2.png";
import expect3 from "../../assets/expect3.png";
import expect4 from "../../assets/expect4.png";
import expect5 from "../../assets/expect5.png";
import expect6 from "../../assets/expect6.png";
import nursingSubcategorylast from "../../assets/nursingSubcategorylast.png";
import { useNavigate } from "react-router-dom";
import Loader from "../../component/loader/loader";
import comingsoongifimg from "../../assets/source.gif";

const NursingServiceSubcategory = () => {
  const { id: paramId } = useParams();
  const location = useLocation();
  const { serviceName, id: stateId } = location.state || {};
  const [servicedata, setservicedata] = useState([]);
  const [filteredSubservices, setFilteredSubservices] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = stateId || paramId;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(SERVICES_API);
        console.log("subdataaaaa", response.data);
        setservicedata(response.data.DATA.service_name);
        const selectedService = response.data.DATA.find(
          (service) => service.id === parseInt(id)
        );
        if (selectedService) {
          setFilteredSubservices(selectedService.subservices);
        }
        setLoading(false);
      } catch (err) {
        console.log("Error fetching the data", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    console.log("id", card);

    const serviceName = card.service_name.toLowerCase().replace(/\s+/g, "");
    // const subserviceId = card.id;
    // navigate(`/nursingservice/${serviceName}`, { state: { subserviceId } });

    const serviceNamebreadcrumb = card.service_name;
    const serviceId = card.id;
    const subserviceId =
      card.subsubservices.length != 0 ? card?.subsubservices[0]?.id : card.id;
    const isSubservice = card.subsubservices.length != 0 ? true : false;
    console.log("serviceName", card);
    navigate(`/nursingservice/${serviceName}`, {
      state: { serviceNamebreadcrumb, subserviceId, serviceId, isSubservice },
    });
  };

  // const handleCardClick = (card) => {
  //   console.log("card", card);

  //   const serviceName = card.service_name
  //     .toLowerCase()
  //     .replace(/\s+/g, "");
  //   const subserviceId = card.id;
  //   const serviceNamebreadcrumb = card.service_name;

  //   const servicesWithoutData = [
  //     "Medical Staffing Services",
  //     "Nursing Help Desk",
  //     "RPO & Manpower Service",
  //     "Facility Management Service",
  //     "Medical Equipment"
  //   ];
  //   if (servicesWithoutData.includes(card.service_name)) {
  //     navigate(`/${serviceName}`);
  //   } else {
  //     navigate(`/nursingservice/${serviceName}`, {
  //       state: {serviceNamebreadcrumb, subserviceId },
  //     });
  //   }
  // };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb
        breadcrumbTitle={serviceName}
        breadcrumbNav={[{ navText: "Home", path: "/" }]}
      />
      <div className="container nursingSubcategory mt-5">
        <div className="mt-3">
          <p className="text-center fw-bolder text-1">
            Compassionate nursing services provided at home by a licensed
            professional
          </p>
        </div>
        <div className="row card-container mt-5 justify-content-center">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <Skeleton height={300} />
              </div>
            ))
          ) : filteredSubservices.length === 0 ? (
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
            filteredSubservices.map((card, index) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                key={index}
                onClick={() => handleCardClick(card)}
              >
                <div className="card">
                  <img
                    src={card.service_image}
                    className="card-img"
                    alt={card.service_name}
                  />
                  <div className="line">
                    <img
                      src={card.logo}
                      className="inner-img border border-light p-3 rounded-circle border-3"
                      alt={card.service_name}
                    />
                    <p className="text-center inner-text">
                      {card.service_name}
                    </p>
                    <p className="inner-text1">{card.listing}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="expect mt-5 shadow p-4">
          <p className="text-center fs-2 fw-bolder">What to Expect</p>
          <div className="row mt-5">
            <div className="col-md-4 d-flex justify-content-center">
              <div className="d-flex w-75">
                <img
                  src={expect1}
                  width={"45px"}
                  height={"45px"}
                  alt="expectation"
                />
                <p className="ms-3 fs-5 fw-medium">12/24-Hour Nurse-At-Home</p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="d-flex w-75">
                <img
                  src={expect2}
                  width={"45px"}
                  height={"45px"}
                  alt="expectation"
                />
                <p className="ms-3 fs-5 fw-medium">
                  Background Checks of all Nurses
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="d-flex w-75">
                <img
                  src={expect3}
                  width={"45px"}
                  height={"45px"}
                  alt="expectation"
                />
                <p className="ms-3 fs-5 fw-medium">
                  Temperature/BP/ Sugar check
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 d-flex justify-content-center">
              <div className="d-flex w-75">
                <img
                  src={expect4}
                  width={"45px"}
                  height={"45px"}
                  alt="expectation"
                />
                <p className="ms-3 fs-5 fw-medium">Multilingual Nurses</p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="d-flex w-75">
                <img
                  src={expect5}
                  width={"45px"}
                  height={"45px"}
                  alt="expectation"
                />
                <p className="ms-3 fs-5 fw-medium">High Alert Medication</p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="d-flex w-75">
                <img
                  src={expect6}
                  width={"45px"}
                  height={"45px"}
                  alt="expectation"
                />
                <p className="ms-3 fs-5 fw-medium">
                  Repositioning Bedridden Patients
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={nursingSubcategorylast}
          className="nursingSubcategorylast"
          alt="Nursing services"
        />
      </div>
      <Mobile />
    </>
  );
};

export default NursingServiceSubcategory;
