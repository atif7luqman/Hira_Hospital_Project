import { Container, Row, Col, Button, Form, ListGroup } from "react-bootstrap"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Subfooter() {
  return (
    <Container fluid className=" p-5 pt-3" style={{ backgroundColor:'#81BAEE' }}>
        <Row className="align-items-center">
            <Col md={4}>
                <p className="fw-bold" style={{color:'#05226A', fontSize:"15px"}}>Health Medical & <br /> Healthcare Center</p>
            </Col>
            <Col md={4}>
            
            </Col>
            <Col md={4}>
                <p className="mb-0 ms-4" style={{ color: '#05226A'}}>
                    Address
                </p>
                <p className="border rounded-5 p-1 px-3 bg-light">
                    Barrage Road Sukkur, Sukkur, Sindh, Pakistan
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <p className="mb-0 ms-2 fs-2 fw-bold" style={{ color: '#BE2E3E'}}>
                    Be Our Subscriber
                </p>
                <p className="ms-2" style={{fontSize:'12px'}}>
                    to get the latest new about health from our experts
                </p>

                <Container className="border rounded-5 border-primary p-3 d-flex flex-column align-items-center">
                    <Row className="w-100">
                        <Col xs={6} className="border rounded-5 border-primary mx-1 px-1">
                        <Form className="d-flex flex-column h-100">
                            <Form.Group controlId="emailInput" className="flex-grow-1">
                            <Form.Control
                                type="email"
                                placeholder="example@gmail.com"
                                style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                }}
                            />
                            </Form.Group>
                        </Form>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-end">
                        <Button className="rounded-5" variant="primary" type="submit">
                            Submit <ArrowForwardIcon />
                        </Button>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center">
                <ul className="fs-4" style={{color:'#002B9A', listStyle:'none', fontSize:'15px'}}>
                    <li>About Us</li>
                    <li>Departments</li>
                    <li>Doctors</li>
                    <li>Appointment</li>
                </ul>
            </Col>
            <Col md={4}>
                <Row>
                    <Col>
                    </Col>
                    <Col xs={6} className="border border-primary rounded p-2 px-3 text-white">
                        <p className="text-center fs-5" style={{color:'#002B9A'}}>Helplines</p>
                        <p>EMERGENCY &nbsp;&nbsp;&nbsp;&nbsp;1066</p>
                        <p>Health + Lifeline &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1860-500-1066</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
