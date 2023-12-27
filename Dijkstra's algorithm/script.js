class Graph {
    constructor() {
        this.nodes = [];
        this.edges = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = [];
    }

    addEdge(node1, node2, weight) {
        this.edges[node1].push({ node: node2, weight: weight });
        this.edges[node2].push({ node: node1, weight: weight });
    }
}

function dijkstra(graph, startNode) {
    let distances = {};
    let visited = {};
    let previous = {};
    let queue = [];

    graph.nodes.forEach(node => {
        distances[node] = Infinity;
        previous[node] = null;
        visited[node] = false;
    });

    distances[startNode] = 0;
    queue.push({ node: startNode, distance: 0 });

    while (queue.length > 0) {
        queue.sort((a, b) => a.distance - b.distance);

        const currentNode = queue.shift().node;

        if (!visited[currentNode]) {
            visited[currentNode] = true;

            graph.edges[currentNode].forEach(neighbor => {
                const newDistance = distances[currentNode] + neighbor.weight;

                if (newDistance < distances[neighbor.node]) {
                    distances[neighbor.node] = newDistance;
                    previous[neighbor.node] = currentNode;
                    queue.push({ node: neighbor.node, distance: newDistance });
                }
            });
        }
    }

    return { distances, previous };
}

const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "E", 3);

const startNode = "B";
const result = dijkstra(graph, startNode);

console.log(`Shortest distances from ${startNode}:`, result.distances);
console.log("Previous nodes:", result.previous);
