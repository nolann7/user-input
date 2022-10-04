import React from 'react';
import { useState, useRef } from 'react';
import './InputForm.css';
import Card from './UI/Card';
import ErrorModal from './UI/ErrorModal';
import Button from './UI/Button';

export default function InputForm(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const FormSubmitHandler = function (event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
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
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };
  const cancelModuleErrorHandler = function () {
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}
