const bot = require("../models/robot");

let defaultBot = new bot.UnipedalRobot(1);

const robotAdderReducer = (
  state = {
    numberRA: 1,
    numberLB: 1,
    robotArray: [defaultBot],
    leaderBoardArray: []
  },

  action
) => {
  let index = 0;
  switch (action.type) {
    case "Increment":
      let newArray = state.robotArray;
      newArray.push(new bot.UnipedalRobot(state.numberRA + 1));
      // newArray.push({ id: state.number + 1, type: defaultType, name: "" });
      return {
        ...state,
        numberRA: state.numberRA + 1,
        robotArray: newArray
      };
    case "Decrement":
      let newArray2 = state.robotArray;
      newArray2.pop();
      return {
        ...state,
        numbnumberRAer: state.numberRA === 0 ? 0 : state.numberRA - 1, //Delete only if greater than 0
        robotArray: newArray2
      };

    case "onTextChange":
      let newArray3 = state.robotArray;
      index = action.id - 1;
      newArray3[index].name = action.event.target.value;
      return {
        ...state,
        robotArray: newArray3
      };
    case "onSelectedDropdown":
      let newArray4 = state.robotArray;
      index = action.id - 1;

      newArray4[index] = bot.getRobotTypeWithId({
        typeId: action.event.target.value,
        id: action.id,
        name: newArray4[index].name
      });

      return {
        ...state,
        robotArray: newArray4
      };
    case "onAddAll":
      var array = state.leaderBoardArray.concat(state.robotArray);
      //change the id for all the lb array elements
      for (let i = 0; i < array.length; i++) {
        array[i].id = i + 1;
      }

      return {
        ...state,
        numberRA: 0,
        numberLB: array.length,
        robotArray: [],
        leaderBoardArray: array
      };
    default:
      return state;
  }
};

export default robotAdderReducer;
