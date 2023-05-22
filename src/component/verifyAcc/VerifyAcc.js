import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import SignUp from '../SignUp';
import { useSelector } from "react-redux";

const VerifyAcc = () => {
    const { logToken } = useSelector((state) => state.test);
    const [otp, setOtp] = useState("");
    const [isInputDisabled, setIsInputDisabled] = useState(true);


    const handleClick = () => {
        setIsInputDisabled(false);
      };

    const otpGenerate = async () => {
        const resp = await fetch("/api/v1/verified/email", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${logToken}`,
                "Content-Type": "application/json",
            },
        }).then((response) => {
            response.json().then((result) => {
                // console.log("result", result);
                // console.log(result)
            })
        })
    }

    const verifyAccount = async () => {
        const response = await fetch("/api/v1/verified/email", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${logToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                otp:otp
            })
        }).then((response) => {
            response.json().then((data) => {
                // console.log(data)
            })
        })
    }

    
    return (
        <>
            <SignUp />
            <div className="enquiry3">
                <Container className='enquiry1'>
                    <h1 style={{ textAlign: 'center' }}>Verify Your Account</h1>
                    <div className="enquiry5">
                        <div className="enquiry4">
                            <Button variant="primary" onClick={() => {otpGenerate(); handleClick()}}>Generate OTP</Button>
                        </div>
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='enquiry2'>OTP</Form.Label>
                        <Form.Control type="text" disabled={isInputDisabled} name="otp" placeholder="Enter your OTP" value={otp} onChange={(e) => setOtp(e.target.value)}/>
                    </Form.Group>
                    <div className="enquiry5">
                        <div className="enquiry4">
                            <Button variant="primary" onClick={() => verifyAccount()}>Submit</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default VerifyAcc
