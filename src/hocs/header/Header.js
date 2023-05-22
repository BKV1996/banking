import React from 'react';
import '../../asset/css/Header.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Headers = () => {
    const navigate = useNavigate();
    return (
        <>

            <Navbar bg="dark" variant='dark' className='headers1' sticky="top">
                <Container fluid className='headers2'>
                    <Navbar.Brand onClick={() => navigate("/")}>BMS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate("/about")}>About Us</Nav.Link>
                            <Nav.Link onClick={() => navigate("/visionMission")}>Vision & Mission</Nav.Link>
                            <NavDropdown title="Services We Offer" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => navigate("/pmc")}>Project Management Consultant</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/TPoolConst")}>Turnkey Swimming Poolconstruction</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/WaterTMng")}>Water Treatment Management</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/WaterProofing")}>Water Proofing</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/GlassMTiles")}>Glass Mosaic Tiles</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/WaterFeatureSpa")}>Water Features & Spa</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link onClick={() => navigate("/Gallery")}>Gallery</Nav.Link>
                            <Nav.Link onClick={() => navigate("/Enquiry")}>Enquiry</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Headers