import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Icon from '../images/icon.png';
import { PhoneFilled, EnvironmentFilled, MailFilled } from '@ant-design/icons';

export default function Footer2() {
  return (
    <Container fluid className="my-5 pb-5" style={{ backgroundColor: '#81BAEE', paddingTop: '4rem' }}>
      <hr style={{ borderTop: '5px solid #000000' }} />
      <Row xs={1} md={3} className="g-4">
        {/* First Column */}
        <Col md={4} className="d-flex align-items-start">
            <div className="d-flex align-items-start">
            <Image src={Icon} />
            <p className='mt-auto text-end pb-2 fs-3 fw-bold'>Hira Hospital</p>
            </div>
        </Col>

        {/* Second Column */}
        <Col md={8} className="text-center">
          <Row>
            <Col className="text-left">
              <br /><br /><br />
              <h5 className="text-black" style={{ fontWeight: 'bold' }}>Hours</h5>
              <p className="text-black">
                Monday:       9:00 - 18:00 <br />
                Tuesday:      9:00 - 18:00 <br />
                Wednesday:    9:00 - 18:00 <br />
                Thursday:     9:00 - 18:00 <br />
                Friday:       9:00 - 18:00
              </p>
            </Col>
            <Col className="text-left">
              <br /><br /><br />
              <h5 className="text-black" style={{ fontWeight: 'bold' }}>Contact</h5>
              <p className="text-black">
                <PhoneFilled className='fs-5 px-1' />(071) 5614111 <br />
                <MailFilled className='fs-5 px-1' />info@hira.com <br />
                <EnvironmentFilled className='fs-5 px-1' />Sukkur, Pakistan
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
