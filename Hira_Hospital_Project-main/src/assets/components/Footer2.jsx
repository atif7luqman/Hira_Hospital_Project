import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Icon from '../images/Icon.png';
import { PhoneFilled, EnvironmentFilled, MailFilled} from '@ant-design/icons';


export default function Footer2() {
  return (

    <Container fluid className="my-5" style={{ background: 'linear-gradient(to right, #4BBDF2, #2359F4)', paddingTop: '4rem' }}>
       <hr style={{ borderTop: '5px solid #000000' }} />
      <Row xs={1} md={3} className="g-4">
        {/* First Column */}
        <Col md={4} className="align-self-start">
  <Image src={Icon} roundedCircle style={{ width: '6rem', height: '5rem' }} />
  <p className="text-black mt-2" style={{ fontWeight: 'bold' }}>Hira Hospital</p>
</Col>


        {/* Second Column */}
        <Col md={4}>
        <br/>
        <br/>
        
          <h5 className="text-black" style={{ fontWeight: 'bold' }}>Hours</h5>
          <br/>
          <p className="text-black">
            Monday: 9:00 - 18:00 <br />
            Tuesday: 9:00 - 18:00 <br />
            Wednesday: 9:00 - 18:00 <br />
            Thursday: 9:00 - 18:00 <br />
            Friday: 9:00 - 18:00
          </p>
        </Col>

        {/* Third Column */}
        
        
        <Col md={4}>
        <br/>
        <br/>
        
        <h5 className="text-black" style={{ fontWeight: 'bold' }}>Contact</h5>
        <br/>
          <p className="text-black">
            <PhoneFilled className='fs-5 px-1' />(071) 5614111 <br />
            <MailFilled className='fs-5 px-1' />info@hira.com <br />
            <EnvironmentFilled className='fs-5 px-1' />Sukkur, Pakistan
          </p>
        </Col>
      </Row>
    </Container>
  );
}
