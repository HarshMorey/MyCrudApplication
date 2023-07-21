import React from 'react';
import Create from './Create.js';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
export default function Btn() {
  const CreateData = () => {
    <Create />;
  };
  return (
    <>
      <Link to="/create">
        <Button basic color="teal" onClick={CreateData}>
          Create Your Data Data
        </Button>
      </Link>
    </>
  );
}
