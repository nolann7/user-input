import React from 'react';
import './User.css';
function User(props) {
  const deleteHandler = function () {
    props.onDelete(props.id);
  };
  return (
    <div className="output__added-user" onClick={deleteHandler}>
      {props.children}
    </div>
  );
}

export default User;
