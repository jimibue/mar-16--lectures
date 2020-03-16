import React from "react";
import { Form, TableHeader } from "semantic-ui-react";

export default class TodoForm extends React.Component {
  state = { name: "" };

  handleChange = e => {
    this.setState({name: e.target.value})
  };
  handleSubmit = e => {
    e.preventDefault()
    // we need some to get access to to our todos
    this.setState({name:''})
  };

  render() {
    return (
      <Form onSubmit>
        <Form.Input
          label="Todo"
          placeholder="Add A Todo"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}
