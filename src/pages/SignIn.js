import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';

export default function SignIn() {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control type='text' placeholder='Enter your username' />
        <Form.Text className='text-muted'></Form.Text>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Sign In
      </Button>
    </Form>
  );
}