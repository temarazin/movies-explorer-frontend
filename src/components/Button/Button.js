import "./Button.css";

function Button(props) {
  const { children, className, link = false } = props;

  if (link) {
    return <a href={link} className={className}>{children}</a>
  } else {
    return <button className={className}>{children}</button>
  }

}

export default Button;
