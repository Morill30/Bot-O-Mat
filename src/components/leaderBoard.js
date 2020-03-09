import React from "react";
import "../style/home.css";
import "../style/leaderBoard.css";
import RobotPane from "./robotPane";
import { useSelector } from "react-redux";

function LeaderBoard() {
  const robotAdder = useSelector(state => state.robotAdder);

  return (
    <div className="container">
      <div className="header">
        <h3>Leader board!</h3>
      </div>
      <div className="scroll-pane">
        {robotAdder.leaderBoardArray.map(robot => (
          <RobotPane key={robot.id} id={robot.id} robotInfo={robot}></RobotPane>
        ))}
      </div>
      <div className="header bottom">
        <h3>Tasks are assign randomly</h3>
      </div>
    </div>
  );
}

export default LeaderBoard;
