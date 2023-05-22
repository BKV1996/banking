import React, { useState } from 'react'
import SignUp from '../SignUp';
import { Button, Container, Form } from 'react-bootstrap';
import { useSelector } from "react-redux";

const TransferMoney = () => {
    const { logToken } = useSelector((state) => state.test);
    const [account_number_to, setAccount_number_to] = useState("");
    const [amount, setAmount] = useState("");
    const transferMoney = async () =>{
        const response = await fetch("/api/v1/account/transfer/c", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${logToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                account_number_to: account_number_to,
                amount: amount,
            })
        }).then((response) => {
            response.json().then((data) => {
                console.log("data", data);
            })
        })
    }
  return (
    <>
      <SignUp/>
            <div className="enquiry3">
                <Container className='enquiry1'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='enquiry2'>account_number_to</Form.Label>
                        <Form.Control type="text" name="account_number_to" placeholder="Enter your account_number_to" value={account_number_to} onChange={(e) => setAccount_number_to(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='enquiry2'>amount</Form.Label>
                        <Form.Control type="text" name="amount" placeholder="Enter your amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </Form.Group>
                    <div className="enquiry5">
                        <div className="enquiry4">
                            <Button variant="primary" onClick={() => transferMoney()} >Submit</Button>
                        </div>
                    </div>
                </Container>
            </div>
    </>
  )
}

export default TransferMoney
