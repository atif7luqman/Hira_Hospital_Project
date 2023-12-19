import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Icon from '../images/icon.png';
import { PhoneFilled, EnvironmentFilled, MailFilled } from '@ant-design/icons';

export default function Footer2() {
  const phoneNumber = '(071) 5614111';
  const emailAddress = 'info@hira.com';

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleMailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <Container fluid className="my-5 pb-5" style={{ backgroundColor: '#81BAEE', paddingTop: '4rem' }}>
      <hr style={{ borderTop: '5px solid #000000' }} />
      <Row xs={1} md={3} className="g-4">
        {/* First Column */}
        <Col md={4} className="d-flex align-items-start">
            <div className="d-flex align-items-start">
            <Image src={Icon} />
            <p className='mt-auto text-end pb-2 fs-3 fw-bold' style={{color:'#BE2E3E'}}>IRA HOSPITAL</p>
            </div>
        </Col>

        {/* Second Column */}
        <Col md={4} className="text-left">
          <br /><br /><br />
          <p className="fw-bold fs-2" style={{color:'#BE2E3E'}}> <u> Hours</u></p>
          <p className="text-light fs-5">
            Monday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00 - 18:00 <br />
            Tuesday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00 - 18:00 <br />
            Wednesday:&nbsp;&nbsp;9:00 - 18:00 <br />
            Thursday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00 - 18:00 <br />
            Friday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00 - 18:00
          </p>
        </Col>
        <Col md={4} className='mt-auto'> 
          <p className="fw-bold fs-2" style={{color:'#BE2E3E'}}>
            <u>Contact</u>
          </p>
          <p className='text-white fs-5'>
            <span onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
              <PhoneFilled className='me-3' style={{ transform: 'rotate(90deg)' }} />
              <span >{phoneNumber}</span>
            </span>
            <br />
            <span onClick={handleMailClick} style={{ cursor: 'pointer' }}>
              <MailFilled className='me-3' />
              <span>{emailAddress}</span>
            </span>
            <br />
            <EnvironmentFilled className='fs-5 me-3' />
            Sukkur, Pakistan
          </p>
        </Col>
      </Row>
    </Container>
  );
}
