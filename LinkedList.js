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

    prepend(value) {
        let newNode = new Node(value);
        newNode.nextNode = this.listHead;
        this.listHead = newNode;
    }

    size() {
        let pon = this.listHead;
        let num = 0;
        while (pon.nextNode != null) {
            pon = pon.nextNode;
            num++
        }
        return num;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let pon = this.listHead;
        while (pon.nextNode != null) {
            pon = pon.nextNode;
        }
        return pon;
    }

    at(index) {
        let pon = this.listHead;
        for(let i = 0; i < index; i++) {
            pon = pon.nextNode;
        }
        if(pon == null){
           return 'Error. There is no item for this index';
        }
        return pon;
    }

    pop(){
        if(this.listHead == null) return;
        if(this.listHead.nextNode == null) {
            this.listHead = null;
        }
        let pon = this.listHead;
            while (pon.nextNode.nextNode != null) {
                pon = pon.nextNode;
            }
            pon.nextNode = null;
    }

    contains(value) {
        if (this.listHead == null) {
            return false; 
        }

        let pon = this.listHead;
        while (pon != null) {
            if (pon.value == value) {
                return true; 
            }
            pon = pon.nextNode;
        }

        return false; 
    }
    find(value) {
        if (this.listHead == null) {
            return null; 
        }
        let pon = this.listHead;
        let index = -1
        while (pon != null) {
            if (pon.value == value) {
                return index; 
            }
            pon = pon.nextNode;
            index++
        }
        return null;
    }

    toString() {
        let pon = this.listHead;
        let string = '';
        while (pon != null) {
            let pon = pon.nextNode;
            string += ` ( ${pon.value} ->)`
        }
        return string += 'null';
    }

    insertAt(value, index) {
        if (this.listHead == null) this.prepend(value);
        let pon = this.listHead;
        let prev = null;
        for(let i = 0; i < index; i++) {
            prev = pon
            pon = pon.nextNode;
            if(pon == null) break;
        }
        newNode = new Node(value);
        prev.nextNode = newNode;
        newNode.nextNode = pon;
    }

    removeAt(index) {
        if (this.listHead == null) return;
        let pon = this.listHead;
        let prev = null;
        for(let i = 0; i < index; i++) {
            prev = pon
            pon = pon.nextNode;
            if(pon == null) return;
        }
        prev.nextNode = pon.nextNode;
    }
 }

 class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
 }