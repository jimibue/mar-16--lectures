import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "semantic-ui-react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import axios from "axios";

class App extends React.Component {
  state = {
    todos: [],
    hasError: false,
    loading: true
  };

  componentDidMount() {
    //make api call here to get items
    axios
      .get("api/items")
      .then(response => {
        this.setState({
          todos: response.data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          hasError: true,
          loading: false
        });
      });
  }

  addTodo = todo => {
    // make an api call to update database with the new item
    axios
      .post("api/items", {
        name: todo.name,
        complete: false
      })
      .then(res => {
        this.setState({
          todos: [res.data, ...this.state.todos]
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    // update state to show the newly added item
    console.log("todo");
    console.log(todo);
  };

  updateTodo = id => {
    // make an api call to update todo
    // update state
    console.log("updateTodo clicked");
    console.log(id);
    axios
      .patch(`api/items/${id}`, {
        // name would go here but we would need to change our backend
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteTodo = id => {
    // make an api call to delete todo from database
    // update state/ui
    console.log("deleteTodo clicked");
    console.log(id);
    //
    axios
      .delete(`api/items/${id}`)
      .then(res => {
        // keep all items except the one that was deleted and stor in new array
        const newTodos = this.state.todos.filter(item => item.id !== id);
        this.setState({
          todos: newTodos
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <Container>
        <TodoForm addTodo={this.addTodo} />
        <br />
        {this.state.loading && "Loading"}
        {this.state.hasError && "ERROR OCCURED OPEN CONSOLE"}
        <TodoList
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
          todos={this.state.todos}
        />
      </Container>
    );
  }
}

export default App;
