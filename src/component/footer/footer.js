import React from 'react';
import './footer.css'
import techtricks from '../../assets/techtricks.png'
import { FaFacebookF, FaLinkedinIn, FaCameraRetro } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='border'>
            <footer>
            <div className='border-bottom'>
                <div className='container'>
                    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-4" style={{ columnGap: "50px" }}>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <a href="#" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                                <img src={techtricks} width={"113px"} className="img-fluid" alt="Techtricks logo" />
                            </a>
                            <p className="text-wrap text-muted">When an unknown printer took a galley of type aawer between of awtnd scrambled it to make a type specimen book.</p>

                            <p className='fw-semibold'>Follow Us On: <FaFacebookF className='ms-1 fs-5'/><FaXTwitter className='ms-2 fs-5' /><FaLinkedinIn className='ms-2 fs-5' /><FaCameraRetro className='ms-2 fs-5' /></p>

                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5 py-3">
                            <h5>Quick Links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Explore Services</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Become a Vendor</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2  col-md-3 col-sm-5 py-3">
                            <h5>Categories</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Nursing Services</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Hospital Appointments</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Medicine Delivery</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Path lab Test</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Medical Transportation</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Medical Equipment</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-5 py-3">
                            <h5>Company</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy Policy</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms & Conditions</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Refund Policy</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Help Desk</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Career</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Join Us</a></li>

                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
            <div>
                <div className='container d-flex justify-content-between py-3'>
                    <div>
                        <p>Copyright © 2024 Techtricks Healthcare</p>
                    </div>
                    <div className='d-flex ' style={{ columnGap: "20px" }}>
                        <p>FAQ</p>
                        <Link to="/registeruser" style={{textDecoration:"none",color:"black"}}><p>Signup</p></Link>   
                       <Link to="/login" style={{textDecoration:"none",color:"black"}}><p>Login</p></Link> 
                    </div>
                </div>
            </div>
            </footer>
        </div>
    )
}
export default Footer;
