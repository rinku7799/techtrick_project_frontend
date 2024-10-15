import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Mobile from '../../component/mobile/mobile';
import Breadcrumb from '../../component/breadcrumb/breadcrumb';
import foremployeeaplynow from '../../assets/forjobseekerApplynowpage.png';
import { useState } from "react";
import './forjobseekers.css';
import ApplyJobSeekersModel from '../../component/Modal/ApplyJobSeekersModel';
import { FaSearch } from 'react-icons/fa';

const ForemployeApplynow = () => {

    const jobData = [
        {
            id: 1,
            number: "01",
            jobRole: 'Medical Staff',
            position: 15,
            vacancy: 10,
            eligibility: "Bachelor's Degree",
            qualification: 'CMSC',
            location: 'Surat',
            salary: '25k - 60k',
            benefits: 'Competitive Pay, Flexible Work Hours, Insurance'
        },
        {
            id: 2,
            number: "02",
            jobRole: 'Medical Staff',
            position: 15,
            vacancy: 10,
            eligibility: "Bachelor's Degree",
            qualification: 'CMSC',
            location: 'Surat',
            salary: '25k - 60k',
            benefits: 'Competitive Pay, Flexible Work Hours, Insurance'
        },
        {
            id: 3,
            number: "03",
            jobRole: 'Medical Staff',
            position: 15,
            vacancy: 10,
            eligibility: "Bachelor's Degree",
            qualification: 'CMSC',
            location: 'Surat',
            salary: '25k - 60k',
            benefits: 'Competitive Pay, Flexible Work Hours, Insurance'
        },
        {
            id: 4,
            number: "04",
            jobRole: 'Medical Staff',
            position: 15,
            vacancy: 10,
            eligibility: "Bachelor's Degree",
            qualification: 'CMSC',
            location: 'Surat',
            salary: '25k - 60k',
            benefits: 'Competitive Pay, Flexible Work Hours, Insurance'
        },
        {
            id: 5,
            number: "05",
            jobRole: 'Medical Staff',
            position: 15,
            vacancy: 10,
            eligibility: "Bachelor's Degree",
            qualification: 'CMSC',
            location: 'Surat',
            salary: '25k - 60k',
            benefits: 'Competitive Pay, Flexible Work Hours, Insurance'
        },
        {
            id: 6,
            number: "06",
            jobRole: 'Medical Staff',
            position: 15,
            vacancy: 10,
            eligibility: "Bachelor's Degree",
            qualification: 'CMSC',
            location: 'Surat',
            salary: '25k - 60k',
            benefits: 'Competitive Pay, Flexible Work Hours, Insurance'
        },
        {
            id: 7,
            number: "07",
            jobRole: 'Medical Staff',
            position: 15,
            vacancy: 10,
            eligibility: "Bachelor's Degree",
            qualification: 'CMSC',
            location: 'Surat',
            salary: '25k - 60k',
            benefits: 'Competitive Pay, Flexible Work Hours, Insurance'
        },
        {
            id: 8,
            number: "08",
            jobRole: 'Medical Staff',
            position: 15,
            vacancy: 10,
            eligibility: "Bachelor's Degree",
            qualification: 'CMSC',
            location: 'Surat',
            salary: '25k - 60k',
            benefits: 'Competitive Pay, Flexible Work Hours, Insurance'
        },
        {
            id: 9,
            number: "09",
            jobRole: 'Medical Staff',
            position: 15,
            vacancy: 10,
            eligibility: "Bachelor's Degree",
            qualification: 'CMSC',
            location: 'Surat',
            salary: '25k - 60k',
            benefits: 'Competitive Pay, Flexible Work Hours, Insurance'
        },
        {
            id: 10,
            number: "10",
            jobRole: 'Medical Staff',
            position: 15,
            vacancy: 10,
            eligibility: "Bachelor's Degree",
            qualification: 'CMSC',
            location: 'Surat',
            salary: '25k - 60k',
            benefits: 'Competitive Pay, Flexible Work Hours, Insurance'
        },
    ];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div style={{ backgroundColor: "#F9F9F9" }}>
                <Container className="forjobseekersapplynow">
                    <Breadcrumb
                        breadcrumbTitle="For Job Seekers"
                        breadcrumbNav={[
                            { navText: "Home", path: "/" },
                            { navText: "Hospital Staffing Services", path: "/hospitalstaffservice" },
                            { navText: "Medical Staffing Services", path: "/medicalstaffingservices" },
                            { navText: "Certified Nursing Assistant", path: "/certifiednursingassistant" },
                        ]}
                    />
                </Container>
                <div style={{ backgroundColor: "#E2EEFD" }} className="w-100">
                    <Container>
                        <Row>
                            <Col lg={6} style={{ marginTop: "100px" }}>
                                <Row>
                                    <Col lg={9}>
                                        <p className="fs-4 fw-bolder">Find Jobs, Employment and Career Opportunities</p>
                                        <div className="input-group">
                                            <input type="text" className="form-control p-3 ps-4 border location" aria-label="Recipient's username" aria-describedby="basic-addon2" placeholder="Job title or keywords" style={{ borderRadius: "30px 0 0 30px", borderRight: "none" }} />
                                            <span className="input-group-text w-25 justify-content-end" id="basic-addon2" style={{ borderRadius: "0 30px 30px 0", borderLeft: "none", backgroundColor: "white", padding: "5px 5px" }}><div className="border p-2 rounded-circle bg-primary" style={{ width: "47px", height: "47px" }}><FaSearch style={{ fontSize: "25px" }} className="text-white" /></div></span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} style={{ marginTop: "100px" }} className="applynow d-flex justify-content-end">
                                <img  src={foremployeeaplynow} width={"400px"} alt="Apply Now" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className='mt-5'>
                    <div className="table-responsive">
                        <Table bordered className='text-center'>
                            <thead className='thead-secondary'>
                                <tr>
                                    <th style={{ backgroundColor: "#F0F0F0" }}>#</th>
                                    <th style={{ backgroundColor: "#F0F0F0" }}>Job Role</th>
                                    <th style={{ backgroundColor: "#F0F0F0" }}>Position</th>
                                    <th style={{ backgroundColor: "#F0F0F0" }}>Vacancy</th>
                                    <th style={{ backgroundColor: "#F0F0F0" }}>Eligibility</th>
                                    <th style={{ backgroundColor: "#F0F0F0" }}>Qualification</th>
                                    <th style={{ backgroundColor: "#F0F0F0" }}>Location</th>
                                    <th style={{ backgroundColor: "#F0F0F0" }}>Salary</th>
                                    <th style={{ backgroundColor: "#F0F0F0" }}>Benefits</th>
                                    <th style={{ backgroundColor: "#F0F0F0" }}></th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {jobData.map((job, index) => (
                                    <tr key={job.id}>
                                        <td>{job.number}</td>
                                        <td>{job.jobRole}</td>
                                        <td>{job.position}</td>
                                        <td>{job.vacancy}</td>
                                        <td>{job.eligibility}</td>
                                        <td>{job.qualification}</td>
                                        <td>{job.location}</td>
                                        <td>{job.salary}</td>
                                        <td width={"170px"}>{job.benefits}</td>
                                        <td><button className="btn btn-primary" onClick={handleShow}>ApplyNow</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
            <ApplyJobSeekersModel show={show} handleClose={handleClose} />
            <Mobile />
        </>
    );
}

export default ForemployeApplynow;
