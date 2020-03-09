import robotAdderReducer from "./robotAdderRed";

const defaultValue = {};

const leaderBoardReducer = (
  state = { robotArray: [defaultValue] },
  // state = { number: 1, robotArray: [{ id: 1, type: defaultType, name: "" }] },
  //state = { number: 1, robotArray: [new bot.UnipedalRobot({id:1,type:defaultType,name="",tasks=[]})] },
  action
) => {
  switch (action.type) {
    case "onAddAll":
      //   const val = state.robotAdderReducer.robotArray;
      //   console.log(val);
      return state;
  }
};

export default leaderBoardReducer;
