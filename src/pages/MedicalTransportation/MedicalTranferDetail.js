import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Mobile from "../../component/mobile/mobile";
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Breadcrumb from '../../component/breadcrumb/breadcrumb';
import { FaLocationCrosshairs, FaMoneyBill } from "react-icons/fa6";
import { FaArrowRight} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import nursingservice1 from '../../assets/nursingservice1.png'
import medicalservice1 from "../../assets/medicalservice1.png";
import medicalservice2 from "../../assets/medicalservice2.png";
import medicalservice3 from "../../assets/medicalservice3.png";
import medicalservice4 from "../../assets/medicalservice4.png";
import medicalservice5 from "../../assets/medicalservice5.png";
import medicalservice6 from "../../assets/medicalservice6.png";
import MedicalDetailModel from "./medicaldetailmodel";


const MedicalTranferDetail = () => {

    const hospitalsData = [
        {
            id: 1,
            image: medicalservice6,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 80",
            address: "Surat, Gujarat"
        },
        {
            id: 2,
            image: medicalservice2,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 80",
            address: "Surat, Gujarat"
        },
        {
            id: 3,
            image: medicalservice5,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 80",
            address: "Surat, Gujarat"
        },
        {
            id: 4,
            image: medicalservice4,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 80",
            address: "Surat, Gujarat"
        },
        {
            id: 5,
            image: medicalservice6,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 80",
            address: "Surat, Gujarat"
        },
        {
            id: 6,
            image: medicalservice3,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 800",
            address: "Surat, Gujarat"
        },
        {
            id: 7,
            image: medicalservice2,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 80",
            address: "Surat, Gujarat"
        },
        {
            id: 8,
            image: medicalservice4,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 80",
            address: "Surat, Gujarat"
        },
        {
            id: 5,
            image: medicalservice6,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 80",
            address: "Surat, Gujarat"
        },
        {
            id: 6,
            image: medicalservice3,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 800",
            address: "Surat, Gujarat"
        },
        {
            id: 7,
            image: medicalservice2,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 80",
            address: "Surat, Gujarat"
        },
        {
            id: 8,
            image: medicalservice4,
            name: "Shree Kruppa Ambulance Service",
            specialists: "Full AC, Emergency Kit, Oxygen Cylinder",
            price: "₹ 80",
            address: "Surat, Gujarat"
        },
    ];
    const [dropdownMenuWidth, setDropdownMenuWidth] = useState('');

    const filters = [
        { label: 'Locality', options: ['Udhna', 'Mahuva', 'Varachha', 'Amroli', 'Tadwadi', 'Katargam', 'Ghod Dod Road'] },
        { label: 'Availability', options: ['12 hours', '10 hours'] },
        { label: 'Price', options: ['₹0 to ₹500', '₹500 to ₹700', '₹700 to ₹1000', '₹1000+'] },
        { label: 'Gender', options: ['Any Gender', 'Male', 'Female'] },
        { label: 'Qualification', options: ['(10th) ', '(12th) ', 'Graduate'] },
        { label: 'Experience', options: ['Fresher', '1 Year', '2 Year’s', '3-5 Year’s', '5-10 Year’s'] },
        { label: 'Select Services', options: ['Home Attendant', 'Medical Attendant', 'ICU Care at Hone', 'Physiotherapy', 'Emergency Nursing Care'] }
    ];
    useEffect(() => {
        const width = dropdownMenuWidthHandler();
        setDropdownMenuWidth(width);
    }, [filters]);

    const dropdownMenuWidthHandler = () => {
        switch (filters.label) {
            case 'Locality':
                return '400px';
            default:
                return '300px';
        }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
         <div style={{ backgroundColor: '#F9F9F9' }}>
                <Container className="nurselist mb-5" >
                    <Row style={{ rowGap: "10px" }} className="pt-4">
                        <Col lg={2} md={12}>
                            <Form.Control type="text" className="w-100 border p-2" placeholder="Enter city" />
                        </Col>
                        <Col lg={3} md={12}>
                            <div className="row border rounded-2 p-1 mx-0"style={{ backgroundColor: '#FFFFFF' }}>
                                <div className="col-md-12" style={{ borderRadius: "90px" }}>
                                    <div className='row'>
                                        <div className='col-6 p-0'>
                                            <input type="text" className="border-0 w-100" placeholder="Enter locality" />
                                        </div>
                                        <div className='col-6 text-end'>
                                            <span className="left-pan fs-5"> <FaLocationCrosshairs style={{ color: "#6C6A6A" }} /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} md={12} py={2}>
                            <Form.Control type="text" className="w-100 border p-2" placeholder="Specialty/Symptom/Treatment/Doctors/Clinic" style={{ backgroundColor: '#FFFFFF' }}/>
                        </Col>
                        <Col lg={2} md={12} py={2} >
                            <Button variant="primary" className="w-100 p-2">
                                Search
                            </Button>
                        </Col>
                    </Row>
                    <Breadcrumb breadcrumbTitle="Medical Transportation"
                        breadcrumbNav={[
                            {
                                navText: "Home",
                                path: "/",
                            }
                        ]} />
                    <Row className="mt-5 shadow p-4 mb-5">
                        <Col lg={2} className="d-flex justify-content-center">
                            <div className="d-flex align-items-center" style={{ backgroundColor: "#D8E7FF", borderRadius: "50%", width: "130px", height: "130px" }}>
                                <img src={nursingservice1} width={"120px"} height={"100px"} />
                            </div>
                        </Col>
                        <Col lg={10}>
                            <div>
                                <p className="fw-bolder fs-4 ms-3">Apple Hospitals and Research Institute LTD</p>
                                <p className="text-primary"><CiLocationOn className="fs-5 me-2" />525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320</p>
                                <p className="ms-3" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit egestas id gravida. Libero convallis diam vulputate et volutpat risus amet dolor. Blandit urna sagittis, nibh at vitae nunc. Magnis fringilla of bibendum dictumst lorem non placerat eu et velit. In diam imperdiet imperdiet seeed tortor main suspendisse. Magnis fringilla of bibendum dictumst lorem non placerat eu et velit. In diam imperdiet imperdiet seeed tortor main suspendisse.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} lg={8} md={6} sm={6} xs={12}>
                            <Row className="g-3">
                                {hospitalsData.map((hospital) => (
                                    <Col key={hospital.id} xl={3} lg={6} md={12} sm={12}>
                                        <Card style={{ width: '100%', height: "auto" }} className="rounded-3">
                                            <Card.Img variant="top" src={hospital.image} style={{ height: "200px" ,objectFit:"cover" }} />
                                            <Card.Body>
                                                <Card.Title className="fw-bolder" >{hospital.name}</Card.Title>
                                                <div className="d-flex">
                                                    <Card.Subtitle className="mb-2 text-primary" style={{ fontSize: "14px" }}>{hospital.specialists}</Card.Subtitle >
                                                </div>
                                                <div className="d-flex mt-1">
                                                    <FaMoneyBill className="fs-5 me-3" />
                                                    <Card.Text style={{ fontSize: "12px" }}>
                                                        <span className="fw-bolder">{hospital.price}</span>(Per km)
                                                    </Card.Text>
                                                </div>
                                                <div className="d-flex mt-1">
                                                    <CiLocationOn className="fs-5 me-3" />
                                                    <Card.Text style={{ fontSize: "12px" }}   >
                                                        {hospital.address}
                                                    </Card.Text>
                                                </div>
                                                <button className="btn btn-primary w-100 border mt-3" style={{ fontSize: "13px" }} onClick={handleShow}>Book Now</button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center mt-5">
                        <Button className="btn btn-dark rounded-0 px-3">
                            View More <FaArrowRight />
                        </Button>
                    </div>
                </Container >
                <Mobile />
            </div>
            <MedicalDetailModel show={show} handleClose={handleClose}/>
        </>
    )
}
export default MedicalTranferDetail;