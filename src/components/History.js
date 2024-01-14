import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let habits = JSON.parse(window.localStorage.getItem("habits"));
    let habit = habits.filter(
      item => item.id === parseInt(this.props.match.params.id)
    )[0];

    let daysRecorded30 = habit.days;
    let dayGrids = [];
    let dayGridinYear = [];
    let daysRecorded365 = [...daysRecorded30];
    let taskCount = daysRecorded365.length;


    for (let i = 0; i < 30; i++) {
      let dayGridDate = moment()
        .subtract(i, "days")
        .format("YYYY-MM-D");
      if (dayGridDate.toString() === daysRecorded30[daysRecorded30.length - 1]) {
        dayGrids.unshift(<div className="day day--active" key={i} text={i}/>);
        daysRecorded30.splice(daysRecorded30.length - 1, 1);
      } else {
        dayGrids.unshift(<div className="day" key={i} />);
      }
    }



    for (let i = 0; i < 365; i++) {
      let dayGridDate= moment()
        .subtract(i, "days")
        .format("YYYY-MM-D");
      if (dayGridDate.toString() === daysRecorded365[daysRecorded365.length - 1]) {
        dayGridinYear.unshift(<div className="day day--active" key={i} text={i}/>);
        daysRecorded365.splice(daysRecorded365.length - 1, 1);
      } else {
        dayGridinYear.unshift(<div className="day" key={i} />);
      }
    }
    
    
      
    

    
    return (
      <div className="history">
        
        <div className="history__header">
          <div className="task_name">
            <div className="habit__name habit__name--large">{habit.name}</div>
        
          </div>
          <span className="history__close">
            <Link to="/" className="button button--danger">
              Back
            </Link>
          </span>

        </div>
        

      
        <p className="history__duration">Number of times You have done this task:         
            <b className="task_count_summary">{taskCount}</b>
        </p>

        <div className="history__header">
          <div className="history__duration">Last 30 Days</div>
        </div>
        <div className="days">{dayGrids}</div>
        
        <div className="history__header">
          <div className="history__duration">Last 365 Days</div>
        </div>
        <div className="days">{dayGridinYear}</div>
      </div>
    );
  }
}
