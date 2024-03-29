import React from "react";
import "./form-input.scss";

const FormInput = (handleChange, label, ...otherProps) => (
  <div>
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? <label className={`form-input-label`}></label> : null}
  </div>
);
