import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { saveHabit, saveTask } from "../actions/task";

class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      startDate: ""
    };
  }

  goBack = () => {
    this.props.history.goBack();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSaveTask = () => {
    this.props.saveTask({
      name: this.state.name,
      startDate: moment().format("YYYY-MM-D"),
      days: [moment().format("YYYY-MM-D")]
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <form className="form">
        <div>
          <label>
            Enter name for your Task 
            <input
              type="text"
              className="input"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="form-buttons">
          <Link
            className="button button--danger"
            onClick={this.goBack}
            to={window.location.hash}
          >
            Close
          </Link>
          
          <button
            className="button button--primary"
            type="button"
            onClick={this.handleSaveTask}
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  saveTask: data => dispatch(saveTask(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskForm);
