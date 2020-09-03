import React from "react";
import Add from "./componets/input-add";
import List from "./componets/list";
import "./App.css";
import useTodo from "./useToDo";

function App({add, todoList, toggle}) {
  return (
    <div className="App">
      <Add onAdd={add} />
      <List todoList={todoList} onChecked={toggle} />
    </div>
  );
}

const conectedApp = () => <App {...useTodo()} />

export default conectedApp;
