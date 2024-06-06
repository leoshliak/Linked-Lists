 class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value) {
        if (this.listHead == null) {
            this.listHead = new Node(value);
        } else {
            let pon = this.listHead;
            while (pon.nextNode != null) {
                pon = pon.nextNode;
            }
            pon.nextNode = new Node(value);
        }
    }

    prepend(value){
        let newNode = new Node(value);
        newNode.nextNode = this.listHead;
        this.listHead = newNode;
    }
 }

 class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
 }