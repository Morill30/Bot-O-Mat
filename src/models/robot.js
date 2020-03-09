class Robot {
  constructor(id, type, name, tasks) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.tasks = tasks;
    this.taskCompleted = 0;
  }
}

class UnipedalRobot extends Robot {
  static typeId = "Unipedal Robot";
  constructor(
    id = 1,
    type = UnipedalRobot.typeId,
    name = "Default",
    tasks = getRandomTasks()
  ) {
    super(id, type, name, tasks);
  }
}

class BipedalRobot extends Robot {
  static typeId = "Bipedal Robot";
  constructor(
    id = 1,
    type = BipedalRobot.typeId,
    name = "Default",
    tasks = getRandomTasks()
  ) {
    super(id, type, name, tasks);
  }
}

class QuadrupedalRobot extends Robot {
  static typeId = "Quadrupedal Robot";
  constructor(
    id = 1,
    type = QuadrupedalRobot.typeId,
    name = "Default",
    tasks = getRandomTasks()
  ) {
    super(id, type, name, tasks);
  }
}

class RadialRobot extends Robot {
  static typeId = "Radial Robot";
  constructor(id = 1, type = RadialRobot.typeId, name = "Default", tasks = []) {
    super(id, type, name, tasks);
  }
}

class ArachnidRobot extends Robot {
  static typeId = "Arachnid Robot";
  constructor(
    id = 1,
    type = ArachnidRobot.typeId,
    name = "Default",
    tasks = getRandomTasks()
  ) {
    super(id, type, name, tasks);
  }
}

class AeroNauticalRobot extends Robot {
  static typeId = "Aeronautical Robot";
  constructor(
    id = 1,
    type = AeroNauticalRobot.typeId,
    name = "Default",
    tasks = getRandomTasks()
  ) {
    super(id, type, name, tasks);
  }
}

function getRobotTypeWithId({ typeId, id, name, type }) {
  let newBot;
  switch (typeId) {
    case UnipedalRobot.typeId:
      newBot = new UnipedalRobot(id, type, name);
      return newBot;
    case BipedalRobot.typeId:
      newBot = new BipedalRobot(id, type, name);
      return newBot;
    case QuadrupedalRobot.typeId:
      newBot = new QuadrupedalRobot(id, type, name);
      return newBot;
    case RadialRobot.typeId:
      newBot = new RadialRobot(id, type, name);
      return newBot;
    case ArachnidRobot.typeId:
      newBot = new ArachnidRobot(id, type, name);
      return newBot;
    case AeroNauticalRobot.typeId:
      newBot = new AeroNauticalRobot(id, type, name);
      return newBot;
    default:
      return new UnipedalRobot();
  }
}

function getRandomTasks() {
  let fiveRandomTasks = [];
  for (let i = 0; i < 5; i++) {
    fiveRandomTasks.push(tasks[Math.floor(Math.random() * tasks.length)]);
  }

  return fiveRandomTasks;
}

const tasks = [
  {
    description: "Do the dishes",
    eta: 1000,
    type: BipedalRobot.typeId
  },
  {
    description: "Sweep the house",
    eta: 3000,
    type: ArachnidRobot.typeId
  },
  {
    description: "Do the laundry",
    eta: 10000,
    type: BipedalRobot.typeId
  },
  {
    description: "Take out the recycling",
    eta: 4000,
    type: RadialRobot.typeId
  },
  {
    description: "Make a sammich",
    eta: 7000,
    type: UnipedalRobot.id
  },
  {
    description: "Mow the lawn",
    eta: 20000,
    type: ArachnidRobot.typeId
  },
  {
    description: "Rake the leaves",
    eta: 18000,
    type: AeroNauticalRobot.typeId
  },
  {
    description: "Give the dog a bath",
    eta: 14500,
    type: UnipedalRobot.typeId
  },
  {
    description: "Bake some cookies",
    eta: 8000,
    type: RadialRobot.typeId
  },
  {
    description: "Wash the car",
    eta: 20000,
    type: QuadrupedalRobot.typeId
  },
  {
    description: "Race against a dog",
    eta: 10000,
    type: QuadrupedalRobot.typeId
  },
  {
    description: "Fly to the Moon",
    eta: 25000,
    type: AeroNauticalRobot.typeId
  },
  {
    description: "Perform on the circus",
    eta: 10000,
    type: UnipedalRobot.typeId
  }
];

module.exports = {
  UnipedalRobot: UnipedalRobot,
  BipedalRobot: BipedalRobot,
  ArachnidRobot: ArachnidRobot,
  QuadrupedalRobot: QuadrupedalRobot,
  RadialRobot: RadialRobot,
  AeroNauticalRobot: AeroNauticalRobot,
  getRobotTypeWithId: getRobotTypeWithId,
  getRandomTasks: getRandomTasks
};
