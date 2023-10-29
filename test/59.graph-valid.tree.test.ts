import validTree from '../blind75/59.graph-valid.tree';

describe('validTree', () => {
  it('should return true for a valid tree with the correct number of edges', () => {
    const n = 5;
    const edges = [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 4],
    ];
    expect(validTree(n, edges)).toBe(true);
  });

  it('should return false for too few edges', () => {
    const n = 5;
    const edges = [
      [0, 1],
      [0, 2],
      [0, 3],
    ];
    expect(validTree(n, edges)).toBe(false);
  });

  it('should return false for too many edges', () => {
    const n = 5;
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
    ];
    expect(validTree(n, edges)).toBe(false);
  });

  it('should return false for a disconnected graph', () => {
    const n = 5;
    const edges = [
      [0, 1],
      [2, 3],
    ];
    expect(validTree(n, edges)).toBe(false);
  });

  it('should return true for a single-node tree', () => {
    const n = 1;
    const edges: number[][] = [];
    expect(validTree(n, edges)).toBe(true);
  });

  it('should return true for a two-node tree', () => {
    const n = 2;
    const edges = [[0, 1]];
    expect(validTree(n, edges)).toBe(true);
  });
});
