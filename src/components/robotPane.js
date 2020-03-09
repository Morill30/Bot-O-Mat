import React, { Component } from "react";
import Expand from "react-expand-animated";

class RobotPane extends Component {
  state = {
    progressbar: 0,
    open: false,
    completed: [false, false, false, false, false],
    score: 0
  };

  componentDidMount() {
    this.doTasks();
  }

  render() {
    return (
      <React.Fragment>
        <div className="white-pane card">
          <div className=" bg-primary blue-header">
            <p className="vertical-center">
              Robot Type: {this.props.robotInfo.type}{" "}
            </p>
            <div className="score">Score {this.state.score}</div>
          </div>

          <div className=" bg-light" style={{ color: "dark", height: "30px" }}>
            <p>Robot Name: {this.props.robotInfo.name} </p>
          </div>
          <div className=" bg-light" style={{ color: "dark", height: "30px" }}>
            <p>Tasks Completed: {this.state.progressbar} out of 5</p>
          </div>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped bg-success"
              role="progressbar"
              style={{ width: this.state.progressbar * 20 + "%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="card taskCard">
          <div className="sm-header" onClick={this.toggle}>
            <p>Tasks Assigned:</p>
          </div>

          <Expand open={this.state.open}>
            <div className="card sub-card">
              {this.props.robotInfo.tasks.map((tasks, index) => (
                <p key={index + this.props.robotInfo.name}>
                  {tasks.description} : {tasks.eta / 1000} secs{" "}
                  {this.state.completed[index] === true ? (
                    <React.Fragment>&#10004;</React.Fragment>
                  ) : (
                    <React.Fragment>
                      <i className="fa fa-refresh fa-spin"></i>
                    </React.Fragment>
                  )}
                </p>
              ))}
            </div>
          </Expand>
        </div>
      </React.Fragment>
    );
  }
  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  doTasks = () => {
    let thes = this;
    //State to be changed
    let progressbar = 0;
    let timeForTasks = thes.props.robotInfo.tasks[0].eta;
    let completed = this.state.completed;
    let score = 0;

    //Check all task and complete in given time
    for (let i = 0; i < 5; i++) {
      if (i !== 0) {
        timeForTasks = thes.props.robotInfo.tasks[i].eta + timeForTasks;
      }
      //asynchronosly wait for all the tasks to complete
      setTimeout(function() {
        progressbar = thes.state.progressbar + 1;
        completed[i] = true;
        if (thes.props.robotInfo.tasks[i].type === thes.props.robotInfo.type) {
          score++;
        }
        thes.setState({
          progressbar: progressbar,
          completed: completed,
          score: score
        });
      }, timeForTasks);
    }
  };
}

export default RobotPane;
