"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneGraph = exports.CheckNode = void 0;
class CheckNode {
    val;
    neighbors;
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}
exports.CheckNode = CheckNode;
function cloneGraph(node) {
    const visited = new Map();
    function dfs(current) {
        if (!current)
            return null;
        if (visited.has(current))
            return visited.get(current);
        const cloneCheckNode = new CheckNode(current.val);
        visited.set(current, cloneCheckNode);
        for (const neighbor of current.neighbors) {
            const neighborClone = dfs(neighbor);
            if (neighborClone !== null) {
                cloneCheckNode.neighbors.push(neighborClone);
            }
        }
        return cloneCheckNode;
    }
    return dfs(node);
}
exports.cloneGraph = cloneGraph;
