import { Card } from 'antd';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ResIcon from '../images/respect.png'
import ValuesIcon from '../images/ValuesIcon.png'
import ExcIcon from '../images/Excellence.png'
import TeamIcon from '../images/teamwork.png'
import CompIcon from '../images/compassion.png'
import IntIcon from '../images/integrity.png'

export default function Values() {
  return (
    <Container>
      <h2 className="fw-bold text-center fs-1 p-4 mt-5" style={{color:'#BE2E3E'}}>Our Values</h2>

      <Row className='my-5'>
        <Col>
          <Card 
            title={ 
              <div> <Image src={ResIcon} className='m-2'/> Respect</div>
            }  
            headStyle={{ background: '#BEDCFF', color: '#285DBE', fontSize: '2.5rem'}}                
            className='mx-auto h-100 fs-4 border-primary my-3'
          >
            We treat all individuals with respect and dignity.
            We believe that every person deserves to be treated with compassion and kindness 
          </Card>
        </Col>
        <Col>
          <Card className='mx-auto h-100 d-flex align-items-end justify-content-center mb-3'>
            <Image src={ValuesIcon} style={{ margin: '15px' }} />
          </Card>
        </Col>
        <Col>
          <Card 
            title={ 
              <div> <Image src={ExcIcon} className='m-2'/> Excellence</div>
            }  
            headStyle={{ background: '#BEDCFF', color: '#285DBE', fontSize: '2.5rem'}}                
            className='mx-auto h-100 fs-4 border-primary my-3'
          >
            We are committed to providing excelllent care and services to our patients
          </Card>
        </Col>
      </Row>
      <Row className='mb-5 pb-5'>
        <Col>
          <Card 
            title={ 
              <div> <Image src={TeamIcon} className='m-2'/> Teamwork</div>
            }  
            headStyle={{ background: '#BEDCFF', color: '#285DBE', fontSize: '2.5rem'}}                
            className='mx-auto h-100 fs-4 border-primary my-3'
          >
            We believe in working collaboratively with our team  members 
            and other healthcare provide effective care to our patients
          </Card>
        </Col>
        <Col>
          <Card 
            title={ 
              <div> <Image src={CompIcon} className='m-2'/> Compassion</div>
            }  
            headStyle={{ background: '#BEDCFF', color: '#285DBE', fontSize: '2.5rem'}}                
            className='mx-auto h-100 fs-4 border-primary my-3'
          >
            We strive to create a welcoming and supportive environment that 
            puts our patient ease.
          </Card>
        </Col>
        <Col>
          <Card 
            title={ 
              <div> <Image src={IntIcon} className='m-2'/> Respect</div>
            }  
            headStyle={{ background: '#BEDCFF', color: '#285DBE', fontSize: '2.5rem'}}                
            className='mx-auto h-100 fs-4 border-primary my-3 '
          >
            We believe in practicing medicine with integrity and honesty. 
            We are  always put our patient interest first 
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
