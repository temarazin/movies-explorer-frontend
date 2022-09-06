import "./Input.css";

function Input({ className = "input", label, value = '', errors, ...props }) {
  return label ? (
    <label className="input__label">
      <span className="input__text">{label}</span>
      <input className={className} value={value} {...props} />
      <span className="input__error">{errors}</span>
    </label>
  ) : (
    <input className={className} value={value} {...props} />
  );
}

export default Input;
