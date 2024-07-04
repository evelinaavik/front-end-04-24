import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import jonPNG from '../../components/Images/jon.png';
// import aksharPNG from '../../components/Images/akshar.png';
// import scottPNG from '../../components/Images/scott.png';

function Main() {
  return (

//  <div style={{ display: 'block', width: 990, padding: 20, margin: 2 }}> 
// style={{ backgroundColor: 'white'}}
// <h4>React-Bootstrap Container Component</h4>
// style={{display: 'flex', padding: '20px',}
    
    <Container >
    <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
  </Container>
// </div>  
);
}

export default Main