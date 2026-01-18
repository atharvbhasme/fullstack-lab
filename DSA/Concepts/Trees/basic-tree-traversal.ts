import { TreeNode } from "./binary-tree";

// inorder: left-center-right
function inOrder<T>(node: TreeNode<T> | null, res: T[], count:number): void {
  console.log(`Value of node is ${JSON.stringify(node)} at count: ${count}`)
  console.log(`Value of result array is ${JSON.stringify(res)} at count : ${count}`);
  count++;
  if (node === null) return;

  inOrder(node.left, res, count);
  res.push(node.data);
  inOrder(node.right, res, count);
}


// inorder: left-center-right
function preOrder<T>(node: TreeNode<T>| null, res:T[]):void{
  if(node === null)return;
  res.push(node.data);
  preOrder(node.left, res);
  preOrder(node.right, res)
}


// postorder: right-center-left
function postOrder<T>(node:TreeNode<T> | null, res: T[]):void{
  if(node===null)return;
  postOrder(node.right, res);
  res.push(node.data);
  postOrder(node.left, res);
}

// Tree creation
const root = new TreeNode<number>(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

const res: number[] = [];
let count = 0;

// inOrder(root, res, count);
// preOrder(root, res)
// postOrder(root, res);

console.log(res.join(" "));