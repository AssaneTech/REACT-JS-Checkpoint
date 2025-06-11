// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar bg="success" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" style ={{fontSize:'30px', fontFamily:'sans-serif'}}>My React App</Navbar.Brand>
            <Navbar.Toggle aria-controls="elements" />
            <Navbar.Collapse id="elements" style ={{fontSize:'25px', fontFamily:'sans-serif'}}>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1 className="text-center">This is My First Bootstrap react App <br/> I am happy </h1>

          <Row className="mt-4">
            <Col md={4} >
              <Card style={{height:'120px', background: 'green', textAlign:'center', color:'white', font: 'white'}}>
                <Card.Body >
                  <Card.Title >First Card</Card.Title>
                  <Card.Text >
                    My green card
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{height:'120px' , background: 'yellow', textAlign:'center', color:'green', font: 'white'}}>
                <Card.Body >
                  <Card.Title >Second Card</Card.Title>
                  <Card.Text>
                    TMy yellow card
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{height:'120px', background: 'red', textAlign:'center', color:'white', font: 'white'}}>
                <Card.Body >
                  <Card.Title > Third Card</Card.Title>
                  <Card.Text>
                    My red card
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
