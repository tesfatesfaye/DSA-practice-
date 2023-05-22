class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        }
        else {

            let node = this.root
           
            while (true) {
                if (node.val > value) {
                    if (node.left !== null) {
                        node = node.left
                    }
                    else {
                        node.left = newNode
                        break;
                    }
                }

                else {
                    if (node.right !== null) {
                        node = node.right
                    }
                    else {
                        node.right = newNode
                        break;
                    }
                }
            }
        }
        return this

    }


}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(2)
tree.insert(4)
tree.insert(14)
tree.insert(16)
console.log(tree.root.left)