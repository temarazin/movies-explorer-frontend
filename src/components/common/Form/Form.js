import './Form.css';

function Form({children, className = 'form', ...props}) {

  return (
    <form className={className} {...props}>
      {children}
    </form>
  )
}

export default Form;
