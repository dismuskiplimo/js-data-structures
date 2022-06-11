export default class Stack{
    constructor(){
        this.top = -1;
        this.data = [];
    }

    // add a new value to the stack
    push(val){
        this.data.push(val);
        this.top += 1;
    }

    // remove the last item in the stack and return the value
    pop(){
        if (this.isEmpty()){ throw "Error! Cannot pop empty stack"; }
        
        this.top -= 1;
        
        return this.data.pop();
    }

    // return the last item in the stack
    peek(){
        if (this.isEmpty()){ throw "Error! Cannot peek empty stack"; }

        return this.data[this.top];
    }

    // return the size of the stack
    size(){
        return this.top + 1;
    }

    // check if the stack is empty
    isEmpty(){
        return this.top == -1;
    }

    // return stack as array
    toArray(){
        return this.data;
    }

}