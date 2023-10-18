import { UnionFind } from "./data-structures/union-find";



export function countComponents(n: number, edges: number[][]): number {
  const uf = new UnionFind(n);
  edges.forEach(el => {
      const [start, end] = el;
      if(uf.union(start,end)) {
          n--;
      }
  })
  return n;
};

