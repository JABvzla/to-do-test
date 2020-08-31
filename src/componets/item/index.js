import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import CheckBox from "../checkbox";

function Item({ text, checked, onChecked }) {
  return (
    <div className="item" onClick={onChecked}>
      <div>{text}</div>
      <CheckBox checked={checked} />
    </div>
  );
}

Item.defaultProps = {
  text: "",
  checked: false,
  onChecked: () => {},
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChecked: PropTypes.func.isRequired,
};

export default Item;
