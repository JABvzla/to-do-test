import { useState } from "react";

export default function useToDo() {
  const [todoList, setTodoList] = useState([]);
  const add = (text) => {
    if (!text) return;
    setTodoList([{ text, checked: false }, ...todoList]);
  };
  const toggle = (index) => {
    const newData = todoList.concat();
    const item = newData[index];
    item.checked = !item.checked;
    setTodoList(newData);
  };

  return {
    todoList,
    add,
    toggle,
  }
}
