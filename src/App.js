import React from 'react'; // useSTATE para mantener estados dentro app
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Link href='#' to='/' className='navbar-brand'>
            Twitter
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link to='/create' className='nav-link'>
                Create
              </Link>
            </Nav>
            <Nav>
              <Link to='/signUp' className='nav-link'>
                Sign Up
              </Link>
              <Link to='/signIn' className='nav-link'>
                Sign In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={15}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create' element={<Create />} />
              <Route path='/signIn' element={<SignIn />} />
              <Route path='/signUp' element={<SignUp />} />
            </Routes>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
