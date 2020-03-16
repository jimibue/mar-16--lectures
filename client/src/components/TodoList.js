import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, updateTodo }) => (
  <div>
    {todos.map(todo => (
      <Todo
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        key={todo.id}
        name={todo.name}
        complete={todo.complete}
        id={todo.id}
      />
    ))}
  </div>
);

export default TodoList;
