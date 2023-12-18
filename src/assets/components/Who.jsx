import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Img from '../images/Vaccination.png'

export default function Who() {
  return (
    <Container fluid className="my-5" style={{ background: 'linear-gradient(to right, #4BBDF2, #2359F4)', paddingTop: '4rem' }}>

      <Row xs={1} md={6} className="g-4">
        <Col md={6}>
            <Image src={Img} roundedCircle style={{ width: '40rem', height: '35rem' }} />
        </Col>
        <Col md={6} className="d-flex flex-column align-items-start justify-content-center">
        <h2 className="fw-bold fs-1 px-5 pb-4" style={{color:'#BE2E3E'}}>Who We Are</h2>
        <p className='px-5 text-white'>Welcome to Hira Hospital – Where Expertise Meets Compassion <br/> <br />
        Discover exceptional healthcare at Hira Hospital, located in the heart of sukkur. Our dedicated team of skilled professionals combines cutting-edge technology with compassionate care to ensure your well-being. From routine check-ups to specialized treatments, we're here for all your healthcare needs. Choose Hira Hospital for expert, personalized, and quality medical services. Your health is our priority.</p>

        </Col>
        
      </Row>
    </Container>
  );
}
