import countComponents from '../blind75/66.number-of-connected-components-in-an-undirected-graph';

describe('countComponents', () => {
  it('should return the correct number of connected components for a simple case', () => {
    const n = 5;
    const edges = [
      [0, 1],
      [1, 2],
      [3, 4],
    ];
    expect(countComponents(n, edges)).toBe(2);
  });

  it('should return the correct number of connected components for disconnected nodes', () => {
    const n = 5;
    const edges:number[][] = [];
    expect(countComponents(n, edges)).toBe(5);
  });

  it('should handle a single-node graph', () => {
    const n = 1;
    const edges:number[][] = [];
    expect(countComponents(n, edges)).toBe(1);
  });

  it('should handle a case with no edges', () => {
    const n = 4;
    const edges:number[][] = [];
    expect(countComponents(n, edges)).toBe(4);
  });

  it('should return the correct number of connected components for a more complex case', () => {
    const n = 6;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [4, 5],
    ];
    expect(countComponents(n, edges)).toBe(2);
  });

  it('should handle a case with all nodes connected in a line', () => {
    const n = 5;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    expect(countComponents(n, edges)).toBe(1);
  });
});
