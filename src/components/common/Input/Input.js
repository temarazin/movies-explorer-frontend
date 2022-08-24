import "./Input.css";

function Input({ className = "input", label, ...props }) {
  return label ? (
    <label className="input__label">
      <span className="input__text">{label}</span>
      <input className={className} {...props} />
    </label>
  ) : (
    <input className={className} {...props} />
  );
}

export default Input;
