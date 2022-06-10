import Node from "./node.js";

export default class List{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    // push to the front of the list
    push_front(val){
        let newNode = new Node(val);
        
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
        let newNode = new Node(val);
        
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

    // function to insert node at a certain index
    insert_at(val, index){
        // only add the new node if the inde provided is valid
        if(index >= 0 && index <= this.length){
            // if the index is 0, append it to the front of the list
            if(index == 0){
                this.push_front(val);
            }

            // if the index is equal to the length, append it to the back of the list
            else if(index == this.length){
                this.push_back(val);
            }

            // else, insert the node between the list
            else{
                let newNode = new Node(val);
                
                let count = 1;
                let current = this.head;
                let previous;

                while(current.next){
                    previous = current;
                    current = current.next;

                    if(count == index){
                        break;
                    }

                    count += 1;
                }            

                newNode.next = current;
                previous.next = newNode;

                this.length += 1;
            }
        }else{
            throw "Error! Index out of bounds"
        }
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