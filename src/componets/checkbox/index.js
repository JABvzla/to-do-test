import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
function Checkbox({ checked }) {
  return <div className={`checkbox checkbox-${checked}`} />;
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
