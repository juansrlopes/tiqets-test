import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = props => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="input-search"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
