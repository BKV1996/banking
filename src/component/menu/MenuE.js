import React from 'react'
import { Button, Container, Row} from 'react-bootstrap';
import SignUp from '../SignUp';
import { useNavigate } from 'react-router-dom';

const MenuE = () => {
  const navigate = useNavigate();
  return (
    <>
      <SignUp />
      <div className="enquiry3">
        <Container className='enquiry1'>
          <Row style={{rowGap:'10px'}}>
            <Row>
            <Button variant="warning" onClick={() => navigate("/UpdatePass")}>Change Password</Button>
            </Row>
            <Row>
            <Button variant="success" onClick={() => navigate("/CreateAcc")}>Create New Account</Button>
            </Row>
            <Row>
            <Button variant="primary">Update in old Account</Button>
            </Row>
            <Row>
            <Button variant="danger">Deactivate Account</Button>
            </Row>
            <Row>
            <Button variant="info" onClick={() => navigate("/EmpData")}>Employee Database</Button>
            </Row>
            <Row>
            <Button variant="secondary" onClick={() => navigate("/CustomerData")}>Customer Database</Button>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default MenuE
