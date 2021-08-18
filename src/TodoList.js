import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid/v4";

//hold state
//render the form and todo items as a list
//list is an array
//what changes: items on the list, status (complete or pending?)
//pass the items to the form as props
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { task: "Wash Clothes", complete: false, id: uuid() },
        { task: "Study", complete: false, id: uuid() },
      ],
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  addTask(newTask) {
    this.setState({
      items: [...this.state.items, newTask],
    });
  }

  removeTask(id) {
    this.setState({
      items: this.state.items.filter((task) => task.id !== id),
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.items.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ items: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.items.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    this.setState({
      items: updatedTodos,
    });
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <Todo
            task={item.task}
            remove={this.removeTask}
            key={item.id}
            id={item.id}
            updateTodo={this.update}
            completed={item.complete}
            toggleTodo={this.toggleCompletion}
          />
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.renderItems()}
        <NewTodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
