const map = 
[
[ 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
[ 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
[ 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
[ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
[ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
[ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
[ 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
[ 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
]

const ttiMatrix = 
[
    [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250],
    [200, 300, 400, 500, 600, 700, 800, 900, 1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200],
    [300, 400, 500, 600, 700, 800, 900, 1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150],
    [400, 500, 600, 700, 800, 900, 1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100],
    [500, 600, 700, 800, 900, 1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50],
    [600, 700, 800, 900, 1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 30],
    [700, 800, 900, 1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 30, 20],
    [800, 900, 1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 30, 20, 50],
    [900, 1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 30, 20, 50, 100],
    [1000, 950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 30, 20, 50, 100, 150],
    [950, 900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 30, 20, 50, 100, 150, 200],
    [900, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 30, 20, 50, 100, 150, 200, 250],
    [850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 30, 20, 50, 100, 150, 200, 250, 300],
    [800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 30, 20, 50, 100, 150, 200, 250, 300, 350]
  ]
  
function simulateFireSpread(map, fire, time, ttiMatrix) {
const directions = [
    { dx: -1, dy: 0 }, { dx: 1, dy: 0 },
    { dx: 0, dy: -1 }, { dx: 0, dy: 1 }
];
const calculateSpreadProbability = (tti) => {
    return Math.max(0.01, Math.min(1.0, 1 / tti));
};
let t = 0;
    while (t<time) {
        let avg_tti = 0;
        let steps = 0;
        const newFire = fire.map(row => [...row]);
        for (let x = 0; x < map.length; x++) {
        for (let y = 0; y < map[0].length; y++) {
            if (fire[x][y]) { // Already on fire
            continue;
            }
            let fireNearby = directions.some(({dx, dy}) => {
            const nx = x + dx, ny = y + dy;
            return nx >= 0 && nx < map.length && ny >= 0 && ny < map[0].length && fire[nx][ny];
            });
            if (fireNearby) {
            let spreadProbability = calculateSpreadProbability(ttiMatrix[x][y]);
            avg_tti += spreadProbability;
            steps += 1;
            if (Math.random() < spreadProbability) {
                newFire[x][y] = true;
            }
            }
        }
        }
        fire = newFire;
        t += avg_tti/steps;
    }
return fire;
}

let goalNodes = [ [6,23] , [13,21] , [13,22] , [9,4] , [0,6] ]

const rowCount = map.length;
const colCount = map[0].length;

const parentX = new Array(rowCount).fill(null).map(() => new Array(colCount).fill(-1));
const parentY = new Array(rowCount).fill(null).map(() => new Array(colCount).fill(-1));
const visited = new Array(rowCount).fill(null).map(() => new Array(colCount).fill(false));

function isValidCell(map, x, y) {
  return x >= 0 && x < map.length && y >= 0 && y < map[0].length && map[x][y] === 1;
}

function isNodeSafe(map, fire, x, y, time, spreadRate) {
  if (fire[x][y]) return false;
  return true;
}


function coordinateExists(coordinate, coordinatesArray) {
    for (const coord of coordinatesArray) {
        if (coord[0] === coordinate[0] && coord[1] === coordinate[1]) {
            return true;
        }
    }
    return false;
}
  
  function bfs(map, visited, fire, startX, startY, goalNodes, parentX, parentY) {
    const queue = [];
    queue.push({ x: startX, y: startY });
    visited[startX][startY] = true;
    let time = 0;
  
    while (queue.length > 0) {
      const currentSize = queue.length;
  
      for (let i = 0; i < currentSize; i++) {
        const { x, y } = queue.shift();
  
        if (!isNodeSafe(map, fire, x, y, time)) continue;
  
        const currCoordinate = [x, y];
        if (coordinateExists(currCoordinate, goalNodes)) {
          return { goalNodeIndex: goalNodes.indexOf(currCoordinate), timeToEscape: time };
        }
  
        const neighbors = [
          { x: x - 1, y },
          { x: x + 1, y },
          { x, y: y - 1 },
          { x, y: y + 1 },
        ];
  
        for (const neighbor of neighbors) {
          const { x: neighborX, y: neighborY } = neighbor;
          if (isValidCell(map, neighborX, neighborY) && !visited[neighborX][neighborY]) {
            queue.push(neighbor);
            visited[neighborX][neighborY] = true;
            parentX[neighborX][neighborY] = x;
            parentY[neighborX][neighborY] = y; 
          }
        }
      }
  
      time++;
    }
  
    return { goalNodeIndex: -1, timeToEscape: -1 };
  }
  
  

const fire = new Array(rowCount).fill(null).map(() => new Array(colCount).fill(false));

// fire[6][6] = true;
// fire[6][7] = true;

function printPath(parentX, parentY, goalX, goalY) {
    const path = [];
    let x = goalX;
    let y = goalY;
  
    while (x !== -1 && y !== -1) {
      path.push({ x, y });
      const tempX = parentX[x][y];
      const tempY = parentY[x][y];
      x = tempX;
      y = tempY;
    }
  
    return path.reverse();
  }
  
const time = 10;

// const simulatedFire = simulateFireSpread(map, fire, time, ttiMatrix);

const startX = 0, startY = 3;

const { goalNodeIndex, timeToEscape } = bfs(map, visited, fire, startX, startY, goalNodes, parentX, parentY);

if (goalNodeIndex !== -1) {
  const goalNodeCoordinates = goalNodes[goalNodeIndex];
  const path = printPath(parentX, parentY, goalNodeCoordinates[0], goalNodeCoordinates[1]);
  console.log("Time to escape:", timeToEscape);
  console.log("Path:", path);
} else {
  console.log("No escape route found");
}