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

                else if (node.val < value) {
                    if (node.right !== null) {
                        node = node.right
                    }
                    else {
                        node.right = newNode
                        break;
                    }
                }
                else {
                    return undefined
                }
            }
        }
        return this

    }
    find(value) {
        let node = this.root
            while(node) {
                if(node.val===value){
                    return true
                }
                else if(node.val < value){
                    node=node.right
                }
                else {
                    node=node.left
                }
            }
            return false
    }

        BFS(){
            let data=[],queue=[], node=this.root
            if(node){
                queue.push(node)
            }
            else{
                return undefined
            }

            while(queue.length){
                node=queue.shift()
                data.push(node.val)
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
                return data;

        }


}


const tree= new BinarySearchTree()
    tree.insert(10)
    tree.insert(6)
    tree.insert(15)
    tree.insert(3)
    tree.insert(8)
    tree.insert(20)
    console.log(tree.BFS())