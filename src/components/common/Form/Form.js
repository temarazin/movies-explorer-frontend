import './Form.css';

function Form(props) {
  const { children, className = "form" } = props;

  return (
    <form className={className}>
      {children}
    </form>
  )
}

export default Form;
