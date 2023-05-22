import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { saveToken } from '../../features/testSlice';
import { saveAccountVerify } from '../../features/testSlice';
import { saveUcMainId } from '../../features/testSlice';
import './HomePage.css'; // Import custom styles

function HomePage() {

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


  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // Add your login logic here
  //   setIsLoggedIn(true);
  // }

  // const handleLogout = () => {
  //   // Add your logout logic here
  //   setIsLoggedIn(false);
  // }

  return (
    <Container>
      <Row className="my-4">
        <Row className="align-items-center">
          <Col md={{ span: 6, offset: 3 }}>
            <h1>Welcome to My Bank</h1>
            <p>We provide a wide range of banking services to meet your financial needs.</p>
          </Col>
        </Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="card-tertiary">
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Form >
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="light" type="submit">Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
