import React from 'react'
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <Row>
        <Col lg={3}>
          <Header />
        </Col>
        <Col lg={9}>
          <Outlet />
        </Col>
      </Row>
    </>
  )
}

export default Layout
