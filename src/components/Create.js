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
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button basic color="green" onClick={postData} type="submit">
          Submit
        </Button>
        <Link to="/read">
          <Button basic color="olive" onClick={readData}>
            Read Data
          </Button>
        </Link>
      </Form>
    </div>
  );
}
