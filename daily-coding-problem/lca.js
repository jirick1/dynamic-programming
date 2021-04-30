"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    Node.prototype.isLeaf = function () {
        return (this.left == null && this.left.right == null);
    };
    Node.prototype.printTree = function () {
        console.log(this.value);
        if (this.left != null) {
            this.left.printTree();
        }
        if (this.right != null) {
            this.right.printTree();
        }
    };
    return Node;
}());
exports.Node = Node;
