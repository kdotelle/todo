import React, { Component } from "react";
import uuid from "uuid/v4";

//one input for todo item
//button to submit
//pass new state up to parent TodoList
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      complete: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTask = { ...this.state, id: uuid(), completed: false };
    this.props.addTask(newTask);
    this.setState({
      task: "",
      complete: false,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">To Do:</label>
          <input
            type="text"
            id="task"
            onChange={this.handleChange}
            value={this.state.task}
            placeholder="New Todo"
          />
          <button>Add to List</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
