import React from 'react';
import ReactDOM from 'react-dom';
import './ErrorModal.css';
import Card from './Card';
import Button from './Button';

function ErrorModal(props) {
  const Backdrop = props => {
    return <div className="backdrop" onClick={props.onCancel} />;
  };
  const Modal = props => {
    return (
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>

        <div className="content">
          <p>{props.content}</p>
        </div>
        <footer className="footer">
          <Button onClick={props.onCancel}>Okay</Button>
        </footer>
      </Card>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCancel={props.onCancel} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          content={props.content}
          onCancel={props.onCancel}
        />,
        document.getElementById('layouts-root'),
      )}
    </>
  );
}

export default ErrorModal;
