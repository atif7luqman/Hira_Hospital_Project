import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Img from '../images/Vaccination.png';

export default function Who() {
  return (
    <Container fluid className="my-5" style={{ background: 'linear-gradient(to right, #4BBDF2, #2359F4)', paddingTop: '1rem' }}>
      <Row xs={1} md={2} className="g-4 align-items-center">
        <Col md={6} className="text-center">
          <Image src={Img} roundedCircle fluid style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Col>
        <Col md={6} className="d-flex flex-column align-items-start justify-content-center">
          <h2 className="fw-bold fs-4 px-5 pb-4" style={{ color: '#BE2E3E' }}>
            <span className='fw-bold'> Welcome to Hira Hospital Where Expertise Meets Compassion.</span>
          </h2>
          <p className='px-5 text-white fs-5 pb-4'>Discover exceptional healthcare at Hira Hospital, located in the heart of Sukkur. Our dedicated team of skilled professionals combines cutting-edge technology with compassionate care to ensure your well-being. From routine check-ups to specialized treatments, we're here for all your healthcare needs. Choose Hira Hospital for expert, personalized, and quality medical services. Your health is our priority.</p>
        </Col>
      </Row>
    </Container>
  );
}
