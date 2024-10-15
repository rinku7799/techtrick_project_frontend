import React, { useState } from 'react';
import Mobile from "../../component/mobile/mobile";
import { Link } from 'react-router-dom';
import { Button, Card, Col, Form, InputGroup, Row, Dropdown } from 'react-bootstrap';
import Breadcrumb from '../../component/breadcrumb/breadcrumb';
import nursingservice1 from '../../assets/nursingservice1.png'
import nursingservice2 from '../../assets/nursingservice2.png'
import nursingservice3 from '../../assets/nursingservice3.png'
import { CiLocationOn } from "react-icons/ci";
import homeattend1 from '../../assets/homeattend1.png'
import homeattend2 from '../../assets/homeattend2.png'
import { FaArrowRight, FaSearch, FaUserNurse } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import './homeattend.css';
import { FaAngleDown } from "react-icons/fa6";

const VendorList = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCategories(prevSelected => [...prevSelected, value]);
        } else {
            setSelectedCategories(prevSelected =>
                prevSelected.filter(category => category !== value)
            );
        }
    };
    const nursingServices = [
        {
            image: nursingservice1,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
        {
            image: nursingservice2,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
        {
            image: nursingservice3,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
        {
            image: nursingservice3,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
        {
            image: homeattend1,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
        {
            image: homeattend2,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
        {
            image: nursingservice3,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
        {
            image: nursingservice3,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
        {
            image: nursingservice1,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
        {
            image: nursingservice2,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
        {
            image: homeattend2,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
        {
            image: homeattend1,
            name: "Apple Hospitals and Research Institute LTD",
            address: "525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320"
        },
    ];
    const filters = [
        { label: 'Locality', options: ['Udhna', 'Mahuva', 'Varachha', 'Amroli', 'Tadwadi', 'Katargam', 'Ghod Dod Road'] },
        { label: 'Availability', options: ['12 hours', '10 hours'] },
        { label: 'Select Services', options: ['Udhna', 'Mahuva'] }
    ];

    return (
        <>
         <div style={{ backgroundColor: '#F9F9F9' }}>
            <div className="container mb-5 homeattend">
                <Row style={{rowGap:"10px"}} className='pt-4'>
                    <Col lg={2} md={12}>
                        <Form.Control type="text" className="w-100 border p-2" placeholder="Enter city" />
                    </Col>
                    <Col lg={3} md={12} >
                        <div className="row border rounded-2 p-1 mx-0"style={{ backgroundColor: '#FFFFFF' }}>
                            <div className="col-md-12" style={{ borderRadius: "90px" }}>
                                <div className='row'>
                                    <div className='col-6 p-0'>
                                        <input type="text" className="border-0 w-100" placeholder="Enter locality"  />
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
                <Breadcrumb breadcrumbTitle="Home Attend"
                    breadcrumbNav={[
                        {
                            navText: "Home",
                            path: "/",
                        },
                    ]} />

                <div className='mt-5'>
                    <div className='fw-bold fs-5'>40+ Home Attend</div>
                    <div className='p-3 mt-2' style={{ backgroundColor: "#EDEDED" }}>
                        <Row>
                            <Col className="col-8">
                                <IoFilter /> Filter
                            </Col>
                            <Col className="col-4 borderleft" style={{ borderLeft: '2px solid #BCBCBC' }}>
                                <FaUserNurse /> Services
                            </Col>
                        </Row>
                        <Row>
                            {filters.map((filter, index) => (
                                <Col lg={4} md={6} className="service" key={index} style={{ borderLeft: filter.label === 'Select Services' ? '2px solid #BCBCBC' : 'none' }}>
                                    <Dropdown className="rounded-2 d-flex justify-content-between align-items-center" style={{ backgroundColor: "white" }}>
                                        <span className='ps-2'>{filter.label}</span>
                                        <Dropdown.Toggle as={Button} variant="light" style={{ backgroundColor: "white" }}>
                                            <FaAngleDown style={{ color: "#6C6A6A" }} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="w-100 p-3">
                                            {filter.label === 'Locality' && (
                                                <InputGroup className="w-100 border rounded-2" style={{ backgroundColor: '#F1F1F1' }}>
                                                    <Button className="border-0" style={{ borderRight: 'none', backgroundColor: '#F1F1F1' }}>
                                                        <FaSearch className='text-dark' />
                                                    </Button>
                                                    <Form.Control type="text" className="border-0 p-" placeholder="Search locality" style={{ borderLeft: 'none', backgroundColor: '#F1F1F1' }} />
                                                </InputGroup>
                                            )}
                                            <div className="checkboxes" id="Categories">
                                                <div className="inner-wrap dropdown-item">
                                                    {filter.options.map((option, index) => (
                                                        <Form.Check
                                                            type="checkbox"
                                                            value={option}
                                                            className="ckkBox val"
                                                            defaultChecked={index === 0}
                                                            onChange={handleCheckboxChange}
                                                            label={option}
                                                            key={index}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <Row className="mt-2">
                                                <Col>
                                                    <Button className="btn border btn-light w-100">Clear All</Button>
                                                </Col>
                                                <Col>
                                                    <Button className="btn btn-primary w-100">Apply</Button>
                                                </Col>
                                            </Row>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            ))}
                        </Row>

                    </div>
                </div>
                <div className="mt-3">
                    <Row className="row-cols-1 row-cols-lg-3">
                        {nursingServices.map((service, index) => (
                            <Col key={index} lg={4} md={6} sm={12} className="p-2">
                                <Card className="w-100 border rounded-2" style={{ height: '18.9rem', margin: '0px 0px' }}>
                                    <Card.Img src={service.image} className="card-img-top w-100" style={{ backgroundColor: '#D8E7FF', height: '140px' }} />
                                    <Card.Body >
                                        <Card.Text className="card-text fw-bolder m-0" style={{ fontSize: '14px' }}>
                                            {service.name}
                                        </Card.Text>
                                        <div className="d-flex">
                                            <CiLocationOn className="fs-2 mt-1" />
                                            <p className="mt-2" style={{ fontSize: '12px', marginLeft: '10px' }}>
                                                {service.address}
                                            </p>
                                        </div>
                                        <Link to="/nurselist">
                                            <Button className="btn w-100 border-black btn-light">View</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <Button className="btn btn-dark rounded-0 px-3">
                        View More <FaArrowRight />
                    </Button>
                </div>
            </div>
            <Mobile />
            </div>
        </>
    )
}
export default VendorList;
