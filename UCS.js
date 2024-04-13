// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Uniform cost search");
class Node {
    constructor(id, g) {
        this.id = id; // Node ID
        this.g = g; // Cost from start node to this node
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node, priority) {
        this.queue.push({ node, priority });
        this.sort();
    }

    dequeue() {
        return this.queue.shift().node;
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function UniformCostSearch(graph, start, goals) {
    const n = graph.length; // Number of nodes in the graph

    // Priority queue to store nodes based on their g values
    const pq = new PriorityQueue();

    // Map to store parent nodes for backtracking the path
    const parent = {};

    // Map to store the cost from start node to each node
    const gValues = {};

    // Initialize g values
    for (let i = 0; i < n; ++i) {
        gValues[i] = Infinity;
    }

    // Start node initialization
    gValues[start] = 0;
    const startNode = new Node(start, 0);
    pq.enqueue(startNode, startNode.g);

    // Least cost path found so far among all the goals
    let leastCostPath = null;

    // Uniform cost search algorithm
    while (!pq.isEmpty()) {
        const current = pq.dequeue();

        const currentID = current.id;

        // Check if the current node is one of the goals
        if (goals.includes(currentID)) {
            // Reconstruct the path from start to goal
            const path = [];
            let currentGoal = currentID;
            while (currentGoal !== start) {
                path.push(currentGoal);
                currentGoal = parent[currentGoal];
            }
            path.push(start);
            path.reverse();

            // Update least cost path if needed
            if (!leastCostPath || computePathCost(path) < computePathCost(leastCostPath)) {
                leastCostPath = path;
            }
        }

        // Explore neighbors of the current node
        for (let i = 0; i < n; ++i) {
            if (graph[currentID][i] !== 0) { // There is an edge between current node and neighbor i
                const neighborID = i;
                const edgeCost = graph[currentID][i];
                const tentative_g = gValues[currentID] + edgeCost;

                // Update if this path is better than the previous one
                if (tentative_g < gValues[neighborID]) {
                    gValues[neighborID] = tentative_g;
                    parent[neighborID] = currentID;
                    const neighbor = new Node(neighborID, tentative_g);
                    pq.enqueue(neighbor, neighbor.g);
                }
            }
        }
    }

    // Return the least cost path found among all the goals
    return leastCostPath || [];
}

// Helper function to compute the cost of a path
function computePathCost(path) {
    let cost = 0;
    for (let i = 1; i < path.length; i++) {
        // Assuming uniform edge costs
        cost += 1; // Replace with actual edge costs if available
    }
    return cost;
}

// Test
const graph = [
    [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [3, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
];

const startNode = 19; // Start node ID
const goalNodes = [0, 1, 2, 3]; // Goal node IDs

// Perform Uniform Cost Search
const path = UniformCostSearch(graph, startNode, goalNodes);

// Print the path
if (path.length === 0) {
    console.log("Connecting you to an official right now hang tight");
} else {
    console.log("Least cost path:", path);
}
