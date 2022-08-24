import { Link } from 'react-router-dom';

import './SimpleLink.css';

function SimpleLink({ children, className = "simple-link", ...props }) {
  return (
    <Link className={className} {...props}>{ children }</Link>
  );
}

export default SimpleLink;
