function Form(props) {
  const { children, className } = props;

  return (
    <form className={className || 'form'}>
      {children}
    </form>
  )
}

export default Form;
