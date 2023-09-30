import React from "react";

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
  isRequired,
}) => {
  return (
    <>
      <div className="mb-1">
        <label htmlFor={labelFor} className={`form-label`}>
          {labelText} {isRequired && <span style={{ color: "red" }}>*</span>}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
          isRequired={isRequired}
        />
      </div>
    </>
  );
};

export default InputType;
