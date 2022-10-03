import React from 'react';
import { useState } from 'react';
import './InputForm.css';
import Card from './UI/Card';
import ErrorModal from './UI/ErrorModal';
import Button from './UI/Button';

export default function InputForm(props) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const userInputNameChangeHandler = function (event) {
    if (event.target.value.trim().length > 0) {
    }
    setEnteredName(event.target.value);
  };
  const userInputAgeChangeHandler = function (event) {
    if (event.target.value.trim().length > 0) {
    }
    setEnteredAge(event.target.value);
  };
  const FormSubmitHandler = function (event) {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name or age (non-empty values)',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid Age (more than 0)',
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName('');
    setEnteredAge('');
  };
  const cancelModuleErrorHandler = function (props) {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.message}
          onCancel={cancelModuleErrorHandler}
        />
      )}
      <Card>
        <form className="form-input" onSubmit={FormSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={userInputNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={userInputAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}
