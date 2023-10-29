export class CheckNode {
  public val: number;
  public neighbors: CheckNode[];

  constructor(val: number, neighbors: CheckNode[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

export default function cloneGraph(node: CheckNode | null): CheckNode | null {}
