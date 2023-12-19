import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import EmeIcon from '../images/emergency-img.png';
import PedIcon from '../images/pediatrics-img.png';
import ObsIcon from '../images/gynecology-img.png';
import CarIcon from '../images/cardiology-img.png';
import NeuIcon from '../images/neurology-img.png';
import PsyIcon from '../images/pyschiatry-img.png';

export default function Departments() {
  return (
    <Container fluid className="text-center" style={{ background: 'linear-gradient(to right, #4BBDF2, #2359F4)', paddingTop: '4rem' }}>
      <h2 className="fw-bold fs-1 pb-5" style={{color:'#BE2E3E'}}>Departments</h2>

      <Row xs={1} md={6} className="g-4 pb-5">
        {[
          { icon: EmeIcon, title: 'Emergency Department' },
          { icon: PedIcon, title: 'Pediatric Department' },
          { icon: ObsIcon, title: 'Obstetrics and Gynecology Department' },
          { icon: CarIcon, title: 'Cardiology Department' },
          { icon: NeuIcon, title: 'Neurology Department' },
          { icon: PsyIcon, title: 'Psychiatry Department' },
        ].map((department, index) => (
          <Col key={index}>
            <Card className="mx-auto h-100">
              <Card.Img variant="top" src={department.icon} width={'80%'} />
              <Card.Body>
                <Card.Text className="text-center pt-3 fw-bold" style={{ color: '#002B9A' }}>
                  {department.title}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}




// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import { Container, Row, Col } from 'react-bootstrap';

// const Departments = ({ data }) => {
//   return (
//     <Container fluid className="text-center" style={{ background: 'linear-gradient(to right, #4BC0F2, #2359F4)', paddingTop: '4rem' }}>
//       <h2 className="fw-bold fs-1 text-white p-5">Departments</h2>

//       <Row xs={1} md={6} className="g-4 pb-5">
//         {data.map((department, index) => (
//           <Col key={index}>
//             <Card className="mx-auto h-100">
//               <Card.Img variant="top" src={`../images/${department.icon}`} width={'80%'} />
//               <Card.Body>
//                 <Card.Text className="text-center pt-3 fw-bold" style={{ color: '#002B9A' }}>
//                   {department.title}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default Departments;