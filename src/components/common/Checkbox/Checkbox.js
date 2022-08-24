import "./Checkbox.css";

function Checkbox({ className, children, ...props }) {
  return (
    <label className={className || "checkbox"}>
      <input type="checkbox" className="checkbox__input" {...props} />
      <span className="checkbox__pseudo"></span>
      <span className="checkbox__text">{children}</span>
    </label>
  );
}

export default Checkbox;
