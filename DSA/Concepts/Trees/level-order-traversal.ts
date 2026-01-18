import { TreeNode } from "./binary-tree";


function levelOrderRec<T>(root: TreeNode<T> | null, level:number, res:any):void {
    // Base case
    if (root === null) return;

    // Add a new level to the result if needed
    if (res.length <= level)
        res.push([]);

    // Add current node's data to its corresponding level
    res[level].push(root.data);

    // Recur for left and right children
    levelOrderRec(root.left, level + 1, res);
    levelOrderRec(root.right, level + 1, res);
}

// Function to perform level order traversal
function levelOrder<T>(root:TreeNode<T>):T[] {
    // Stores the result level by level
    const res:T[] = [];

    levelOrderRec(root, 0, res);
    return res;
}


const root = new TreeNode<number>(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

const ans = levelOrder(root);
console.log(ans)
