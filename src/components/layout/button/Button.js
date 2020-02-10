import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = props => {
  return (
    <button className="btn btn-submit" onClick={props.onButtonClick}>
      {props.buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default Button;
