import React, { useEffect, useState } from 'react'
import '../SignUpC.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import SignUp from '../SignUp';
import { useSelector } from "react-redux";


const UpdateAcc = () => {

    const { logToken } = useSelector((state) => state.test);
    const { ucMainId } = useSelector((state) => state.test)
    // console.log("SIGNUP token", logToken)
    console.log("SIGNUP token", ucMainId);

    const [result, setResult] = useState("");

    const [id, setId] = useState("");
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

    const [accounts, setAccounts] = useState("");
    const [account_type, setAccount_type] = useState("");
    const [account_number, setAccount_number] = useState("");
    const [account_opening_cost, setAccount_opening_cost] = useState("");
    const [current_balance, setCurrent_balance] = useState("");

    const [handleType, setHandleType] = useState("blank");
    const [show, setShow] = useState("true");
    const [isInputDisabled, setIsInputDisabled] = useState(true);


    const handleClick = () => {
        setIsInputDisabled(false);
    };

    const handleData = (value) => {
        setHandleType(value);
        console.log("HANDLE TYEPE", handleType);
    }

    const getData = async () => {
        if (handleType === 'designation') {
            const resp = await fetch(`/api/v1/auth/employee/e?id=${ucMainId}`, {
                // const resp = await fetch("/api/v1/auth/employee/e?id=3", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${logToken}`,
                    "Content-Type": "application/json",
                },
            }).then((response) => {
                response.json().then((result) => {
                    // console.log("result for brijesh", result);
                    setResult(result);
                    setId(result.id);
                    setContact_number(result.contact_number);
                    setFull_name(result.full_name);
                    setEmail_id(result.email_id);
                    setFather_name(result.father_name);
                    setDesignation(result.designation);
                    setDate_of_birth(result.date_of_birth);

                    // setAddress(result.address[0]);
                    setCountry(result.address[0].country);
                    setState(result.address[0].state);
                    setCity(result.address[0].city);
                    setZip_code(result.address[0].zip_code);

                    // setAddressProofs(result.address[0].addressProof)
                    setAddress_type(result.address[0].addressProof.address_type);
                    setAddress_number(result.address[0].addressProof.address_number);

                    // setIdentity(result.identity);
                    setIdentity_type(result.identity.identity_type);
                    setIdentity_number(result.identity.identity_number);

                    // setPanCardProofs(result.panCardProof);
                    setPancard_number(result.panCardProof.pancard_number);

                    // setAccounts(result.account);
                    setAccount_type(result.account.account_type);
                    setAccount_number(result.account.account_number);
                    setAccount_opening_cost(result.account.account_opening_cost);
                    setCurrent_balance(result.account.current_balance);

                    // console.log("result for brijesh",addressProofs)

                })
                // console.log("sdsavdasjgdh", address)

            })
        }
        else if (handleType === 'profession') {
            const resp = await fetch(`/api/v1/auth/customer/c?id=${ucMainId}`, {
                // const resp = await fetch("/api/v1/auth/employee/e?id=4", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${logToken}`,
                    "Content-Type": "application/json",
                },
            }).then((response) => {
                response.json().then((result) => {
                    // console.log("result for brijesh", result);
                    setResult(result);
                    setId(result.id);
                    setContact_number(result.contact_number);
                    setFull_name(result.full_name);
                    setEmail_id(result.email_id);
                    setFather_name(result.father_name);
                    setProfession(result.profession);
                    setDate_of_birth(result.date_of_birth);

                    // setAddress(result.address[0]);
                    setCountry(result.address[0].country);
                    setState(result.address[0].state);
                    setCity(result.address[0].city);
                    setZip_code(result.address[0].zip_code);

                    // setAddressProofs(result.address[0].addressProof)
                    setAddress_type(result.address[0].addressProof.address_type);
                    setAddress_number(result.address[0].addressProof.address_number);

                    // setIdentity(result.identity);
                    setIdentity_type(result.identity.identity_type);
                    setIdentity_number(result.identity.identity_number);

                    // setPanCardProofs(result.panCardProof);
                    setPancard_number(result.panCardProof.pancard_number);

                    // setAccounts(result.account);
                    setAccount_type(result.account.account_type);
                    setAccount_number(result.account.account_number);
                    setAccount_opening_cost(result.account.account_opening_cost);
                    setCurrent_balance(result.account.current_balance);

                    // console.log("result for brijesh",addressProofs)

                })
                // console.log("sdsavdasjgdh", address)

            })
        }
    }

    const putUpdatedData = async () => {
        console.log("AKshay Vats", result);
        // console.log("USRE DATA", username, password);
        if (handleType === 'designation') {
            const response = await fetch(`/api/v1/auth/employee/e?id=${id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${logToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // username: username,
                    // password: password,
                    // type: type,
                    contact_number: contact_number,
                    full_name: full_name,
                    email_id: email_id,
                    father_name: father_name,
                    designation: designation,
                })
            }).then((response) => {
                response.json().then((data) => {
                    console.log("data", data);
                })
            })
            // return response.json();
            // console.log("SARKARI TOKEN", props.token);
        }
        else if (handleType === 'profession') {
            const response = await fetch(`/api/v1/auth/customer/c?id=${id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${logToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // username: username,
                    // password: password,
                    // type: type,
                    contact_number: contact_number,
                    full_name: full_name,
                    email_id: email_id,
                    father_name: father_name,
                    profession: profession,

                })
            }).then((response) => {
                response.json().then((data) => {
                    console.log("data", data);
                })
            })
            // return response.json();
        }
    }

    return (
        <>
            <Button onClick={() => { getData(); handleClick() }}>Get Data</Button>



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
                                <Form.Control disabled type="text" name="id" value={id} placeholder="Your ID" />
                            </Form.Group>
                        </Col>

                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                                <Form.Control type="text" name="contact_number" disabled={isInputDisabled} value={contact_number} onChange={(e) => setContact_number(e.target.value)} placeholder="Enter your mobile number" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Full Name</Form.Label>
                                <Form.Control type="text" name="full_name" disabled={isInputDisabled} value={full_name} onChange={(e) => setFull_name(e.target.value)} placeholder="Enter your full name" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Email id</Form.Label>
                                <Form.Control type="text" name="email_id" disabled={isInputDisabled} value={email_id} onChange={(e) => setEmail_id(e.target.value)} placeholder="Enter your email id" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Father Name</Form.Label>
                                <Form.Control type="text" name="father_name" disabled={isInputDisabled} value={father_name} onChange={(e) => setFather_name(e.target.value)} placeholder="Enter your father name" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                {
                                    handleType === 'designation' && (
                                        <>
                                            <Form.Label className='sign4'>Designation</Form.Label>
                                            <Form.Control type="text" name="designation" disabled={isInputDisabled} value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Enter your profession" />
                                        </>
                                    )
                                }
                                {
                                    handleType === 'profession' && (
                                        <>
                                            <Form.Label className='sign4'>Profession</Form.Label>
                                            <Form.Control type="text" name="profession" value={profession} disabled={isInputDisabled} onChange={(e) => setProfession(e.target.value)} placeholder="Enter your profession" />
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
                                <Form.Control type="text" name="date_of_birth" disabled value={date_of_birth} placeholder="Enter your date of birth" />
                            </Form.Group>

                        </Col>
                        <Col sm={12} className='sign5'>Address Details</Col>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Country</Form.Label>
                                <Form.Control type="text" name="country" disabled value={country} placeholder="Enter your country" />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>State</Form.Label>
                                <Form.Control type="text" name="state" disabled value={state} placeholder="Enter your state" />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>City</Form.Label>
                                <Form.Control type="text" name="city" disabled value={city} placeholder="Enter your city" />
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Zip Code</Form.Label>
                                <Form.Control type="text" name="zip_code" disabled value={zip_code} placeholder="Enter your zip code" />
                            </Form.Group>
                        </Col>
                        <Col sm={12} className='sign6'>Address Proof Type</Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Adrress Type</Form.Label>
                                <Form.Control type="text" name="address_type" disabled value={address_type} placeholder="Enter your address type" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Adrress Number</Form.Label>
                                <Form.Control type="text" name="address_number" disabled value={address_number} placeholder="Enter your address number" />
                            </Form.Group>
                        </Col>
                        <Col sm={12} className='sign6'>Identity Card Details</Col>
                        <Col sm={4}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Identity Type</Form.Label>
                                <Form.Control type="text" name="identity_type" disabled value={identity_type} onChange={(e) => setIdentity_type(e.target.value)} placeholder="Enter your identity type" />
                            </Form.Group>

                        </Col>
                        <Col sm={4}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Identity Number</Form.Label>
                                <Form.Control type="text" name="identity_number" disabled value={identity_number} onChange={(e) => setIdentity_number(e.target.value)} placeholder="Enter your identity number" />
                            </Form.Group>

                        </Col>
                        <Col sm={4}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>PAN Number</Form.Label>
                                <Form.Control type="text" name="pancard_number" disabled value={pancard_number} onChange={(e) => setPancard_number(e.target.value)} placeholder="Enter your PAN number" />
                            </Form.Group>

                        </Col>
                        <Col sm={12} className='sign5'>Account Details</Col>
                        <Col sm={3}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Account Type</Form.Label>
                                <Form.Control type="text" name="account_type" disabled value={account_type} onChange={(e) => setAccount_type(e.target.value)} placeholder="Enter your account type" />
                            </Form.Group>

                        </Col>
                        <Col sm={3}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Account Number</Form.Label>
                                <Form.Control type="text" name="account_number" disabled value={account_number} placeholder="Enter your account number" />
                            </Form.Group>

                        </Col>
                        <Col sm={3}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Account Opening cost</Form.Label>
                                <Form.Control type="text" name="account_opening_cost" disabled value={account_opening_cost} placeholder="Enter your acc open amount" />
                            </Form.Group>

                        </Col>
                        <Col sm={3}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='sign4'>Current Balance</Form.Label>
                                <Form.Control type="text" name="current_balance" disabled value={current_balance} placeholder="Enter your deposite amount" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="sign7">
                        {
                            handleType === 'designation' && (
                                <>
                                    <Button variant="primary" onClick={() => { putUpdatedData(); }} >Submit as Employee</Button>
                                </>
                            )
                        }
                        {
                            handleType === 'profession' && (
                                <>
                                    <Button variant="primary" onClick={() => { putUpdatedData(); }} >Submit as Customer</Button>
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

export default UpdateAcc
