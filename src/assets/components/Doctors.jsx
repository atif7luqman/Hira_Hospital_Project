import { Container, Row, Col, Button } from 'react-bootstrap';
import { Card } from 'antd';
import Maran from '../images/Hira.png';
import Suganthi from '../images/Suganthi.png';
import John from '../images/John.png';

export default function Doctors() {
  return (
    <Container fluid className=" mt-5" style={{ background: 'linear-gradient(to right, #2359F4, #4BC0F2)', paddingTop: '4rem' }}>
        <h2 className="text-white text-center mb-3">Our Dedicated Doctors Team</h2>
        <Row className='pb-5'>
            <Col>
                <Card
                    hoverable
                    cover={<img alt="example" src={Maran} className='p-4 pb-2'/>}
                >
                    <Container fluid>
                    <Row>
                        <Col>
                            <p className='fs-2 fw-bold mb-0' style={{color: '#002B9A'}}>Dr. Maran </p>
                            <p className='fs-2'>Cardiologist</p>
                        </Col>
                        
                        <Col className='d-flex align-items-center justify-content-end'>
                            <Button className='bg-primary text-light'>View Profile</Button>
                        </Col>
                    </Row>
                    </Container>
                </Card>
            </Col>
            <Col>
                <Card
                    hoverable
                    cover={<img alt="example" src={Suganthi} className='p-4 pb-2'/>}
                >
                    <Container fluid>
                    <Row>
                        <Col>
                            <p className='fs-2 fw-bold mb-0' style={{color: '#002B9A'}}>Dr. Zoya </p>
                            <p className='fs-2'>Pediatrician</p>
                        </Col>
                        
                        <Col className='d-flex align-items-center justify-content-end'>
                            <Button className='bg-primary text-light'>View Profile</Button>
                        </Col>
                    </Row>
                    </Container>
                </Card>
            </Col>
            <Col>
                <Card
                    hoverable
                    cover={<img alt="example" src={John} className='p-4 pb-2'/>}
                >
                    <Container fluid>
                    <Row>
                        <Col>
                            <p className='fs-2 fw-bold mb-0' style={{color: '#002B9A'}}>Dr. Fahad </p>
                            <p className='fs-2'>Psychiatrist</p>
                        </Col>
                        
                        <Col className='d-flex align-items-center'>
                            <Button className='bg-primary text-light'>View Profile</Button>
                        </Col>
                    </Row>
                    </Container>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}