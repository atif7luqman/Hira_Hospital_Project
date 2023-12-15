import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Image } from 'react-bootstrap';
import HospitalImg from '../images/hospital-image.png'

export default function Updates() {
  return (
    <Container fluid className="text-center my-5" style={{ background: 'linear-gradient(to right, #4BBDF2, #2359F4)', paddingTop: '4rem' }}>

      <Row xs={1} md={6} className="g-4 pb-5">
        <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
        <h2 className="fw-bold fs-1 pb-5" style={{color:'#BE2E3E'}}>Daily Hospital Updates</h2>

        <div className='bg-white'>
  <p className='fs-4 fw-bold text-white' style={{ color: '#081D54', backgroundColor: '#59A0F4' }}>Patients Visited</p>
</div>

            <div>
                <br></br>
            </div>
            <div className='bg-white'>
                dif1
            </div>
        </Col>
        <Col md={6}>
            <Image src={HospitalImg} roundedCircle style={{ width: '250px', height: '250px' }} />
        </Col>
      </Row>
    </Container>
  );
}
