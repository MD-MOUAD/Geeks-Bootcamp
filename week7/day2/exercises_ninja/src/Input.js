import React from "react";

const Input = ({ name, label, value, onChange, error, type = "text" }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? "error-input" : ""}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
