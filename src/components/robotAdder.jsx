import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onTextChange, onTextonSelectedDropdown } from "../actions";
const bot = require("../models/robot");

function RobotAdder(props) {
  // console.log("im id", this.props.id);
  const robotAdder = useSelector(state => state.RobotAdderReducer);
  const dispatch = useDispatch();
  console.log(robotAdder.robotArray);
  return (
    <div className="sm-container">
      <select
        className="custom-select dropdowns"
        id="inputGroupSelect01"
        onChange={event => {
          dispatch(onTextonSelectedDropdown({ id: props.id, event: event }));
        }}
      >
        <option value={bot.UnipedalRobot.type}>Unipedal Robot</option>
        <option value={bot.BipedalRobot.type}>Bipedal Robot</option>
        <option value={bot.QuadrupedalRobot.type}>Quadrupedal Robot</option>
        <option value={bot.RadialRobot.type}>Radial Robot</option>
        <option value={bot.ArachnidRobot.type}>Arachnid Robot</option>
        <option value={bot.AeroNauticalRobot.type}>Aeronautical Robot</option>
      </select>

      <div className="input-group mb-3 texter">
        <input
          type="text"
          className="form-control"
          placeholder="Bot's name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={event =>
            dispatch(onTextChange({ id: props.id, event: event }))
          }
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            Bot name
          </span>
        </div>
      </div>
    </div>
  );
}

export default RobotAdder;
