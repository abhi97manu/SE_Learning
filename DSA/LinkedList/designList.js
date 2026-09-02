class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor()
    {
        this.head = null;
    }

    append(val){
        const newNode = new Node(val);
       
        if(this.head == null)
        {
            this.head = newNode;
            return
        }
         let current = this.head;
        while(current.next != null)
        {
            current = current.next;
        }

        current.next = newNode;
    }

    getAll()
    {
        let current = this.head;
        while(current !== null)
        {
            console.log(current.val);
            current = current.next;
        }
    }

    reverse(){
        let prev = null;    
        let current = this.head;
        while (current !== null) {
            let nextNode = current.next;
            current.next = prev;
            prev = nextNode;
            current = nextNode;
        }
        this.head = prev;
    }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.getAll();
list.reverse();
list.getAll();