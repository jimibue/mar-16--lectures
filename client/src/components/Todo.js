import React from "react";

const Todo = ({ id, complete, name }) => (
  <div>
    {name}
    <p>{id}</p>
  </div>
);

export default Todo