import React from 'react';
import { List } from '../containers/list';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Link to='/create' className='btn btn-primary mt-2'>
        Tweet
      </Link>
      <List />
    </>
  );
}
