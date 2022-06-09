import Node from "./node.js";

export default class List{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    // push to the front of the list
    push_front(val){
        let newNode = new Node();
        newNode.val = val;
        
        // if the list has no head, make the new value head
        if(this.head == null){
            this.head = newNode   
        }
        
        // else, add it to the front of the list
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        
        // increment the length of the list after new value has been added
        this.length += 1;
    }

    push_back(val){
        let newNode = new Node();
        newNode.val = val;
        
        // if list has no head, make the new value head
        if(this.head == null){
            this.head = newNode
        }

        // else, add the new value to the back of the list
        else{
            let current = this.head;

            // get the last element in the list
            while(current.next != null){
                current = current.next;
            }

            // add the new value as the next element
            current.next = newNode;

            this.length += 1;
        }
    }

    // add a value to the list, alias for push back
    enque(val){
        this.push_back(val);
    }

    // add a value to the end of the list, alias for push back
    add(val){
        this.push_back(val);
    }

    // remove the first element in the list, returns the item removed
    deque(){
        if(this.head != null){
            let headNode = this.head;
            
            if(this.length == 1){
                this.head = null;
            }else{
                this.head = this.head.next;
            }

            this.length -= 1;
            return headNode.val;
        }else{
            throw "Error! Cannot deque empty list";
        }
    }

    // get the first element in list
    peek(){
        return this.head.val;
    }

    // return the menbers as array
    toArray(){
        let arr = [];
        let current = this.head;
    
        // append the values to array
        while(current != null){
            arr.push(current.val);
            current = current.next;
        }  
        
        return arr;
    }
}