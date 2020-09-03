import React from "react";
import List from ".";



export default {
  title: 'List',
  component: List,
};


const Template = (args) => <List {...args} />;

export const EmptyList = Template.bind({});

EmptyList.args = {
  todoList: []
}

export const FillList = Template.bind({});

FillList.args = {
  todoList: [
    { text: "item 1", checked: true },
    { text: "item 2", checked: false },
    { text: "item 3", checked: false },
    { text: "item 4", checked: false },
    { text: "item 5", checked: false },

  ]
}
