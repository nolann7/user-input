import './ErrorModal.css';
import Card from './Card';
import Button from './Button';
function ErrorModal(props) {
  return (
    <>
      <div className="backdrop" onClick={props.onCancel} />
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
    </>
  );
}

export default ErrorModal;
