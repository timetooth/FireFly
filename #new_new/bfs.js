const map = [
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
];

const ttiMatrix = [
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
];

let goalNodes = [[6, 23], [13, 21], [13, 22], [9, 4], [0, 6]];

const rowCount = map.length;
const colCount = map[0].length;
const parentX = [];
const parentY = [];

for (let i = 0; i < rowCount; i++) {
  parentX.push(new Array(colCount).fill(-1));
  parentY.push(new Array(colCount).fill(-1));
}

const visited = new Array(rowCount).fill(null).map(() => new Array(colCount).fill(false));

function isValidCell(map, x, y) {
  return x >= 0 && x < map.length && y >= 0 && y < map[0].length && map[x][y] === 1;
}

function isNodeSafe(map, fire, x, y, time, spreadRate) {
  if (fire[x][y]) return false;
  return true;
}

function simulateFireSpread(map, fire, time, ttiMatrix) {
  // Implementation omitted for brevity.
}

function is_GoalNode(coordinate, coordinatesArray) {
  for (const coord of coordinatesArray) {
    if (coord[0] === coordinate[0] && coord[1] === coordinate[1]) {
      return true;
    }
  }
  return false;
}

function bfs(map, visited, fire, x, y, goalNodes, parentX, parentY) {
  const queue = [];
  queue.push([x, y]);
  let time = 0;
  visited[x][y] = true;
  var goalX = null;
  var goalY = null;
  while (queue.length > 0) {
    const n = queue.length;
    let found = false;
    for (let i = 0; i < n; i++) {
      const [x, y] = queue.shift();
      if (!isNodeSafe(map, fire, x, y, time)) continue;
      if (is_GoalNode([x, y], goalNodes)) {
        found = true;
        goalX = x;
        goalY = y;
        break;
      }
      if (isValidCell(map, x - 1, y) && !visited[x - 1][y] && map[x - 1][y] === 1) {
        queue.push([x - 1, y]);
        visited[x - 1][y] = true;
        parentX[x - 1][y] = x;
        parentY[x - 1][y] = y;
      }
      if (isValidCell(map, x + 1, y) && !visited[x + 1][y] && map[x + 1][y] === 1) {
        queue.push([x + 1, y]);
        visited[x + 1][y] = true;
        parentX[x + 1][y] = x;
        parentY[x + 1][y] = y;
      }
      if (isValidCell(map, x, y - 1) && !visited[x][y - 1] && map[x][y - 1] === 1) {
        queue.push([x, y - 1]);
        visited[x][y - 1] = true;
        parentX[x][y - 1] = x;
        parentY[x][y - 1] = y;
      }
      if (isValidCell(map, x, y + 1) && !visited[x][y + 1] && map[x][y + 1] === 1) {
        queue.push([x, y + 1]);
        visited[x][y + 1] = true;
        parentX[x][y + 1] = x;
        parentY[x][y + 1] = y;
      }
    }
    if (found) break;
    time++;
  }
  return [goalX,goalY,time];
}

const fire = new Array(rowCount).fill(null).map(() => new Array(colCount).fill(false));

// fire[6][6] = true;
// fire[6][7] = true;
fire[1][6] = true;

function printPath(parentX, parentY, x, y) {
  if (parentX[x][y] === -1 && parentY[x][y] === -1) {
    console.log("No path found");
    return;
  }

  const path = [];
  while (x !== -1 && y !== -1) {
    path.push({ x, y });
    const tempX = parentX[x][y];
    const tempY = parentY[x][y];
    x = tempX;
    y = tempY;
  }

  // Print path in reverse order (from end to start)
  for (let i = path.length - 1; i >= 0; i--) {
    console.log(path[i].x, path[i].y);
  }
}

const time = 10;

// const simulatedFire = simulateFireSpread(map, fire, time, ttiMatrix);

const startX = 3,
  startY = 0;
// const endX = 0,
//   endY = 6;

const temp = bfs(map, visited, fire, startX, startY, goalNodes, parentX, parentY);

  console.log("Path found. Time to escape:temp[2]");
  printPath(parentX, parentY, temp[0],temp[1]);
