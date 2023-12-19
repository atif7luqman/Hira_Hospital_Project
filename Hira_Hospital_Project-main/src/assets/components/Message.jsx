import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import John from '../images/John.png';

export default function Message() {
  return (
    <Container fluid className="text-center my-5" style={{ background: 'linear-gradient(to right, #2359F4, #4BBDF2)', paddingTop: '4rem' }}>

      <Row xs={1} md={6} className="g-4 pb-5">
        <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
          <h2 className="fw-bold fs-1" style={{ color: '#BE2E3E' }}>Don't Let Your Health</h2>
          <h2 className="fw-bold fs-1 pb" style={{ color: '#BE2E3E' }}>Take a Backseat!</h2>

          <p className='pt-3 text-white' style={{ color: "#002B9A" }}>Schedule an appointment with one of our <br />
            experienced medical professionals today!
          </p>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Image src={John} roundedCircle style={{ width: '250px', height: '250px' }} />
        </Col>
      </Row>
    </Container>
  );
}
