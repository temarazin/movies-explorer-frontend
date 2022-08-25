import { Link } from "react-router-dom";
import "./Button.css";

function Button({
  children,
  className = "button",
  elemType = "button",
  link = "/",
  ...props
}) {
  switch (elemType) {
    case "button":
      return (
        <button className={className} {...props}>
          {children}
        </button>
      );
    case "link":
      return (
        <Link to={link} className={className} {...props}>
          {children}
        </Link>
      );
    case "a":
      return (
        <a href={link} className={className} {...props}>
          {children}
        </a>
      );
    default:
      return false;
  }
}

export default Button;
