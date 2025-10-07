class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}

const root = new TreeNode("CEO");
const manager1 = new TreeNode("Manager 1");
const manager2 = new TreeNode("Manager 2");
const emp1 = new TreeNode("Employee A");
const emp2 = new TreeNode("Employee B");
const emp3 = new TreeNode("Employee C");
const inter1 = new TreeNode("Intern 1");
const inter2 = new TreeNode("Intern 2");
const inter3 = new TreeNode("Intern 3");
const inter4 = new TreeNode("Intern 4");

// Build the tree structure
root.addChild(manager1);
root.addChild(manager2);
manager1.addChild(emp1);
manager1.addChild(emp2);
manager2.addChild(emp3);
emp1.addChild(inter1);
emp1.addChild(inter2);

console.log(JSON.stringify(root));
