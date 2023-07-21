import { Table, Button } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Read.css';

export default function Read() {
  const [ApiData, setApiData] = useState([]);

  const getData = () => {
    fetch('https://64b6c26fdf0839c97e16150f.mockapi.io/MyData')
      .then((response) => response.json())
      .then((getData) => setApiData(getData));
  };

  const onDelete = (id) => {
    fetch(`https://64b6c26fdf0839c97e16150f.mockapi.io/MyData/${id}`, {
      method: 'DELETE',
    }).then(() => getData());
  };

  const setData = (data) => {
    console.log(data);
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox);
  };

  useEffect(() => {
    fetch('https://64b6c26fdf0839c97e16150f.mockapi.io/MyData')
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);
  return (
    <div className="main">
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Fist Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checkbox</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {ApiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? 'Checked' : 'Unchecked'}
                </Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button primary onClick={() => setData(data)}>
                      Update
                    </Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button basic color="red" onClick={() => onDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
