import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';
import './Login.css';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { saveToken } from '../features/testSlice';
import { saveAccountVerify } from '../features/testSlice';
import { saveUcMainId } from '../features/testSlice';


const Enquiry = () => {
    const { accVerification } = useSelector((state) => state.test);
    console.log("Comming", accVerification)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [show, setShow] = useState(false);
    const [code, setCode] = useState("");

    const postUserData = async () => {

        const response = await fetch("/api/v1/public/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                role: role
            })
        }).then((response) => {
            response.json().then((data) => {
                // console.log("data", data);
                //  setToken(data.bearer_token);
                dispatch(saveToken(data.bearer_token))
                dispatch(saveAccountVerify(data.userVerified));
                dispatch(saveUcMainId(data.id));
                // console.log('DISPATCH token', data.bearer_token);
                // console.log('DISPATCH Accont', data.userVerified);
            })
        })
        // if(token.length>0){
        // navigate("/employee")
        // }

        if (accVerification === 'TRUE') {
            navigate("/MenuE")
        }
        else if (accVerification === 'TRUE') {
            navigate("/MenuC")
        }
        else if (accVerification === 'FALSE') {
            navigate("/VerifyAcc")
        } else {
            navigate("/Error")
        }
        // return response.json();
        // console.log("success token", token)
    }

    const loginByCode = async () => {
        const response = await fetch("/api/v1/public/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                code: code
            })
        }).then((response) => {
            response.json().then((data) => {
                dispatch(saveToken(data.bearer_token))
                dispatch(saveAccountVerify(data.userVerified));
                dispatch(saveUcMainId(data.id));
                // console.log('DISPATCH token', data.bearer_token);
                // console.log('DISPATCH Accont', data.userVerified);
            })
        })
        if (accVerification === 'TRUE') {
            navigate("/MenuE")
        }
        else if (accVerification === 'TRUE') {
            navigate("/MenuC")
        }
        else if (accVerification === 'FALSE') {
            navigate("/VerifyAcc")
        } else {
            navigate("/Error")
        }
        // return response.json();
        // console.log("success token", token)
    }


    return (
        <>
            <SignUp logout={show} />
            <div className="enquiry3">
                <Container className='enquiry1'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='enquiry2'>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='enquiry2'>Password</Form.Label>
                        <Form.Control type="text" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='enquiry2'>Role</Form.Label>
                        <Form.Control type="text" name="password" placeholder="Enter your password" value={role} onChange={(e) => setRole(e.target.value)} />
                    </Form.Group>
                    <div className="enquiry5">
                        <div className="enquiry4">
                            <Button variant="primary" onClick={() => postUserData()} >Login</Button>
                        </div>
                    </div>


                    <div className="enquiry7"> OR </div>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <Form.Control type="text" name="passwordgen" placeholder="Enter your generated code" value={code} onChange={(e) => setCode(e.target.value)} />
                    </Form.Group>
                    <div className="enquiry5">
                        <div className="enquiry4">
                            <Button variant="primary" onClick={() => loginByCode()}>Login by code</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Enquiry
