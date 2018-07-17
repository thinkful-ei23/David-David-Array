let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let forwadMovements = turtleMovements.filter(steps => steps[0] >= 0 && steps[1] >=0);

let logSteps = forwadMovements.map(steps => steps[0] + steps[1]);

logSteps.forEach(steps => {console.log(steps)});