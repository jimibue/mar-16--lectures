import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <Todo key={todo.id} name={todo.name} />
    ))}
  </div>
);

export default TodoList;
