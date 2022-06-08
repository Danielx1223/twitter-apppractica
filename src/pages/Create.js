import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createTweet } from '../api/tweets';

export default function Create() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  async function onSubmit(event) {
    event.preventDefault();
    const { content } = event.target.elements;

    try {
      setError('');
      await createTweet({
        content: content.value,
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
          <Form.Label>Content</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Leave a comment here'
            name='content'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Tweet
        </Button>
      </Form>
    </>
  );
}
