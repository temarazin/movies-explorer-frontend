import "./Content.css";

function Content({ children, className }) {
  return <main className={className || "content"}>{children}</main>;
}

export default Content;
