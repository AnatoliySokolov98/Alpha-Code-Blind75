export class CheckNode {
  public val: number;
  public neighbors: CheckNode[];

  constructor(val: number, neighbors: CheckNode[] = []) {
      this.val = val;
      this.neighbors = neighbors;
  }
}

export function cloneGraph(node: CheckNode | null): CheckNode | null {
    const visited = new Map<CheckNode, CheckNode>();
    function dfs(current: CheckNode | null): CheckNode | null {
        if (!current) return null;
        if (visited.has(current)) return visited.get(current) as CheckNode;
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
