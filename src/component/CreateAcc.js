import React, { useEffect, useState } from 'react'
import './SignUpC.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import SignUp from './SignUp';
import { useSelector } from "react-redux";


const CreateAcc = () => {

    const { logToken } = useSelector((state) => state.test);
    console.log("SIGNUP token", logToken)


    const [type, setType] = useState("");
    const [contact_number, setContact_number] = useState("");
    const [full_name, setFull_name] = useState("");
    const [email_id, setEmail_id] = useState("");
    const [father_name, setFather_name] = useState("");
    const [designation, setDesignation] = useState("");
    const [profession, setProfession] = useState("");
    const [date_of_birth, setDate_of_birth] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [zip_code, setZip_code] = useState("");
    const [address_type, setAddress_type] = useState("");
    const [address_number, setAddress_number] = useState("");
    const [identity_type, setIdentity_type] = useState("");
    const [identity_number, setIdentity_number] = useState("");
    const [pancard_number, setPancard_number] = useState("");
    const [account_type, setAccount_type] = useState("");
    const [account_number, setAccount_number] = useState("");
    const [account_opening_cost, setAccount_opening_cost] = useState("");
    const [current_balance, setCurrent_balance] = useState("");
    const [result, setResult] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [handleType, setHandleType] = useState("blank");
    const [show, setShow] = useState("true");

    useEffect(() => {
        console.log('logToken', logToken);
        getCode();
    }, []);

    const handleData = (value) => {
        setHandleType(value);
        console.log("HANDLE TYEPE", handleType);
    }

    const postEmployeeData = async () => {
        console.log("AKshay Vats", result);
        console.log("USRE DATA", username, password);
        if (handleType === 'designation') {
            const response = await fetch("/api/v1/auth/employee/register", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${logToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    type: type,
                    employeeDTO: {
                        contact_number: contact_number,
                        full_name: full_name,
                        email_id: email_id,
                        father_name: father_name,
                        designation: designation,
                        date_of_birth: date_of_birth,
                        addressDTO: [{
                            country: country,
                            state: state,
                            city: city,
                            zip_code: zip_code,
                            addressProofDTO: {
                                address_type: address_type,
                                address_number: address_number
                            }
                        }],
                        identityDTO: {
                            identity_type: identity_type,
                            identity_number: identity_number
                        },
                        pancardDTO: {
                            pancard_number: pancard_number
                        },
                        accountDTO: {
                            account_type: account_type,
                            account_number: account_number,
                            account_opening_cost: account_opening_cost,
                            current_balance: current_balance
                        }
                    }
                })
            }).then((response) => {
                response.json().then((data) => {
                    // console.log("data", data);
                })
            })
            // return response.json();
            // console.log("SARKARI TOKEN", props.token);
        }
        else {
            const response = await fetch("/api/v1/auth/customer/register", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${logToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    type: type,
                    customerDTO: {
                        contact_number: contact_number,
                        full_name: full_name,
                        email_id: email_id,
                        father_name: father_name,
                        profession: profession,
                        date_of_birth: date_of_birth,
                        addressDTO: [{
                            country: country,
                            state: state,
                            city: city,
                            zip_code: zip_code,
                            addressProofDTO: {
                                address_type: address_type,
                                address_number: address_number
                            }
                        }],
                        identityDTO: {
                            identity_type: identity_type,
                            identity_number: identity_number
                        },
                        pancardDTO: {
                            pancard_number: pancard_number
                        },
                        accountDTO: {
                            account_type: account_type,
                            account_number: account_number,
                            account_opening_cost: account_opening_cost,
                            current_balance: current_balance
                        }
                    }
                })
            }).then((response) => {
                response.json().then((data) => {
                    console.log("data", data);
                })
            })
            // return response.json();
        }
    }


    const getCode = async () => {
        const response = await fetch("/api/v1/auto/u&p", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${logToken}`,
                "Content-Type": "application/json",
            },
        }).then((response) => {
            response.json().then((result) => {
                console.log("result", result);
                setResult(result);
                setUsername(result.username);
                setPassword(result.password);
            })
        })

        return response.json();
    }

    return (
        <>
            <SignUp logout={show} />
            <div className="sign1">
                <Container className='sign2'>
                    <Row className='sign3'>
                        <select onChange={(e) => handleData(e.target.value)}>
                            <option disabled selected hidden>Select your department</option>
                            <option value="designation">Employee Details</option>
                            <option value="profession">Cutomer Details</option>
                        </select>
                    </Row>
                    <Row>
                        {
                            handleType === 'designation' && (
                                <div className='sign8'>Employee Details</div>
                            )
                        }
                        {
                            handleType === 'profession' && (
                                <div className='sign8'>Customer Details</div>
                            )
                        }
                        {
                            handleType === 'blank' && (
                                <div className='sign8'>Please select your Department above</div>
                            )
                        }
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Id</Form.Label>
                                <Form.Control disabled type="text" name="id" placeholder="Your ID" />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Username</Form.Label>
                                <Form.Control disabled type="text" name="username" value={result.username} placeholder="Enter your username" />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Password</Form.Label>
                                <Form.Control disabled type="text" name="password" value={result.password} placeholder="Enter your password" />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Type</Form.Label>
                                <DropdownButton id="dropdown-basic-button" title="Dropdown button" onClick={(e) => handleData(e.target.value)}>
                                    <Dropdown.Item value="designation">Action</Dropdown.Item>
                                    <Dropdown.Item value="profession">Another action</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group> */}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                {/* <Form.Label className='sign4'>Type</Form.Label>
                                <Form.Control disabled type="text" name="type" value={type} onChange={(e) => setType(e.target.value)} placeholder="Enter your type" /> */}
                                {
                                    handleType === 'designation' && (
                                        <>
                                            <Form.Label className='sign4'>Type</Form.Label>
                                            <Form.Control type="text" name="designation" disabled value="E" onChange={(e) => setType(e.target.value)} placeholder="Enter your profession" />
                                        </>
                                    )
                                }
                                {
                                    handleType === 'profession' && (
                                        <>
                                            <Form.Label className='sign4'>Type</Form.Label>
                                            <Form.Control type="text" name="profession" disabled value="C" onChange={(e) => setType(e.target.value)} placeholder="Enter your profession" />
                                        </>
                                    )
                                }
                                {
                                    handleType === 'blank' && (
                                        <>
                                            <Form.Label className='sign4'>Type</Form.Label>
                                            <Form.Control type="text" name="blank" disabled placeholder="Select above your department" />
                                        </>
                                    )
                                }
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Contact Number</Form.Label>
                                <Form.Control type="text" name="contact_number" value={contact_number} onChange={(e) => setContact_number(e.target.value)} placeholder="Enter your mobile number" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Full Name</Form.Label>
                                <Form.Control type="text" name="full_name" value={full_name} onChange={(e) => setFull_name(e.target.value)} placeholder="Enter your full name" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Email id</Form.Label>
                                <Form.Control type="text" name="email_id" value={email_id} onChange={(e) => setEmail_id(e.target.value)} placeholder="Enter your email id" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Father Name</Form.Label>
                                <Form.Control type="text" name="father_name" value={father_name} onChange={(e) => setFather_name(e.target.value)} placeholder="Enter your father name" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                {
                                    handleType === 'designation' && (
                                        <>
                                            <Form.Label className='sign4'>Designation</Form.Label>
                                            <Form.Control type="text" name="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Enter your profession" />
                                        </>
                                    )
                                }
                                {
                                    handleType === 'profession' && (
                                        <>
                                            <Form.Label className='sign4'>Profession</Form.Label>
                                            <Form.Control type="text" name="profession" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="Enter your profession" />
                                        </>
                                    )
                                }
                                {
                                    handleType === 'blank' && (
                                        <>
                                            <Form.Label className='sign4'>Role</Form.Label>
                                            <Form.Control type="text" name="blank" disabled placeholder="Select above your department" />
                                        </>
                                    )
                                }
                            </Form.Group>
                        </Col>
                        <Col sm={4}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Date of Birth</Form.Label>
                                <Form.Control type="date" name="date_of_birth" value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)} placeholder="Enter your date of birth" />
                            </Form.Group>

                        </Col>
                        <Col sm={12} className='sign5'>Address Details</Col>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Country</Form.Label>
                                <Form.Control type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter your country" />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>State</Form.Label>
                                <Form.Control type="text" name="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter your state" />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>City</Form.Label>
                                <Form.Control type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city" />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Zip Code</Form.Label>
                                <Form.Control type="text" name="zip_code" value={zip_code} onChange={(e) => setZip_code(e.target.value)} placeholder="Enter your zip code" />
                            </Form.Group>
                        </Col>
                        <Col sm={12} className='sign6'>Address Proof Type</Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Adrress Type</Form.Label>
                                <Form.Control type="text" name="address_type" value={address_type} onChange={(e) => setAddress_type(e.target.value)} placeholder="Enter your address type" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Adrress Number</Form.Label>
                                <Form.Control type="text" name="address_number" value={address_number} onChange={(e) => setAddress_number(e.target.value)} placeholder="Enter your address number" />
                            </Form.Group>
                        </Col>
                        <Col sm={12} className='sign6'>Identity Card Details</Col>
                        <Col sm={4}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Identity Type</Form.Label>
                                <Form.Control type="text" name="identity_type" value={identity_type} onChange={(e) => setIdentity_type(e.target.value)} placeholder="Enter your identity type" />
                            </Form.Group>

                        </Col>
                        <Col sm={4}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Identity Number</Form.Label>
                                <Form.Control type="text" name="identity_number" value={identity_number} onChange={(e) => setIdentity_number(e.target.value)} placeholder="Enter your identity number" />
                            </Form.Group>

                        </Col>
                        <Col sm={4}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>PAN Number</Form.Label>
                                <Form.Control type="text" name="pancard_number" value={pancard_number} onChange={(e) => setPancard_number(e.target.value)} placeholder="Enter your PAN number" />
                            </Form.Group>

                        </Col>
                        <Col sm={12} className='sign5'>Account Details</Col>
                        <Col sm={3}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Account Type</Form.Label>
                                <Form.Control type="text" name="account_type" value={account_type} onChange={(e) => setAccount_type(e.target.value)} placeholder="Enter your account type" />
                            </Form.Group>

                        </Col>
                        <Col sm={3}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Account Number</Form.Label>
                                <Form.Control type="text" name="account_number" value={account_number} onChange={(e) => setAccount_number(e.target.value)} placeholder="Enter your account number" />
                            </Form.Group>

                        </Col>
                        <Col sm={3}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Account Opening cost</Form.Label>
                                <Form.Control type="text" name="account_opening_cost" value={account_opening_cost} onChange={(e) => setAccount_opening_cost(e.target.value)} placeholder="Enter your acc open amount" />
                            </Form.Group>

                        </Col>
                        <Col sm={3}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Current Balance</Form.Label>
                                <Form.Control type="text" name="current_balance" value={current_balance} onChange={(e) => setCurrent_balance(e.target.value)} placeholder="Enter your deposite amount" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="sign7">
                        {
                            handleType === 'designation' && (
                                <>
                                    <Button variant="primary" onClick={() => { postEmployeeData(); }} >Submit as Employee</Button>
                                </>
                            )
                        }
                        {
                            handleType === 'profession' && (
                                <>
                                    <Button variant="primary" onClick={() => { postEmployeeData(); }} >Submit as Customer</Button>
                                </>
                            )
                        }
                        {
                            handleType === 'blank' && (
                                <>
                                    <Button variant="primary" >Select your Department</Button>
                                </>
                            )
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}

export default CreateAcc
