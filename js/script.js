import List from './modules/list.js';
import Stack from './modules/stack.js';

(function(){
    // list test
    
    const myList = new List();

    console.log("List Test");

    myList.pushFront("A");
    myList.pushFront("B");
    myList.pushFront("C");
    myList.pushFront("D");
    myList.pushFront("E");
    myList.insert("First", 0);

    myList.insert("Last", myList.size());
    myList.insert("Second Last", myList.size() - 1);
    myList.remove(7);
    myList.remove(1);
    myList.remove(1);
    myList.remove(1);
    myList.remove(1);
    myList.remove(1);
    myList.remove(1);

    console.log(myList.toArray());
    console.log(myList.size());

    // stack test
    console.log("Stack");
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    stack.pop();
    console.log(stack.peek());

    console.log(stack.toArray());
})();