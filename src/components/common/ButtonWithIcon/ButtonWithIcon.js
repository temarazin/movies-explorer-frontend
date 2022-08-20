import "./ButtonWithIcon.css";

function ButtonWithIcon(props) {
  const { children, className, link = false } = props;

  if (link) {
    return <a href={link} className={className}>{children}</a>
  } else {
    return <button className={className}>{children}</button>
  }

}

export default ButtonWithIcon;
