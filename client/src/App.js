import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from 'semantic-ui-react'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  state = { todos: [{ name: "todo1", complete: false }] };

  componentDidMount() {
    //make api call here to get items
  }

  addTodo = () => {
    // make an api call to update database with the new item
    // update state to show the newly added item
  };

  updateTodo = () => {
    // make an api call to update todo
    // update state
  };

  deleteTodo =()=>{
    // make an api call to delete todo from database
    // update state/ui
  }
  render() {
    return (
      <Container>
        <TodoForm />
        <br/>
        <TodoList  todos={this.state.todos} />
      </Container>
    );
  }
}

export default App;
