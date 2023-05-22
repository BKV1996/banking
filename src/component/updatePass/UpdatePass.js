import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import SignUp from '../SignUp';
import { useSelector } from "react-redux";

const UpdatePass = () => {
  const { logToken } = useSelector((state) => state.test);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleConfirmPasswordChange = (event) => {
    setconfirmPassword(event.target.value);
  };

  const updatePassword = async () => {
    
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // console.log("hello")
    const response = await fetch("/api/v1/change-password", {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${logToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword: oldPassword,
        newPassword: newPassword,
      })
    }).then((response) => {
      response.json().then((data) => {
        console.log(data)
      })
    })
  };



  return (
    <>
      <SignUp />
      <div className="enquiry3">
        <Container className='enquiry1'>
          <h1 style={{ textAlign: 'center' }}>Update Password</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='enquiry2'>Old Password</Form.Label>
            <Form.Control type="text" name="oldPassword" placeholder="Enter your username" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='enquiry2'>New Password</Form.Label>
            <Form.Control type="text" name="newPassword" placeholder="Enter your username" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='enquiry2'>Confirm Password</Form.Label>
            <Form.Control type="text" name="newPassword" placeholder="Enter your password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </Form.Group>
          <div className="enquiry5">
            <div className="enquiry4">
              <Button variant="primary" onClick={() => updatePassword()}>Update Password</Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default UpdatePass
