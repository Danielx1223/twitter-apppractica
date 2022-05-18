import React from 'react'; // useSTATE para mantener estados dentro app
import { List } from './containers/list';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

export default function App() {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#'>Twitter</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#'>Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#'>Sign Up</Nav.Link>
              <Nav.Link href='#'>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={15}>
            <Button variant='primary'>Tweet</Button>
            <List />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
