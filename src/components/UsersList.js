import React from 'react';
import User from './User';
import Card from './UI/Card';
import './UsersList.css';

export default function UsersList(props) {
  return (
    <Card className="output-container">
      {props.usersList.map(user => (
        <User key={user.id} id={user.id} onDelete={props.onDeleteUser}>
          {`${user.name} (${user.age})`}
        </User>
      ))}
    </Card>
  );
}
