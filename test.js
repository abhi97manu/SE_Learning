class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function removeNth(list , n){

    let dummy = new Node(0);
    dummy.next = list.head;

    let left = list.head;
    let right = list.head;
    for (let i =0 ; i<n;i++){
        right = right.next;
    }

    while(right !==null)
    {
        left = left.next;
        right=right.next;
    }

    left.next = left.next.next;

    return dummy.next;


}