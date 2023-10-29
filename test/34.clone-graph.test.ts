import cloneGraph, { CheckNode } from '../blind75/34.clone-graph';

describe('cloneGraph', () => {
  it('should return null for an empty graph', () => {
    expect(cloneGraph(null)).toBe(null);
  });

  it('should clone a graph with a single node', () => {
    const node = new CheckNode(1);
    const clonedNode = cloneGraph(node);
    expect(clonedNode).not.toBe(null);
    expect(clonedNode).not.toBe(node);
    expect(clonedNode!.val).toBe(node.val);
    expect(clonedNode!.neighbors.length).toBe(0);
  });

  it('should clone a graph with multiple nodes', () => {
    const node1 = new CheckNode(1);
    const node2 = new CheckNode(2);
    const node3 = new CheckNode(3);
    node1.neighbors = [node2, node3];
    node2.neighbors = [node1, node3];
    node3.neighbors = [node1, node2];

    const clonedNode = cloneGraph(node1);

    expect(clonedNode).not.toBe(null);
    expect(clonedNode).not.toBe(node1);
    expect(clonedNode!.val).toBe(node1.val);
    expect(clonedNode!.neighbors.length).toBe(2);
    expect(clonedNode!.neighbors[0]).not.toBe(null);
    expect(clonedNode!.neighbors[1]).not.toBe(null);

    expect(clonedNode!.neighbors[0]!.val).toBe(node2.val);
    expect(clonedNode!.neighbors[1]!.val).toBe(node3.val);
  });
});
