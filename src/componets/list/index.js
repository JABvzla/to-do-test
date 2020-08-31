import React from "react";
import PropTypes from "prop-types";
import Item from "../../componets/item";

const EmtpyList = () => (
  <div style={{ color: "#aaa", textAlign: "center" }}>
    No hay nada por hacer :'(
  </div>
);

function List({ todoList, onChecked }) {
  if (!todoList?.length) return <EmtpyList />;

  return (
    <div className={"card"}>
      {todoList.map((item, index) => (
        <Item
          text={item.text}
          checked={item.checked}
          key={index}
          onChecked={() => onChecked(index)}
        />
      ))}
    </div>
  );
}

List.defaultProps = {
  todoList: [],
};

List.propTypes = {
  onChecked: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(() =>
    PropTypes.objectOf({
      text: PropTypes.string,
      checked: PropTypes.bool,
    })
  ),
};

export default List;
