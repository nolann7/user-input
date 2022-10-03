import './Button.css';

function Button(props) {
  return (
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      className="button">
      {props.children}
    </button>
  );
}

export default Button;
