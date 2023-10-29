import { UnionFind } from "./data-structures/union-find";

export function validTree(n: number, edges: number[][]): boolean {
  if(n - 1 !== edges.length)
      return false;
  const uf = new UnionFind(n);
  for (let i = 0; i < edges.length; i++) {
      if (uf.union(edges[i][0], edges[i][1]) === false) {
          return false;
      }
  }
  return true;
};













