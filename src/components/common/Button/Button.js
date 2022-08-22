import "./Button.css";

function Button({ children, className = "button", link = false, ...props }) {

  if (link) {
    return (
      <a href={link} className={className} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={className} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
