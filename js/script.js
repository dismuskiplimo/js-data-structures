import List from './modules/list.js';

(function(){
    // list test
    
    const list = new List();

    console.log("List Test");

    list.push_front("A");
    list.push_front("B");
    list.push_front("C");
    list.push_front("D");
    list.push_front("E");
    list.push_back("Back");
    list.push_front("E");

    console.log(list.toArray());
})();