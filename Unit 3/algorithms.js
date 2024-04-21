class Leaf {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

var tree = new Leaf("11");
tree.left = new Leaf("3");
tree.right = new Leaf("4");
tree.left.left = new Leaf("75");
tree.left.right = new Leaf("2");
tree.right.left = new Leaf("1");
tree.right.right = new Leaf("11");
tree.left.left.left = new Leaf("3");
tree.left.left.right = new Leaf("4");
tree.left.right.left = new Leaf("80");



var breadth = [];
var depth = [];

function depthFirstSearch(node) {
    if (node) {
        depth.push(node.value);
        depthFirstSearch(node.left);
        depthFirstSearch(node.right);
    }
    document.getElementById("depthText").innerText = depth.join(", ");
}

function breathFirstSearch(node) {
    var queue = [];
    queue.push(node);

    while(queue.length > 0) {
        var currentNode = queue.shift();
        breadth.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    document.getElementById("breathText").innerText = breadth.join(", ");
}



