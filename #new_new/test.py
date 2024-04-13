import heapq

class PriorityQueue:
    def __init__(self):
        self.elements = []
        self.node_indices = {}  # Dictionary to store indices of elements in the heap

    def is_empty(self):
        return len(self.elements) == 0

    def put(self, node_id, parent_id, cost):
        entry = (cost, node_id, parent_id)
        self.node_indices[node_id] = len(self.elements)
        heapq.heappush(self.elements, entry)

    def peek(self):
        return self.elements[0] if self.elements else None

    def get(self):
        return heapq.heappop(self.elements)

    def delete(self, node_id):
        if node_id not in self.node_indices:
            return  # Node not found in the priority queue
        index = self.node_indices[node_id]
        del self.node_indices[node_id]
        self.elements[index] = self.elements[-1]  # Move the last element to the position of the deleted element
        self.elements.pop()  # Remove the last element
        heapq.heapify(self.elements)  # Restore heap property

    def contains(self, node_id):
        return node_id in self.node_indices

# Example usage:
pq = PriorityQueue()

# Put some elements in the priority queue
pq.put(1, None, 0)  # (node_id, parent_id, cost)
pq.put(2, 1, 3)
pq.put(3, 1, 2)

# Delete an element
# pq.delete(2)

# Get elements from the priority queue
while not pq.is_empty():
    cost, node_id, parent_id = pq.get()
    print("Node:", node_id, "Parent:", parent_id, "Cost:", cost)