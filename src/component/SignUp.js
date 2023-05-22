import React from 'react'
import { Button, Container, Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'



const SignUp = (Logout) => {
    const navigation = useNavigate();
   console.log("HELE",Logout.logout);

    function handleLogout() {
        // Perform logout logic here
        window.location.href = '/login';
        
    }
    return (
        <>
            <div className="signU1">
                <Container className='signU2'>
                    <Dropdown className='signU3'>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Select your department
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigation("/homePage")} >Home</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/CreateAcc")} >Create Account</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/login")}>Login</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/EmpData")}>Employee Data</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/CustomerData")}>Customer Data</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/UpdatePass")}>Change Password</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/MenuE")}>MenuE</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/MenuC")}>MenuC</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/Error")}>Error</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/VerifyAcc")}>Verify Account</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/UpdateAcc")}>Update Account</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/CurrentCustomerData")}>Current Customer Data</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigation("/TransferMoney")}>Transfer Money</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Container>
                <div className="signU4">
                    <div className="signU5">
                        {Logout.logout === 'true' && (
                            <Button variant="warning" onClick={() => handleLogout()}>Logout</Button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
