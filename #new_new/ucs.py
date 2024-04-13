import heapq

def uniform_cost_search(graph, start_node, goal_nodes):
   """
   Finds a minimum path from the start_node to any one of the goal nodes using Uniform Cost Search.

   Args:
       graph: A dictionary representing the graph, where keys are nodes and values are
              dictionaries containing adjacent nodes and their edge costs.
       start_node: The starting node.
       goal_nodes: A set of goal nodes.

   Returns:
       A tuple containing the path as a list of nodes, and the total cost of the path.
       If no path is found, returns (None, float('inf')).
   """

   frontier = []  # Priority queue for storing nodes to explore
   heapq.heappush(frontier, (0, start_node))  # Cost, node
   explored = set()  # Set of explored nodes
   parents = {start_node: None}  # Dictionary to track the path
   costs = {start_node: 0}  # Dictionary to store accumulated costs

   while frontier:
       current_cost, current_node = heapq.heappop(frontier)
       explored.add(current_node)

       if current_node in goal_nodes:
           return reconstruct_path(parents, current_node), current_cost

       for neighbor, cost in graph[current_node].items():
           if neighbor not in explored:
               new_cost = current_cost + cost
               if neighbor not in costs or new_cost < costs[neighbor]:
                   costs[neighbor] = new_cost
                   priority = new_cost  # Use cost as priority for uniform cost search
                   heapq.heappush(frontier, (priority, neighbor))
                   parents[neighbor] = current_node

   return None, float('inf')  # No path found

def reconstruct_path(parents, goal_node):
   """Reconstructs the path from the goal node back to the start node."""
   path = [goal_node]
   while parents[goal_node] is not None:
       goal_node = parents[goal_node]
       path.append(goal_node)
   path.reverse()
   return path

# Define a sample graph
graph = {
   'A': {'B': 2, 'C': 4},
   'B': {'D': 5, 'E': 1},
   'C': {'D': 8},
   'D': {},
   'E': {'D': 2, 'G': 3},
   'G': {'F': 1}
}

# Specify start and goal nodes
start_node = 'A'
goal_nodes = {'F'}

# Find the path and cost
path, cost = uniform_cost_search(graph, start_node, goal_nodes)

print("Path:", path)
print("Cost:", cost)
