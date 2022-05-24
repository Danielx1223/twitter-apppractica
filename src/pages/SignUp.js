import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';

export default function SignUp() {
  return (
    <>
      <h3 className='mt-2'>New user</h3>
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

        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter your email' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your Name' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Lastname</Form.Label>
          <Form.Control type='text' placeholder='Enter your Lastname' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Sign Up
        </Button>
      </Form>
    </>
  );
}
