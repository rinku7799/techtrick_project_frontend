import React from 'react';
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import Mobile from "../../component/mobile/mobile";
import favorite3 from '../../assets/favorite3.png';
import { LuDot } from "react-icons/lu";
import nursingservice1 from '../../assets/nursingservice1.png';
import nursingservice2 from '../../assets/nursingservice2.png';
import nursingservice3 from '../../assets/nursingservice3.png';
import './Appointments.css';
import Breadcrumb from '../../component/breadcrumb/breadcrumb';
import { FaGreaterThan } from "react-icons/fa";

const appointmentsData = [
    {
        id: 1,
        serviceImage: nursingservice3,
        name: 'Dr. Frances Sutton',
        specialty: 'Nursing Specialists',
        experience: '12 Years Exp.',
        bookingDate: '12/08/2023',
        vendorName: 'Medical Heath Care Servise',
        bookingId: '589623014059748',
        disease: 'Tuberculosis (TB)',
        price: '₹ 800',
        address: '525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320',
        status: 'Pending'
    },
    {
        id: 2,
        serviceImage: nursingservice2,
        name: 'Dr. Frances Sutton',
        specialty: 'Nursing Specialists',
        experience: '12 Years Exp.',
        bookingDate: '12/08/2023',
        vendorName: 'Medical Heath Care Servise',
        bookingId: '589623014059748',
        disease: 'Tuberculosis (TB)',
        price: '₹ 800',
        address: '525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320',
        status: 'Pending'
    },
    {
        id: 3,
        serviceImage: nursingservice1,
        name: 'Dr. Frances Sutton',
        specialty: 'Nursing Specialists',
        experience: '12 Years Exp.',
        bookingDate: '12/08/2023',
        vendorName: 'Medical Heath Care Servise',
        bookingId: '589623014059748',
        disease: 'Tuberculosis (TB)',
        price: '₹ 800',
        address: '525/E, Vyapari Peth, E Ward, Shahupuri, Kolhapur, Maharashtra -695320',
        status: 'Pending'
    },
    // Add more appointment objects here if needed
];

const Appointments = () => {
    return (
        <>
            <Breadcrumb breadcrumbTitle="Appointments"
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/",
                    },
                ]} />
            <div className="container pt-3 mb-5">
                {appointmentsData.map(appointment => (
                    <div key={appointment.id} className="card mt-5 mb-5 p-3" style={{ backgroundColor: "#F8F8F8" }}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card text-white mb-3 d-flex sky-background-color" style={{ height: '100%'}}>
                                    <div className="card-body d-flex justify-content-center align-items-center">
                                        <img src={appointment.serviceImage} className="img-fluid card-body-image" alt="Service" />

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="card-title d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div>
                                                <img src={favorite3} className="img-fluid" width={"70px"} height={"70px"} style={{ borderRadius: "50%" }} />
                                            </div>
                                            <div className='ms-3'>
                                                <span className='fw-bolder' style={{ fontSize: "20px" }}>{appointment.name}</span>
                                                <p className='primary-color'>{appointment.specialty} <LuDot className="primary-color dot" style={{ fontSize: "25px" }} /> {appointment.experience}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn border border-dark px-4" style={{ borderRadius: "40px" }}>Cancel</button>
                                        </div>
                                    </div>
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td scope="row">Booking Date:</td>
                                                <td>{appointment.bookingDate}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Vendor Name:</td>
                                                <td>{appointment.vendorName}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Booking Id:</td>
                                                <td>{appointment.bookingId}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Disease:</td>
                                                <td>{appointment.disease}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Price:</td>
                                                <td>{appointment.price}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Address:</td>
                                                <td>{appointment.address}</td>
                                            </tr>
                                            <tr>
                                                <td scope="row">Status:</td>
                                                <td>
                                                    <button className="btn border px-5 rounded-5 border-0" style={{ color: "#FF9F2E", backgroundColor: "#FFF1DC" }}>
                                                        {appointment.status}
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
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
            </div>

            <Mobile />
        </>
    )
}

export default Appointments;
