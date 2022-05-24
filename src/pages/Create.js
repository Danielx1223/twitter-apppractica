import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Create() {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Content</Form.Label>
        <Form.Control as='textarea' placeholder='Leave a comment here' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Tweet
      </Button>
    </Form>
  );
}
