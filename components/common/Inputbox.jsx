import React, { useId } from "react";

function Inputbox(props) {
  const { label, type, value, error, className, inputclassName, placeholder, onChange, min, max, onBlur } = props;
  let inputId = useId();

  let onChangeInput = (evt) => {
    let val = evt.target.value;

    if (type == "number" && val) {
      if (min) {
        if (val < min) {
          val = min;
        }
      } else if (max) {
        if (val >= max) {
          val = max;
        }
      }
    }
    onChange && onChange(val);
  };

  return (
    <div className={`${className}`}>
      {label ? (
        <label htmlFor={inputId} className="form-label" style={{ marginBottom: "2px" }}>
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        onBlur={onBlur}
        type={type}
        value={value || ""}
        onChange={onChangeInput}
        placeholder={placeholder}
        className={`form-control ${inputclassName}`}
        id={inputId}
      />
      {error ? <div className="text-danger">{error}</div> : ""}
    </div>
  );
}

export default Inputbox;
