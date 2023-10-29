import { TreeNode } from "./data-structures/tree-node";

export function serialize(root: TreeNode | null): string {
  const res: string[] = [];
  const traverse = (node: TreeNode | null): void => {
      if (!node){
          res.push('n');
          return;
      }
      res.push(String(node.val));
      traverse(node.left);
      traverse(node.right);
  }
  traverse(root);
  return res.join(',');
};


export function deserialize(data: string): TreeNode | null {
  const res = data.split(',');
  let curr = 0;
  const traverse = (): TreeNode | null => {
      const val = res[curr++];
      if (val == 'n') {
          return null;
      }

      const node = new TreeNode(Number(val));
      node.left = traverse();
      node.right = traverse();
      return node;
  }
  return traverse();
};