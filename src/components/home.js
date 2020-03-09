import React from "react";
import "../style/home.css";
import "../App.css";
import RobotAdder from "./robotAdder";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, onAddAll } from "../actions";
// import Dropdown from "react-bootstrap/Dropdown";

const bot = require("../models/robot");
let newRobot = new bot.UnipedalRobot(1);

console.log("im uni:", newRobot);

function Home() {
  //   state = {};

  const robotAdder = useSelector(state => state.robotAdder);
  const dispatch = useDispatch();
  console.log("le boa", robotAdder.leaderBoardArray);
  return (
    <div>
      <div className="container">
        <div className="header">
          <h3>
            Add the desired <code>Robots {robotAdder.numberRA}</code>
          </h3>
          <button
            className="btn bg-success btn-sm mybtn"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className="btn bg-danger  btn-sm mybtn"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>

        <div className="scroll-pane">
          {robotAdder.robotArray.map(robot => (
            <RobotAdder
              key={robot.id}
              id={robot.id} //onDelete={onDelete
            >
              {/* <h4>Counter #{counter.id}</h4> */}
            </RobotAdder>
          ))}
        </div>
        <div className="header bottom">
          <h3>
            Add all <code>Robots </code>
          </h3>
          <button
            className="btn btn-sm bg-warning m-2"
            style={{ color: "white", fontWeight: "700" }}
            onClick={() => dispatch(onAddAll())}
          >
            Add all
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
