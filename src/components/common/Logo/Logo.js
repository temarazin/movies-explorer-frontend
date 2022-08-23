import { Link } from "react-router-dom";
import logoImage from "../../../images/logo.svg";

import "./Logo.css";

function Logo({ className = "logo" }) {
  return (
    <Link to="/" className={className}>
      <img src={logoImage} alt="" className="logo__link" />
    </Link>
  );
}

export default Logo;
