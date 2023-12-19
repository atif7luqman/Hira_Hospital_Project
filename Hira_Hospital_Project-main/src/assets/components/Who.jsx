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
        <p className='px-5 text-white'>Lorem Media is a full-service social media agency. We offer businesses innovative  solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience in real time.

It's 2019: time to sink or swim.

We are your Social Media Marketing Agency.</p>

        </Col>
        
      </Row>
    </Container>
  );
}
