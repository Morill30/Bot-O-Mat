import React from "react";
import "../style/home.css";
import "../App.css";
import RobotAdder from "./robotAdder";
import { connect } from "react-redux";
import { increment, decrement, onAddAll } from "../actions";

// import Dropdown from "react-bootstrap/Dropdown";

const bot = require("../models/robot");
let newRobot = new bot.UnipedalRobot(1);

console.log("im uni:", newRobot);

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="header">
            <h3>
              Add the desired <code>Robots {this.props.numberRA}</code>
            </h3>
            <button
              className="btn bg-success btn-sm mybtn"
              onClick={() => this.props.dispatch(increment())}
            >
              +
            </button>
            <button
              className="btn bg-danger  btn-sm mybtn"
              onClick={() => this.props.dispatch(decrement())}
            >
              -
            </button>
          </div>

          <div className="scroll-pane">
            {this.props.robotArray.map(robot => (
              <RobotAdder key={robot.id} id={robot.id}></RobotAdder>
            ))}
          </div>
          <div className="header bottom">
            <h3>
              Add all <code>Robots </code>
            </h3>
            <button
              className="btn btn-sm bg-warning m-2"
              style={{ color: "white", fontWeight: "700" }}
              onClick={() => this.props.dispatch(onAddAll())}
            >
              Add all
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = state => {
  return {
    numberRA: state.RobotAdderReducer.numberRA,
    numberLB: state.RobotAdderReducer.numberLB,
    robotArray: state.RobotAdderReducer.robotArray,
    leaderBoardArray: state.RobotAdderReducer.leaderBoardArray
  };
};

// const mapDispatchToProps = dispatch => ({});

export default connect(mapStatesToProps)(Home);
