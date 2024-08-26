//1. LinkedList will represent the full list
function linkedList () {
    let head = null;
    let length = null;

    const append = (value) => {
        let node = Node(value);

        if (head === null){
            head = node;
        } else {
            let current = head;
             
            while (current.next != null){
                current = current.next
            }
            current.next = node;
        }
        length++;
    }
    
    const prepend = (value) => {
        let node = new Node(value);
        let previousHead = head;
        head = node;
        head.next = previousHead;

        length++;
    }

    const size = () => {
        //return the total number of nodes in the list

        let current = head;
        let size = 1;

        while (current.next != null){
            size++;
            current = current.next;
        }

        length++;
        return size;
    }

    const start = () => {
        //return the first node in the list
        return head;
    }

    const tail = () => {
        //return the last node in the list
        let current = head;

        while (current.next != null){
            current = current.next;
        }

        return current;
    }

    const at = (index) => {
        //returns the node at the given index
        let current = head;
        
        for (let i = 0; i < index; i++){
            current = current.next;
        }

        return current;
    }

    const pop = () => {
        //removes the last element from the list
        if (head.next === null){
            return null;
        }
        let current = head;
        let previous = null;

        while (current.next != null){
            previous = current;
            current = current.next;
        }

        previous.next = null;
    }

    const contains = (value) => {
        //returns true if the passed in value in the list, otherwise returns false
        let current = head;

        if (head.next === null){
            if(head.value === value){
                return true;
            }
            return false;
        }

        while(current.next != null){
            current = current.next;
            if (current.value === value){
                return true;
            }
        }

        return false;
    }

    const find = (value) => {
        //returns the index of the node containing value, or null if not found
        let current = head;
        let index = 1;

        if (head.next === null){
            if (head.value === value){
                return index;
            }
            return null;
        }

        while(current.next != null){
            if (current.value === value){
                return index;
            }
            current = current.next;
            index++;
        }

        return null;
    }

    const toString = () => {
        //represents your linked list objects as strings, so you can print them out and preview in the console
        let current = head;
        let string = `(${current.value})`;

        while (current.next != null){
            current = current.next;
            string = string + ` -> (${current.value})`
        }
        string = string + ' -> null';
        return string;
    }

    return {
        append,
        prepend,
        size,
        start,
        tail,
        at,
        pop,
        contains,
        find,
        toString
    }
}
//2. Node will contain a value property and a link to the nextNode set both as null by default
function Node (value, next){
    value ? value : null;
    next = null;
    return {value, next};
}

export {linkedList}