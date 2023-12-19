import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeartFilled, UserOutlined, MedicineBoxFilled } from '@ant-design/icons';

export default function Updates() {
  return (
    <Container fluid className="my-5 pb-5" style={{ background: 'linear-gradient(to right, #4BBDF2, #2359F4)', paddingTop: '4rem' }}>
      <hr style={{ borderTop: '5px solid #000000' }} />
      <h2 className="fw-bold fs-1 pb-5 text-center" style={{ color: '#BE2E3E' }}>Daily Hospital Updates</h2>
      <Row xs={1} md={3} className="g-4">
        {/* First Column */}
        <Col md={4} className="align-self-center text-center">
          <div className="d-flex flex-column align-items-center">
            <HeartFilled className='fs-1 text-danger mb-2' />
            <span className="fw-bold fs-1 text-dark" style={{ color: '##BE2E3E' }}>99%</span>
            <span className="fw-bold text-danger">Positive Feedback</span>
          </div>
        </Col>

        {/* Second Column */}
        <Col md={4} className="text-center">
          <div className="d-flex flex-column align-items-center">
            <UserOutlined className='fs-1 text-danger' />
            <span className="fw-bold fs-1 text-dark" style={{ color: '#2359F4' }}>2500+</span>
            <span className="fs-6 text-danger">happy patients a week</span>
          </div>
        </Col>

        {/* Third Column */}
        <Col md={4} className="text-center">
          <div className="d-flex flex-column align-items-center">
            <MedicineBoxFilled className='fs-1 text-danger' />
            <span className="fw-bold fs-1 text-dark" style={{ color: '#2359F4' }}>43</span>
            <span className="fs-6 text-danger">professional doctors</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
