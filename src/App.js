import React, { Suspense } from 'react'; // useSTATE para mantener estados dentro app
import { Col, Container, Row } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import Header from './containers/Header';

// import Create from './pages/Create';
// import Home from './pages/Home';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const Home = React.lazy(() => import('./pages/Home')); //para que todo no se vaya a un solo bundle (archivo)
const Create = React.lazy(() => import('./pages/Create'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const SingleTweet = React.lazy(() => import('./pages/SingleTweet'));

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Suspense
            fallback={
              <div>
                <center>
                  <Spinner animation='grow' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </Spinner>
                </center>
              </div>
            }
          >
            <Col xs={15}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tweets/:id' element={<SingleTweet />} />
                <Route path='/create' element={<Create />} />
                <Route path='/signIn' element={<SignIn />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='*' element={<Home />} />
              </Routes>
            </Col>
          </Suspense>
        </Row>
      </Container>
    </>
  );
}
