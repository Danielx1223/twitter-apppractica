import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Tweet({ user = {}, date, content }) {
  return (
    <Card style={{ margin: '12px 0' }}>
      <Card.Body>
        <Card.Title>
          {user.firstname} {user.lastname} - @{user.username}{' '}
        </Card.Title>
        <Card.Subtitle>Fecha de creación: {date} </Card.Subtitle>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}
