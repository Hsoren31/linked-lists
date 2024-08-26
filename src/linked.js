//1. LinkedList will represent the full list
function linkedList () {
    let head = null;
    let length = null;

    const append = (value) => {
        let node = Node(value);

        if (head === null){
            head = node;
            console.log(head);
        } else {
            let current = head;
             
            while (current.next != null){
                current = current.next
            }
            current.next = node;
            console.log(current)
        }
        length++;
    }
    
    const prepend = (value) => {
        //make new node with value passed in
        let node = new Node(value);
        //give variable to current head
        let previousHead = head;
        //new head value is the new node
        head = node;
        //the previous head and its linked list become the nodes next value
        head.next = previousHead;

        console.log(head);
        length++;
    }

    return {
        append,
        prepend
    }
}
//2. Node will contain a value property and a link to the nextNode set both as null by default
function Node (value, next){
    value ? value : null;
    next = null;
    return {value, next};
}

export {linkedList}