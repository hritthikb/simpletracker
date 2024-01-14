import React, { Component } from "react";
import Task from "./Task";

import "../styles/App.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
      isHistoryShown: false,
      tasks: []
    };
  }

  componentDidMount() {
    this.setState({
      tasksFromStorage: JSON.parse(localStorage.getItem("tasks"))
    });
  }

  updateTasks = tasks => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    this.setState({
      tasks
    });
  };

  render() {
    let tasks = this.state.tasks || [];
    let returnedComponent;
    if (tasks.length === 0) {
      returnedComponent = (
        <div className="default-display">There are No tasks to display!</div>
      );
    } else {
      returnedComponent = (
        <div className="tasks">
          {tasks.map(tasks => {
            return (
              <Habit
                key={tasks.id}
                habit={tasks}
                updateHabits={this.updateTasks}
              />
            );
          })}
        </div>
      );
    }

    return returnedComponent;
  }
}
