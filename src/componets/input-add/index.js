import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

function InputAdd({ onAdd }) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className={"card input-add-wrapper"}>
      <input
        className={"input-add"}
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input
        className={"button-add"}
        type="button"
        value={"Agregar"}
        onClick={() => {
          onAdd(newTodo);
          setNewTodo("");
        }}
      />
    </div>
  );
}

InputAdd.defaultProps = {
  onAdd: () => {},
};

InputAdd.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default InputAdd;
