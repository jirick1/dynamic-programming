export class Node {
  value: number;
  left: Node;
  right: Node;

  public constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public isLeaf(): boolean {
    return (this.left == null && this.right == null)
  }

  public printTree(): void {
    console.log(this.value)

    if (this.left != null) {
      this.left.printTree()
    }

    if (this.right != null) {
      this.right.printTree()
    }
  }
}

var root = new Node(5) // root
root.left = new Node(1); // left node
root.left.right = new Node(8)
root.left.left = new Node(3);
root.left.left.left = new Node(6);
root.left.left.right = new Node(7);
root.right = new Node(4); // right node
root.right.left = new Node(9);
root.right.right = new Node(2)

const pathToX = (root: Node, num: number) => {
  if (root == null) return null;
  if (root.value == num) return [root];
  
  var leftPath = pathToX(root.left, num)
  if (leftPath != null) {
    leftPath.push(root);
    return leftPath;
  }

  var rightPath = pathToX(root.right, num)
  if (rightPath != null) {
    rightPath.push(root);
    return rightPath;
  }

  return null;
}

const lca = (root: Node, j: number, k: number) => {
  var pathToJ = pathToX(root, j);
  var pathToK = pathToX(root, k);

  if (pathToJ == null || pathToK == null) {
    return null;
  }

  var lcaToReturn = null;
  while (pathToJ.length != 0 && pathToK.length != 0) {
    var jpop = pathToJ.pop();
    var kpop = pathToK.pop();

    if (jpop == kpop) {
      lcaToReturn = jpop;
    } else {
      break;
    }
  }
  return lcaToReturn;
};


console.log(lca(root, 8, 6)) // Node.value == 1
console.log(lca(root, 1, 5)) // Node.value == 5
console.log(lca(root, 2, 2)) // Node.value == 2
console.log(lca(null, 2, 0)) // null if given a value that doesn't exist in the tree
console.log(lca(null, 1, 5)) // null
