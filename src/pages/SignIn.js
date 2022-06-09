import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api/users';

export default function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  async function onSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    try {
      setError('');
      await signIn({
        username: username.value,
        password: password.value,
      });

      navigate('/');
    } catch (err) {
      setError(err);
    }
  }
  return (
    <>
      {error && ( // si esto es verdadero muestra alerta, sino no
        <div class='alert alert-danger' role='alert'>
          {error}
        </div>
      )}
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            name='username'
            placeholder='Enter your username'
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Password'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Sign In
        </Button>
      </Form>
    </>
  );
}
