import Mobile from "../../component/mobile/mobile";
import { Card, Container, Row, Col } from "react-bootstrap";
import { PiGraduationCap, PiRows } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { FaMoneyBill, FaHeart } from "react-icons/fa6";
import './favorite.css';
import { FaGreaterThan } from "react-icons/fa";
import favorite1 from '../../assets/favorite1.png'
import favorite2 from '../../assets/favorite2.png'
import favorite3 from '../../assets/favorite3.png'
import favorite4 from '../../assets/favorite4.png'
import { LuDot } from "react-icons/lu";
import { useState } from "react";
import Breadcrumb from '../../component/breadcrumb/breadcrumb';

const Favorite = () => {
    const [likedHospitals, setLikedHospitals] = useState([]);

    const toggleLike = (index) => {
        if (likedHospitals.includes(index)) {
            setLikedHospitals(likedHospitals.filter((item) => item !== index));
        } else {
            setLikedHospitals([...likedHospitals, index]);
        }
    };

    const hospitalsData = [
        {
            id: 1,
            image: favorite1,
            name: "Dr. Frances Sutton",
            specialists: "Nursing Specialists",
            yearsExp: 12,
            degree: "MBBS, DM, DNB (Cardiology).",
            price: "₹ 800",
            address: "Nidaan Hospital , Sector-1 , Gurgaon"
        },
        {
            id: 2,
            image: favorite2,
            name: "Dr. Frances Sutton",
            specialists: "Nursing Specialists",
            yearsExp: 12,
            degree: "MBBS, DM, DNB (Cardiology).",
            price: "₹ 800",
            address: "Nidaan Hospital , Sector-1 , Gurgaon"
        },
        {
            id: 3,
            image: favorite3,
            name: "Dr. Frances Sutton",
            specialists: "Nursing Specialists",
            yearsExp: 12,
            degree: "MBBS, DM, DNB (Cardiology).",
            price: "₹ 800",
            address: "Nidaan Hospital , Sector-1 , Gurgaon"
        },
        {
            id: 4,
            image: favorite4,
            name: "Dr. Frances Sutton",
            specialists: "Nursing Specialists",
            yearsExp: 12,
            degree: "MBBS, DM, DNB (Cardiology).",
            price: "₹ 800",
            address: "Nidaan Hospital , Sector-1 , Gurgaon"
        },
        {
            id: 5,
            image: favorite2,
            name: "Dr. Frances Sutton",
            specialists: "Nursing Specialists",
            yearsExp: 12,
            degree: "MBBS, DM, DNB (Cardiology).",
            price: "₹ 800",
            address: "Nidaan Hospital , Sector-1 , Gurgaon"
        },
        {
            id: 6,
            image: favorite4,
            name: "Dr. Frances Sutton",
            specialists: "Nursing Specialists",
            yearsExp: 12,
            degree: "MBBS, DM, DNB (Cardiology).",
            price: "₹ 800",
            address: "Nidaan Hospital , Sector-1 , Gurgaon"
        },
        {
            id: 7,
            image: favorite1,
            name: "Dr. Frances Sutton",
            specialists: "Nursing Specialists",
            yearsExp: 12,
            degree: "MBBS, DM, DNB (Cardiology).",
            price: "₹ 800",
            address: "Nidaan Hospital , Sector-1 , Gurgaon"
        },
        {
            id: 8,
            image: favorite3,
            name: "Dr. Frances Sutton",
            specialists: "Nursing Specialists",
            yearsExp: 12,
            degree: "MBBS, DM, DNB (Cardiology).",
            price: "₹ 800",
            address: "Nidaan Hospital , Sector-1 , Gurgaon"
        },
    ];

    return (
        <>
            <Breadcrumb breadcrumbTitle="My Favorites"
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/",
                    },
                ]} />
            <Container className="mt-5 mb-5 favorite">
                <Row className="g-4 w-100 mt-5">
                    {hospitalsData.map((hospital) => (
                        <Col key={hospital.id} lg={3} md={6} sm={6} xs={12}>
                            <Card style={{ width: '100%', height: "auto" }}>
                               <div className="position-absolute top-0 end-0 mt-2 me-2" onClick={() => toggleLike(hospital.id)} style={{ border:"1px solid #D7D7D7", backgroundColor: "white" ,width:"30px",height:"30px" ,borderRadius:"5px" }}>
                                <FaHeart style={{ fontSize: "17px", color: likedHospitals.includes(hospital.id) ? "#D7D7D7" : "red", zIndex: 1 ,marginLeft:"6px"}}/>
                            </div>
                                <Card.Img variant="top" src={hospital.image} style={{ height: "220px" }} />
                                <Card.Body>
                                    <Card.Title className="fw-bolder" >{hospital.name}</Card.Title>
                                    <div className="d-flex">
                                        <Card.Subtitle className="mb-2 primary-color" style={{ fontSize: "14px" }}>{hospital.specialists}</Card.Subtitle >
                                        <LuDot className="primary-color" style={{ fontSize: "15px" }} />
                                        <Card.Subtitle className="mb-2 primary-color" style={{ fontSize: "14px" }}>{hospital.yearsExp} Years Exp.</Card.Subtitle>
                                    </div>
                                    <div className="d-flex mt-1">
                                        <PiGraduationCap className="fs-5 me-3" />
                                        <Card.Text style={{ fontSize: "12px" }}>
                                            {hospital.degree}
                                        </Card.Text>
                                    </div>

                                    <div className="d-flex mt-1">
                                        <FaMoneyBill className="fs-5 me-3" />
                                        <Card.Text style={{ fontSize: "12px" }}>
                                            <span className="fw-bolder">{hospital.price}</span>at clinic
                                        </Card.Text>
                                    </div>
                                    <div className="d-flex mt-1">
                                        <CiLocationOn className="fs-5 me-3" />
                                        <Card.Text style={{ fontSize: "12px" }}   >
                                            {hospital.address}
                                        </Card.Text>
                                    </div>
                                    <button className="btn w-100 border my-2" style={{ fontSize: "13px" }}  >View</button>
                                    <button className="btn btn-primary w-100 border" style={{ fontSize: "13px" }}>Book Appointment</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="mt-5">
                    <nav data-pagination>
                        <a href="#" disabled><i className="ion-chevron-left" /></a>
                        <ul>
                            <li className="current"><a href="#1" className="text-white">1</a></li>
                            <li><a href="#2">2</a></li>
                            <li><a href="#3">3</a></li>
                            <li><a href="#4">4</a></li>
                            <li><a href="#10">…</a></li>
                            <li><a href="#25">25</a></li>
                        </ul>
                        <a href="#2"><div className="btn border border-black rounded-0">Next<FaGreaterThan className="ms-2" /></div></a>
                    </nav>
                </div>

            </Container>
            <Mobile />
        </>
    )
}
export default Favorite;
