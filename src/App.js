import React, { useState } from "react";
import Add from "./componets/input-add";
import List from "./componets/list";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const add = (text) => setTodoList([{ text, checked: false }, ...todoList]);
  const toggle = (index) => {
    const newData = todoList.concat();
    const item = newData[index];
    item.checked = !item.checked;
    setTodoList(newData);
  };

  return (
    <div className="App">
      <Add onAdd={add} />
      <List todoList={todoList} onChecked={toggle} />
    </div>
  );
}

export default App;
