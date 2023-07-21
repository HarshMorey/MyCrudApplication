import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Read from './Read.js';
export default function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const readData = () => {
    <Read />;
  };

  const postData = () => {
    fetch('https://64b6c26fdf0839c97e16150f.mockapi.io/MyData', {
      method: 'POST',
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        checkbox: checkbox,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    setFirstName('');
    setLastName('');
    setCheckbox(false);
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Title</label>
          <input
            value={firstName}
            placeholder="Enter Title"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            value={lastName}
            placeholder="Enter Details"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            checked={checkbox}
            label="Completed Or Not"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button basic color="green" onClick={postData} type="submit">
          Submit
        </Button>
        <Link to="/read">
          <Button basic color="olive" onClick={readData}>
            Read Todos
          </Button>
        </Link>
      </Form>
    </div>
  );
}
